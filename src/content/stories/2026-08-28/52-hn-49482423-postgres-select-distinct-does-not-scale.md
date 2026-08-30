---
title: Postgres SELECT DISTINCT Does Not Scale
source: hn
url: https://www.dbos.dev/blog/postgres-select-distinct-does-not-scale
date: '2026-08-28'
tags:
- catchup
- database-indexing
- hn
- partitioned-queues
- postgres
- query-performance
- select-distinct
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49482423'
comments: https://news.ycombinator.com/item?id=49482423
why_read: This post explains why Postgres's SELECT DISTINCT clause performs poorly
  despite indexing, detailing its underlying design limitations. Readers will learn
  how to diagnose and work around this specific performance bottleneck.
authors:
- Peter Kraft
---

Many engineers find `SELECT DISTINCT` in PostgreSQL to be surprisingly slow, even when appropriate indexes are in place. The core reason lies in a specific design decision within Postgres: `SELECT DISTINCT` will always scan every row that matches its predicates, rather than efficiently using indexes to find unique values directly. 

This means that even if an index contains all the necessary columns and seems perfectly suited, Postgres still performs a full scan of the filtered set to ensure uniqueness. This behavior can turn what appears to be a simple query into a major performance bottleneck, especially in high-volume workloads like queue processing.

Fortunately, there are actionable workarounds discussed in the post, often involving alternative query patterns or materializing intermediate results. Understanding this fundamental limitation is crucial for anyone optimizing Postgres performance and designing scalable database systems.
