---
title: PostgreSQL 19 makes lock contention visible by default
source: hn
url: https://clickhouse.com/blog/postgres-19-monitoring-whats-new
date: '2026-08-19'
tags:
- catchup
- database-monitoring
- hn
- lock-contention
- log-lock-waits
- observability
- postgresql-19
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 6
hn_id: '49364863'
comments: https://news.ycombinator.com/item?id=49364863
why_read: This post details key monitoring and observability improvements in PostgreSQL
  19, highlighting the significant change where lock contention detection is now enabled
  by default. Readers will learn how these new features enhance database observability,
  particularly regarding performance bottlenecks.
authors:
- "G\xFCl\xE7in Y\u0131ld\u0131r\u0131m Jel\xEDnek"
---

PostgreSQL 19 is bringing critical monitoring enhancements that every database administrator and backend engineer should know. One major change is that log_lock_waits will now default to on, significantly improving visibility into lock contention issues without extra configuration.

You will also find new pg_stat_recovery metrics, such as recovery_wal_time and recovery_data_time, which offer unprecedented insight into recovery performance. pg_stat_activity is also being updated to expose lock_waits directly. These changes empower you to diagnose bottlenecks and ensure database health with far greater precision.

This is not just a minor version bump; these are highly actionable improvements for operating and optimizing production PostgreSQL databases.
