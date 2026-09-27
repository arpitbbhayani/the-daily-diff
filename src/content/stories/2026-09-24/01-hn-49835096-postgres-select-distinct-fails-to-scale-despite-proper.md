---
title: Postgres SELECT DISTINCT fails to scale despite proper indexing
source: hn
url: https://www.dbos.dev/blog/postgres-select-distinct-does-not-scale
date: '2026-09-24'
tags:
- catchup
- hn
- indexing
- partitioned-queues
- postgres
- query-optimization
- select-distinct
section: databases
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49835096'
comments: https://news.ycombinator.com/item?id=49835096
why_read: Understand the architectural reasons why Postgres SELECT DISTINCT scans
  every matching row regardless of indexes, and learn how to optimize unique value
  retrieval in high-throughput workloads.
authors:
- Peter Kraft
image: /infographics/01-hn-49835096.jpg
---

In PostgreSQL, a query using SELECT DISTINCT on an indexed column will still scan every matching row in the index instead of skipping duplicate values. Even if an index has only ten distinct keys spread across ten million rows, Postgres performs a full index scan over all ten million entries rather than ten point lookups.

The underlying reason is the absence of an engine-level Skip Scan or Loose Index Scan implementation. The executor evaluates distinct values by feeding the full stream into either an Aggregation step or a Unique node, both of which require walking the entire index range.

You can bypass this limitation entirely by rewriting the query with a recursive Common Table Expression (CTE). By selecting the minimum key and recursively fetching the next greater key using a fast b-tree probe, the database performs a true index skip.

This simple recursive query pattern consistently reduces query latencies from hundreds of milliseconds of sequential index I/O down to sub-millisecond point lookups on large tables.
