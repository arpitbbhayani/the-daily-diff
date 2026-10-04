---
title: PostgreSQL 19 enables lock contention visibility by default
source: hn
url: https://clickhouse.com/blog/postgres-19-monitoring-whats-new
date: '2026-10-03'
tags:
- catchup
- database-observability
- deadlock-timeout
- hn
- lock-contention
- log-lock-waits
- postgresql-19
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49948601'
comments: https://news.ycombinator.com/item?id=49948601
why_read: Learn about key observability and monitoring updates in PostgreSQL 19, starting
  with default lock contention logging to quickly identify transaction bottlenecks.
authors:
- "G\xFCl\xE7in Y\u0131ld\u0131r\u0131m Jel\xEDnek"
image: /infographics/05-hn-49948601.jpg
---

PostgreSQL 19 makes a long overdue operational change by flipping the default setting of log_lock_waits from off to on. Historically, detecting lock contention required deliberate tuning of deadlock_timeout and manual configuration.

When a session waits longer than one second to acquire a lock, Postgres will now emit a log message automatically. Because checking for lock waits is lightweight compared to running full deadlock checks, turning this on provides built-in contention visibility without introducing heavy runtime overhead.

Engineers troubleshooting transaction pileups will no longer need to reproduce contention in staging or adjust server configurations retroactively to gather logs. Out-of-the-box telemetry makes identifying blocking queries straightforward.

Defaulting to better observability saves engineering hours during production incidents.
