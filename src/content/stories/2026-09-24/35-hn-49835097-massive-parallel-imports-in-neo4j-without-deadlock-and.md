---
title: Massive parallel imports in Neo4j without deadlock and lock contention
source: hn
url: https://medium.com/neo4j/massive-parallel-imports-in-neo4j-without-deadlock-and-lock-contention-2c003a48d49a
date: '2026-09-24'
tags:
- catchup
- deadlocks
- graph-databases
- hn
- lock-contention
- neo4j
- parallel-imports
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49835097'
comments: https://news.ycombinator.com/item?id=49835097
why_read: Learn how to execute massive parallel data imports in Neo4j while effectively
  avoiding deadlocks and database lock contention.
authors:
- eatonphil
---

Bulk importing millions of nodes and relationships into graph databases concurrently often hits a wall of transaction deadlocks and severe lock contention.

In graph engines like Neo4j, concurrent transactions attempting to update relationships connected to shared nodes acquire exclusive locks on those nodes. When multiple threads try to update cross-cutting relationships in random order, mutual dependency cycles trigger deadlocks, collapsing write throughput.

The fix requires strict batching and deterministic ingestion design. By pre-sorting incoming edges, grouping writes by source or target entity, and partitioning relationship creation into isolated stages, you can execute massive concurrent imports without triggering distributed locks.

Designing ingestion pipelines to respect the engine's locking model unlocks maximum disk and CPU saturation.
