---
title: pg_stat_ch exports PostgreSQL query telemetry to ClickHouse for analytics
source: github
url: https://github.com/ClickHouse/pg_stat_ch
date: '2026-08-08'
tags:
- catchup
- clickhouse
- data-export
- github
- postgresql
- query-monitoring
- telemetry
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49219262'
comments: https://news.ycombinator.com/item?id=49219262
why_read: This document introduces pg_stat_ch, a PostgreSQL extension that exports
  raw per-query execution telemetry to ClickHouse. Readers will learn how it enables
  powerful analytical aggregation beyond what pg_stat_statements offers.
authors:
- saisrirampur
---

Tired of basic PostgreSQL performance insights? Imagine capturing raw, per-query execution telemetry in real-time and piping it to ClickHouse for deep analytical aggregation.

This open-source extension, pg_stat_ch, fundamentally changes how you debug and optimize. Unlike pg_stat_statements, which aggregates statistics within PostgreSQL, this tool exports raw events.

This means you gain the full power of ClickHouse's analytical engine to slice and dice your query data, uncover hidden bottlenecks, and perform granular performance analysis. It is a game-changer for production database monitoring and query optimization.
