---
title: Why mmap fails as a database buffer pool replacement
source: hn
url: https://vldb.org/cidrdb/2022/are-you-sure-you-want-to-use-mmap-in-your-database-management-system.html
date: '2026-09-30'
tags:
- buffer-pool
- catchup
- database-engines
- file-io
- hn
- mmap
- page-eviction
section: databases
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49912631'
comments: https://news.ycombinator.com/item?id=49912631
why_read: Read this to understand the hidden correctness and performance pitfalls
  of using memory-mapped I/O instead of a custom buffer pool in database systems.
authors:
- Andrew Crotty
- Viktor Leis
- Andrew Pavlo
image: /infographics/04-hn-49912631.jpg
---

Memory-mapped files seem like the ultimate shortcut when building a storage engine. Letting the operating system manage paging via mmap allows developers to bypass implementing an internal buffer pool entirely.

In practice, relying on mmap creates severe correctness and performance bottlenecks in production database systems. The operating system kernel does not understand transactional boundaries. When dirty pages get evicted to disk unpredictably, maintaining write-ahead logging invariants and ACID crash recovery becomes virtually impossible without heavy locking overhead.

Performance also degrades rapidly under high concurrency. Page faults trigger expensive kernel traps, multi-threaded access causes severe TLB shootdown contention, and the lack of asynchronous I/O support stalls worker threads on secondary storage reads.

Every major database that initially embraced mmap eventually rewrote its storage tier to use an explicit user-space buffer pool.

Building your own buffer pool is painful, but outsourcing memory management to the operating system kernel is always more expensive in the end.
