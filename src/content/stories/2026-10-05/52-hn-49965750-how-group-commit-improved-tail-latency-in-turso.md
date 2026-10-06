---
title: How group commit improved tail latency in Turso
source: hn
url: https://turso.tech/blog/turso-group-commit
date: '2026-10-05'
tags:
- catchup
- concurrent-writes
- group-commit
- hn
- mvcc
- sqlite
- tail-latency
section: databases
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49965750'
comments: https://news.ycombinator.com/item?id=49965750
why_read: Read this to understand the mechanics of implementing group commit in an
  MVCC architecture. You will learn how batching write operations and fsync calls
  overcomes SQLite's single-writer bottlenecks.
authors:
- Pere Diaz Bou
---

Scaling concurrent writes on SQLite-derived engines usually hits a wall at the disk synchronization boundary. When Turso moved past SQLite's single-writer limitation with MVCC, concurrent writes still suffered from high tail latency because individual transactions were fighting over sequential disk flushes.

The solution in Turso v0.8 is group commit combined with an in-memory lock-free version store. Instead of forcing every transaction to independently fsync its logical log to disk, concurrent transactions write their row versions into an in-memory SkipMap and batch their disk flushes together into a single I/O operation.

This decouples active snapshot visibility from physical page persistence. Active transactions stay isolated in memory, and the shared commit queue amortizes disk latency across concurrent writers without stalling the engine.

If you are designing high-throughput storage engines, batching your fsync operations is often the highest-leverage optimization you can make.
