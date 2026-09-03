---
title: New PostgreSQL 19 system views enhance database observability
source: hn
url: https://clickhouse.com/blog/postgres-19-new-system-views
date: '2026-09-01'
tags:
- catchup
- database-locks
- hn
- observability
- postgresql-19
- system-views
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49527528'
comments: https://news.ycombinator.com/item?id=49527528
why_read: This article details the significant new system views introduced in PostgreSQL
  19. Readers will learn how these views, like pg_stat_lock, improve monitoring and
  analysis of database behavior, particularly concerning lock contention.
authors:
- "G\xFCl\xE7in Y\u0131ld\u0131r\u0131m Jel\xEDnek"
---

PostgreSQL 19 is bringing some crucial improvements for database observability that you will want to know about. Forget guessing about lock contention; the new pg_stat_lock view provides cumulative, cluster-wide statistics that are a game-changer.

Previously, you relied on pg_locks for a snapshot or parsed logs for history. Now, you get aggregate data on lock types directly, making it far easier to pinpoint and resolve performance bottlenecks. This is not just a minor update, it is a significant leap for production database diagnostics.

Understanding these new views means you can proactively identify and mitigate issues before they impact users. This is practical knowledge for any engineer managing or designing systems around PostgreSQL.
