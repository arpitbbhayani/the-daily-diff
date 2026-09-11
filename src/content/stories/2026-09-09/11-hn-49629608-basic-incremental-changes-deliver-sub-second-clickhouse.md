---
title: Basic Incremental Changes Deliver Sub-Second ClickHouse Latency
source: hn
url: https://jordivillar.com/blog/every-millisecond-counts
date: '2026-09-09'
tags:
- catchup
- clickhouse-performance
- hn
- incremental-improvements
- latency-reduction
- query-optimization
- replacingmergetree
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49629608'
comments: https://news.ycombinator.com/item?id=49629608
why_read: This article details a four-month journey of optimizing a slow ClickHouse
  query from over a minute to sub-second latency. Readers will learn how simple, incremental
  changes, even in challenging scenarios like mutable events with ReplacingMergeTree,
  can compound to deliver significant performance improvements.
authors:
- Jordi Villar
---

Optimizing ClickHouse from 85-second queries to sub-second latency requires understanding the engine's unique challenges, particularly when handling mutable events with ReplacingMergeTree.

The key insight? Simple, incremental improvements compound dramatically. The post dives into overcoming the inherent friction of mutable data in an immutable-first database like ClickHouse. Specifically, it highlights how heavy reliance on ReplacingMergeTree and the FINAL modifier can become a major bottleneck, forcing the database to process entire historical datasets for simple queries.

You will see how strategic query rewrites, schema adjustments, and a deep understanding of the storage engine's behavior can transform a slow, resource-intensive operation into a lightning-fast one. This is not about magic tricks, but disciplined, iterative performance engineering.

Every millisecond truly counts, especially when dealing with billions of rows.
