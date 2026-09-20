---
authors:
- Peter Kraft
- Qian Li
comments: https://news.ycombinator.com/item?id=49759636
date: '2026-09-18'
depth_score: 9
hn_id: '49759636'
image: /infographics/03-hn-49759636.jpg
interest_score: 9
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- data-deletion
- database-scaling
- hn
- mvcc
- postgres
- transaction-isolation
title: Postgres Data Deletion is Costly Due to MVCC
url: https://www.dbos.dev/blog/scaling-deletions-in-postgres
utility_score: 9
why_read: This post explains why deleting data in Postgres is surprisingly expensive,
  detailing how multi-version concurrency control (MVCC) impacts performance. Readers
  will learn the underlying mechanisms of Postgres deletions and strategies for scaling
  them in workflow and queue systems.
---

You might think deleting data in Postgres is cheap, but for large-scale systems, this assumption can be dangerously wrong. This deep dive explains why deletes are so costly, rooting the problem in Postgres's Multi-Version Concurrency Control (MVCC).

When you delete a row, Postgres does not physically remove it immediately. Instead, it marks it for eventual cleanup, which impacts indexes and the buffer cache. This design ensures transaction isolation but introduces significant overhead at scale if not managed properly.

The article provides practical strategies to scale deletion operations, offering crucial insights for any engineer building high-throughput systems on Postgres. Understanding these MVCC internals is key to avoiding hidden performance bottlenecks.