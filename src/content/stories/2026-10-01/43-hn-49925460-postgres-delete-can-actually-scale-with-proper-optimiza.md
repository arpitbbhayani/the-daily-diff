---
title: Postgres DELETE can actually scale with proper optimization
source: hn
url: https://www.dbos.dev/blog/scaling-deletions-in-postgres
date: '2026-10-01'
tags:
- catchup
- data-retention
- database-indexing
- hn
- multi-version-concurrency-control
- postgres
- query-optimization
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49925460'
comments: https://news.ycombinator.com/item?id=49925460
why_read: Understand the internal mechanics of how Postgres executes deletes through
  MVCC and learn concrete optimization strategies to scale row deletions in high-throughput
  workloads.
authors:
- Peter Kraft
- Qian Li
---

Engineers frequently avoid row-level deletes in high-throughput Postgres workloads because MVCC overhead and write amplification can degrade transactional throughput.

When building high-volume durable queues or workflow engines, partitioning and table drops are not always viable due to heterogeneous retention schedules. Scaling DELETE operations requires understanding how MVCC handles tuple versioning and index updates on disk.

By tuning working memory, structuring indexes to avoid random page churn, and aligning batch deletion sizes to fit within cache limits, a database can process tens of thousands of deletions per second without stalling concurrent transactions or bloating system indexes.

Thoughtful index and cache design makes transactional deletes viable even at serious scale.
