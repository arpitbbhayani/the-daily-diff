---
authors:
- Kaushik Iska
comments: https://news.ycombinator.com/item?id=49307246
date: '2026-08-15'
depth_score: 8
hn_id: '49307246'
image: /infographics/39-hn-49307246.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- clickhouse
- hn
- metrics
- observability
- open-source
- postgresql-extension
- query-monitoring
title: pg_stat_ch exports PostgreSQL metrics to ClickHouse for deep analytics
url: https://clickhouse.com/blog/pg_stat_ch-postgres-extension-stats-to-clickhouse
utility_score: 9
why_read: Read this to learn about pg_stat_ch, an open-source PostgreSQL extension
  that enables deep analytical monitoring of query performance by streaming metrics
  to ClickHouse.
---

Tired of limited PostgreSQL introspection for query performance? ClickHouse has open-sourced `pg_stat_ch`, a new PostgreSQL extension that exports every query execution metric as a fixed-size ~4.6KB event, streaming them directly to ClickHouse.

This is a game-changer for database observability. Once your Postgres metrics are in ClickHouse, you can slice and drill into query behavior like a full-fledged APM. Imagine analyzing p50 to p99 latency over time, identifying top queries by runtime, or understanding "what changed between 2pm and 3pm" across months of history.

It works for PostgreSQL 16 to 18 and provides the kind of analytical power ClickHouse users expect for their own system tables. This offers a deeply practical solution for anyone managing PostgreSQL and needing detailed performance analytics beyond what is available out-of-the-box.