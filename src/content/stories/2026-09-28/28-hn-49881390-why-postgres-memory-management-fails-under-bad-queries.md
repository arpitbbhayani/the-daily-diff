---
title: Why Postgres memory management fails under bad queries
source: hn
url: https://clickhouse.com/blog/can-your-postgres-survive-a-bad-query
date: '2026-09-28'
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
novelty_score: 7
hn_id: '49881390'
comments: https://news.ycombinator.com/item?id=49881390
why_read: Learn the mechanics behind how Postgres allocates memory per query operation
  and why unexpected query plans can lead to memory exhaustion and database crashes.
authors:
- Kevin Biju Kizhake Kanichery
---

PostgreSQL does not enforce a global maximum memory limit per query. Many engineers assume that setting work_mem to a modest four megabytes prevents runaway memory consumption, but this parameter only sets an upper boundary for each individual execution node within a plan.

A single complex query plan often spawns multiple memory-intensive nodes simultaneously, including hash joins, aggregates, and sort operations. Furthermore, hash-based operators apply a multiplier on top of work_mem. When complex analytical queries execute, actual memory usage multiplies rapidly across concurrent backends, leading directly to operating system out-of-memory kills.

As autonomous agents generate increasingly unpredictable queries against production instances, relying on default memory configurations creates a severe reliability risk. Understanding how the query planner assigns memory buffers across node trees is essential to keep PostgreSQL instances running smoothly under heavy analytical load.

Defensive database engineering requires explicit node budgeting and strict connection-level memory controls.
