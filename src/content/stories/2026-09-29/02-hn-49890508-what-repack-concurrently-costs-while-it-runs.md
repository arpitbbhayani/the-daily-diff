---
title: What repack concurrently costs while it runs
source: hn
url: https://boringsql.com/posts/repack-concurrently-costs/
date: '2026-09-29'
tags:
- catchup
- hn
- pg-repack
- pg-squeeze
- postgresql-19
- repack-concurrently
- table-bloat
- vacuum-full
section: databases
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49890508'
comments: https://news.ycombinator.com/item?id=49890508
why_read: Understand the internal mechanics and runtime performance costs of PostgreSQL
  19's native REPACK CONCURRENTLY command compared to traditional extensions. You
  will learn how online table rewrites handle concurrent writes and table bloat.
authors:
- hnp9j9qtda
image: /infographics/02-hn-49890508.jpg
---

Table bloat in PostgreSQL has historically required external extensions like pg_repack or intrusive full-table ACCESS EXCLUSIVE locks. PostgreSQL 19 introduces native REPACK (CONCURRENTLY), bringing online table rebuilds directly into core.

Running an online repack requires maintaining a consistent snapshot, recording concurrent modifications in a transient log, and applying changes during a brief swap phase. This introduces concrete operational costs: autovacuum is held back during the entire run, long-lived snapshots can observe transient states, and high write volume can exhaust allocated memory.

Understanding these internal constraints helps backend engineers safely defragment large production tables without triggering lock contention or replication lag.
