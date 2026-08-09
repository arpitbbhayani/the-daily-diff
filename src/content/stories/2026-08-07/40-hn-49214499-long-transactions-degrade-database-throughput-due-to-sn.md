---
title: Long transactions degrade database throughput due to snapshot building
source: hn
url: https://planetscale.com/blog/concurrency-vs-throughput-vitess-mysql
date: '2026-08-07'
tags:
- buffer-pool
- catchup
- concurrency
- consistent-snapshot
- hn
- innodb
- mysql
- throughput
- transactions
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49214499'
comments: https://news.ycombinator.com/item?id=49214499
why_read: This article explains how a seemingly innocuous long-running transaction
  can drastically reduce database throughput by forcing reads to reconstruct extensive
  version histories, leading to increased memory pressure and cascading failures.
  Readers will learn about the intricate mechanisms within InnoDB that cause this
  performance degradation.
authors:
- Liz van Dijk
---

Your MySQL database can melt down not from too much work, but from too much parallelism interacting badly with its internals. This happens when a long-running transaction forces InnoDB's MVCC to reconstruct increasingly long version chains for consistent reads.

Imagine reads that normally take milliseconds suddenly blowing through their 90-second execution ceilings. This is not about being blocked by locks; it is about the immense CPU and I/O cost of traversing vast amounts of historical data just to provide a consistent snapshot.

This unexpected cascade effect can overwhelm the buffer pool and cause a system-wide slowdown, even for queries on unrelated tables. Understanding this mechanism is crucial for diagnosing and preventing complex database performance incidents, especially in high-concurrency environments.
