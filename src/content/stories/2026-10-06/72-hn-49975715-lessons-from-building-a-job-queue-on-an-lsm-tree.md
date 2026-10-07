---
title: Lessons from building a job queue on an LSM tree
source: hn
url: https://zizq.io/blog/what-we-learnt-building-a-job-queue-on-an-lsm-tree
date: '2026-10-06'
tags:
- catchup
- embedded-database
- hn
- job-queue
- lsm-tree
- rocksdb
- storage-engine
section: databases
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49975715'
comments: https://news.ycombinator.com/item?id=49975715
why_read: Learn the practical challenges and mechanistic trade-offs involved in designing
  an embedded job queue on top of an LSM-tree storage engine.
authors:
- d11wtq
---

Building a persistent job queue directly on top of an LSM tree sounds straightforward until production workloads trigger severe write amplification and worker contention. Most engineers default to Redis or Postgres for queues, but building a dedicated embedded engine reveals fundamental impedance mismatches with append-heavy storage engines.

Because LSM trees are optimized for sequential writes and batch compactions rather than rapid point deletes, standard FIFO popping patterns create tombstone buildup. When hundreds of workers poll for available tasks, reading past deleted records degrades read performance and causes cache churn across SSTables.

Designing around this requires carefully structuring composite keys with timestamps and status bytes, alongside proactive in-memory skip lists to track active leases without saturating disk compactions. Understanding how storage engine internals interact with queue access patterns prevents costly performance degradations when scaling background workloads.

Storage engine selection must always align with your primary access and mutation patterns.
