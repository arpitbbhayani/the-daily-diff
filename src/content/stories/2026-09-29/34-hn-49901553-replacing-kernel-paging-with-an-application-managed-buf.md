---
title: Replacing kernel paging with an application-managed buffer pool
source: hn
url: https://materialize.com/blog/materialize-out-of-core/
date: '2026-09-29'
tags:
- buffer-pool
- catchup
- hn
- kernel-paging
- memory-management
- nvme-storage
- out-of-core-processing
section: databases
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49901553'
comments: https://news.ycombinator.com/item?id=49901553
why_read: Understand how database systems move beyond operating system swap by implementing
  custom buffer pools tailored to NVMe latency and bandwidth characteristics.
authors:
- nate_stewart
---

Operating systems are notoriously bad at managing database memory. Materialize recently documented their architectural shift away from Linux kernel paging toward an application-managed buffer pool to support out-of-core streaming SQL execution.

When an engine relies on OS swap, the kernel evicts fixed 4 KiB pages without knowing which memory blocks contain hot index nodes or cold batch scans. Worse, any page fault stalls the active worker thread synchronously, collapsing query throughput under high memory pressure.

The engineering team addressed this by exploiting the asymmetry between storage latency and bandwidth. While local NVMe random access is hundreds of times slower than DRAM, sequential read bandwidth is only around ten times slower. By implementing an explicit buffer pool, the database can batch asynchronous I/O requests and amortize disk lookup penalties across sequential scans.

Controlling memory representation and eviction policies inside user space remains a foundational pattern for building reliable high-throughput database systems.
