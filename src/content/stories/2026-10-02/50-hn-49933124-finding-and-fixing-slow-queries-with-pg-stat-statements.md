---
title: Finding and fixing slow queries with pg_stat_statements
source: hn
url: https://pginsights.dev/guides/pg-stat-statements-slow-queries
date: '2026-10-02'
tags:
- catchup
- database-indexing
- explain-analyze
- hn
- pg-stat-statements
- postgresql
- query-performance
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 5
hn_id: '49933124'
comments: https://news.ycombinator.com/item?id=49933124
why_read: Learn how to effectively rank and diagnose slow PostgreSQL queries using
  pg_stat_statements metrics and EXPLAIN plans. It provides concrete setup steps and
  practical diagnostic strategies to pinpoint database performance bottlenecks.
authors:
- Jerry Penna
---

When a PostgreSQL database slows down under load, reading through raw logs or checking high CPU usage rarely reveals the root cause. You need a structured breakdown of execution time, shared buffer churn, and temporary disk spills.

The pg_stat_statements extension tracks normalized statement executions across your entire cluster, recording cumulative call counts, mean execution times, disk block reads, and write ahead log generation. By enabling track_io_timing, you can distinguish between queries bound by CPU and those stalling on physical storage reads.

Pairing these aggregated metrics with EXPLAIN (ANALYZE, BUFFERS) allows you to catch queries that scan excessive shared buffers before they evict hot cache pages and cause cascading latency spikes across other workloads.

Instrumenting pg_stat_statements early turns reactive database firefighting into a predictable, data-driven optimization process.
