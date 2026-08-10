---
title: Strict memory overcommit prevents Postgres instance restarts
source: hn
url: https://clickhouse.com/blog/strict-memory-overcommit-for-postgres
date: '2026-08-08'
tags:
- catchup
- enomem
- hn
- memory-overcommit
- oom-killer
- postgres
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49219238'
comments: https://news.ycombinator.com/item?id=49219238
why_read: This article explains how Linux's default memory overcommit policy can crash
  a Postgres instance and why setting strict overcommit (vm.overcommit_memory = 2)
  allows Postgres to handle memory errors gracefully without restarting the entire
  database.
authors:
- Kaushik Iska
---

Do you run PostgreSQL in production? Then you need to understand Linux memory overcommit and why the strict setting is not just good practice, it is crucial for stability.

By default, Linux can overcommit memory, leading to the OOM killer terminating processes when physical memory runs out. For PostgreSQL, this means a single backend dying can restart the entire instance, dropping all connections and triggering full crash recovery.

Setting `vm.overcommit_memory = 2` ensures that memory allocation failures return ENOMEM, which PostgreSQL handles gracefully by failing the query instead of restarting the entire server. This simple change can prevent major outages and is a non-negotiable for reliable database operations.
