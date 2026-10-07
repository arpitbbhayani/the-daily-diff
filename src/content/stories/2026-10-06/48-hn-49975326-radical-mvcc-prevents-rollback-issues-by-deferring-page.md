---
title: Radical MVCC prevents rollback issues by deferring page modifications
source: hn
url: https://6it.dev/blog/radical-mvcc-and-replay-based-rebasing-occ-re2occ-80742
date: '2026-10-06'
tags:
- catchup
- concurrency-control
- database-transactions
- hn
- mvcc
- occ
- write-sets
section: databases
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49975326'
comments: https://news.ycombinator.com/item?id=49975326
why_read: Learn how decoupling page modifications from transaction execution eliminates
  versioning and rollback issues in relational databases. It provides a crisp mental
  model for combining write-sets with commit sequence numbers to streamline transaction
  processing.
authors:
- '"No Bugs" Bunny'
- Sherry Ignatchenko
---

Most traditional relational database engines modify data pages in memory before a transaction gets its final commit sequence number (CSN). They tag modifications with temporary transaction IDs (TXIDs), forcing the storage layer to manage complex rollback semantics and visibility sorting when commit ordering diverges from execution order.

Re2OCC proposes a radical invariant: never modify data pages until a transaction officially wins its CSN. The engine isolates local writes inside an in-memory write set overlay, keeping underlying data pages strictly immutable throughout transaction execution.

When a conflict occurs during commit validation, instead of aborting immediately or managing dirty page rollbacks, the engine attempts replay-based rebasing against the latest committed state. This drastically reduces contention overhead in write-heavy workloads while simplifying storage engine rollback paths.

Separating write accumulation from page-level mutation shifts concurrency bottlenecks from disk buffer management into pure memory-bound replay checks.
