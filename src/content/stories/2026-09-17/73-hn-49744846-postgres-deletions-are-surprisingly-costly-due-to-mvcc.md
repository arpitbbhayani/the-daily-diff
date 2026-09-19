---
authors:
- Peter Kraft
- Qian Li
comments: https://news.ycombinator.com/item?id=49744846
date: '2026-09-17'
depth_score: 8
hn_id: '49744846'
image: /infographics/73-hn-49744846.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- data-deletion
- hn
- mvcc
- postgres
- transaction-isolation
title: Postgres deletions are surprisingly costly due to MVCC
url: https://www.dbos.dev/blog/scaling-deletions-in-postgres
utility_score: 8
why_read: This article explains why deleting data in Postgres is surprisingly expensive,
  detailing how its MVCC design impacts performance and how to scale deletions in
  a workflow system.
---

When you delete a row in PostgreSQL, it does not actually remove the data. Instead, Postgres's Multi-Version Concurrency Control (MVCC) design marks the row as invisible, leading to surprising performance bottlenecks at scale. This often makes deleting old data slower than inserting new data.

This deep dive explains how MVCC interacts with indexes and the buffer cache during deletions. It also provides concrete strategies to manage high-volume data removal, which is critical for durable execution libraries that checkpoint workflow state. You will understand the underlying mechanics and learn how to prevent deletion operations from crippling your system.

Anyone running a Postgres-backed system with significant data churn needs to read this for practical insights into scalable data management.