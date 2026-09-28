---
title: Strict memory overcommit protects Postgres from full instance restarts
source: hn
url: https://clickhouse.com/blog/strict-memory-overcommit-for-postgres
date: '2026-09-27'
tags:
- catchup
- hn
- linux-kernel
- memory-overcommit
- oom-killer
- postgres
- shared-memory
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49862319'
comments: https://news.ycombinator.com/item?id=49862319
why_read: Understand how default Linux memory overcommit triggers full Postgres instance
  restarts during OOM events and how configuring strict overcommit isolates query
  failures safely.
authors:
- Kaushik Iska
---

When Linux runs out of memory, the kernel invokes the OOM killer and terminates a process with SIGKILL to reclaim pages. For most isolated application processes, this is an annoying crash. For PostgreSQL, it is catastrophic. Every Postgres backend process shares a single memory segment containing shared buffers, WAL buffers, and lock tables. If a backend gets killed abruptly via SIGKILL mid-query, the postmaster must assume shared memory corruption. The server immediately terminates every connection, drops all backends, and enters crash recovery to replay the write-ahead log.

The solution is switching from default overcommit to strict overcommit with the kernel parameter vm.overcommit_memory set to 2. Under strict overcommit, Linux calculates committed memory and returns an explicit ENOMEM error from malloc rather than letting allocations succeed and triggering the OOM killer later.

PostgreSQL handles an ENOMEM allocation failure cleanly like any standard query error. The failing query rolls back safely, all other active connections remain operational, and the instance never crashes.
