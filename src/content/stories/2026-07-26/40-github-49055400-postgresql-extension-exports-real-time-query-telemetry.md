---
authors:
- ClickHouse
comments: https://news.ycombinator.com/item?id=49055400
date: '2026-07-26'
depth_score: 7
hn_id: '49055400'
image: /infographics/40-github-49055400.jpg
interest_score: 8
novelty_score: 8
section: databases
source: github
tags:
- catchup
- clickhouse
- github
- performance-monitoring
- postgresql-extension
- query-telemetry
- real-time-export
title: PostgreSQL extension exports real-time query telemetry to ClickHouse
url: https://github.com/ClickHouse/pg_stat_ch
utility_score: 8
why_read: This describes a PostgreSQL extension that exports real-time query telemetry
  to ClickHouse, offering a powerful alternative to pg_stat_statements for detailed
  performance analysis. Readers will learn about a tool for advanced PostgreSQL query
  monitoring.
---

Standard PostgreSQL metrics are useful, but `pg_stat_statements` aggregates data, losing crucial per-query detail. `pg_stat_ch` changes this by capturing *every* raw query execution telemetry event directly from Postgres internals.

This extension then streams these raw events in real-time to ClickHouse, allowing for powerful analytical aggregation there. This means you can perform much deeper, custom performance analysis and identify bottlenecks with unprecedented granularity.

For anyone running high-load Postgres databases, this offers a game-changing level of insight into query performance and overall system health.