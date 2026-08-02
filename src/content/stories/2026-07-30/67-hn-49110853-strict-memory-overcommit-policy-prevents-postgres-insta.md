---
authors:
- Kaushik Iska
comments: https://news.ycombinator.com/item?id=49110853
date: '2026-07-30'
depth_score: 8
hn_id: '49110853'
image: /infographics/67-hn-49110853.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- database-stability
- enomem
- hn
- linux-kernel
- memory-overcommit
- oom-killer
- postgres
title: Strict memory overcommit policy prevents Postgres instance restarts
url: https://clickhouse.com/blog/strict-memory-overcommit-for-postgres
utility_score: 9
why_read: This article explains why the default Linux memory overcommit policy can
  lead to PostgreSQL instance restarts and how strict overcommit improves database
  stability by preventing such failures.
---

When Linux's default memory overcommit policy meets PostgreSQL, you are often looking at entire database restarts triggered by the OOM killer. A single backend process running out of memory can bring down the whole instance, forcing a full WAL replay. This is a severe operational risk that many teams face.

The solution is surprisingly simple but often overlooked: setting vm.overcommit_memory = 2. This strict policy makes the kernel refuse memory allocations past a commit limit, causing malloc to return ENOMEM instead of the OOM killer stepping in.

PostgreSQL handles ENOMEM gracefully, failing just the query and rolling back the transaction, allowing the rest of your database connections to continue functioning normally. This small configuration change radically improves resilience and uptime for critical database services.