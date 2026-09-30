---
title: Postgres memory tuning leaves databases vulnerable to bad queries
source: hn
url: https://clickhouse.com/blog/can-your-postgres-survive-a-bad-query
date: '2026-09-29'
tags:
- catchup
- database-reliability
- hash-mem-multiplier
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
hn_id: '49894396'
comments: https://news.ycombinator.com/item?id=49894396
why_read: Understand the internal mechanics of Postgres memory allocation and why
  individual queries can exceed expected memory budgets. It provides essential insight
  into managing query memory consumption to prevent database crashes.
authors:
- Kevin Biju Kizhake Kanichery
---

Postgres does not have a global memory limit per query. When you configure work_mem to four megabytes, that limit applies per operation within a query execution plan, not across the entire statement.

A single complex query with multiple hash joins, aggregations, and sort nodes can allocate dozens of separate memory buffers simultaneously. Add the hash_mem_multiplier setting on top, and an execution plan can consume hundreds of megabytes or gigabytes of RAM in seconds.

When unoptimized analytical queries or agent-generated SQL hit your database, individual connection backends rapidly exhaust system memory. In standard Linux environments, this triggers the out-of-memory killer, terminating backend processes and triggering crash recovery for all active connections.

Understanding how Postgres plans allocate memory per node is vital for keeping production clusters stable.
