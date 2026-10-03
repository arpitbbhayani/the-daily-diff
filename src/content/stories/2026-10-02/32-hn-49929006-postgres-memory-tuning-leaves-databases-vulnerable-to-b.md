---
title: Postgres memory tuning leaves databases vulnerable to bad queries
source: hn
url: https://clickhouse.com/blog/can-your-postgres-survive-a-bad-query
date: '2026-10-02'
tags:
- catchup
- database-reliability
- hn
- memory-management
- postgres
- query-tuning
- work-mem
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49929006'
comments: https://news.ycombinator.com/item?id=49929006
why_read: Read this to understand the mechanics of Postgres memory management, specifically
  why work_mem budgets can cause unexpectedly high RAM usage and threaten system reliability.
authors:
- Kevin Biju Kizhake Kanichery
---

Postgres does not have a global configuration setting to limit the maximum RAM consumed by an individual query.

Instead, memory budgeting relies on the work_mem parameter, which defaults to 4 megabytes. The catch is that this limit applies per operation node in an execution plan, not across the entire query. A complex query plan with multiple joins, sorts, and hash aggregations can allocate separate work_mem buffers simultaneously.

Hash operations make this even more aggressive. When the hash_mem_multiplier setting kicks in, Postgres scales up memory allocations for hash joins and hash aggregates well beyond the base limit.

When automated tools or autonomous agents generate unoptimized analytical queries, memory consumption can quickly exceed physical RAM and trigger the operating system out-of-memory killer.

Understanding work_mem semantics is the first line of defense against sudden database crashes.
