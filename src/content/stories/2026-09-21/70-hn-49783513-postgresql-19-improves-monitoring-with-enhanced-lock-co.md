---
title: PostgreSQL 19 improves monitoring with enhanced lock contention visibility
source: hn
url: https://clickhouse.com/blog/postgres-19-monitoring-whats-new
date: '2026-09-21'
tags:
- catchup
- hn
- lock-contention
- log-lock-waits
- monitoring
- observability
- postgresql-19
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49783513'
comments: https://news.ycombinator.com/item?id=49783513
why_read: This article details the new monitoring and observability features in PostgreSQL
  19. Readers will learn about the improved default logging of lock contention, which
  enhances the ability to detect and diagnose performance problems.
authors:
- "G\xFCl\xE7in Y\u0131ld\u0131r\u0131m Jel\xEDnek"
---

PostgreSQL 19 is around the corner, bringing crucial observability improvements that operators will definitely want to know about. The biggest change? log_lock_waits now defaults to ON.

This small but mighty change means that lock contention, a notorious performance killer, will be visible by default in your logs. No more guessing why a query is slow; the database will tell you it is stuck behind a lock. The commit message highlights this perfectly: if someone is stuck for over a second, it is almost always a problem worth logging.

This is a smart move that trades a tiny bit of I/O for immensely better debugging and operational clarity. It is an immediate win for database administrators and anyone building applications on Postgres, enabling faster identification of critical bottlenecks.
