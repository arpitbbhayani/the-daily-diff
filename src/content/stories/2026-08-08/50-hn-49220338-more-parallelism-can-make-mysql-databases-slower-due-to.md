---
title: More parallelism can make MySQL databases slower due to snapshot overhead
source: hn
url: https://planetscale.com/blog/concurrency-vs-throughput-vitess-mysql
date: '2026-08-08'
tags:
- catchup
- concurrency
- consistent-snapshot
- hn
- innodb
- long-transactions
- mysql
- throughput
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49220338'
comments: https://news.ycombinator.com/item?id=49220338
why_read: This post explains how long-held row locks can paradoxically degrade MySQL
  database performance by increasing the overhead of consistent snapshot reconstruction
  for read queries.
authors:
- Liz van Dijk
---

A common application bug - a long-running transaction holding row locks - can catastrophically melt down a production MySQL database, even for queries that are not directly blocked. This PlanetScale blog details a real-world incident where throughput plummeted, not due to direct contention, but because of InnoDB's consistent snapshot reads.

The core issue is that building a consistent snapshot requires walking back through the version history of every row touched by the open transaction. As the transaction lingered, this history grew, turning millisecond reads into 90-second timeouts. This caused a cascading failure, overwhelming the buffer pool and impacting unrelated queries.

It is a crucial reminder that database performance involves intricate interactions. Understanding how application transaction management affects storage engine internals like MVCC and the buffer pool is paramount for preventing subtle but devastating production outages.
