---
title: Linux 7.2 kernel released with significant new features
source: hn
url: https://lwn.net/Articles/1088991/
date: '2026-08-17'
tags:
- bpf-system-call
- btrfs
- catchup
- cpu-scheduler
- hn
- inline-encryption
- landlock-security
- linux-kernel
- swap-subsystem
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 6
hn_id: '49328140'
comments: https://news.ycombinator.com/item?id=49328140
why_read: This article details the release of the 7.2 Linux kernel, outlining its
  key new features. Readers will learn about enhancements to security, performance,
  and filesystems introduced in this version.
authors:
- corbet
---

The Linux 7.2 kernel is out, packed with crucial enhancements that deep-dive engineers should pay attention to. Significant updates include common attributes support in the BPF system call, refining how extended Berkeley Packet Filters can be used for network and system observability.

Expect improved performance and resource management with cache-aware load balancing for the CPU scheduler and large-folio support within the Btrfs filesystem. These changes mean more efficient memory utilization and better handling of large files, directly impacting system scalability and database performance.

Further swap subsystem improvements and the dm-inlinecrypt device-mapper target for inline encryption hardware solidify the kernel's capabilities in security and system stability. This is not just an incremental release; it is a set of fundamental building blocks for robust system design.
