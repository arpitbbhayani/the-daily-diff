---
authors:
- malisper
comments: https://news.ycombinator.com/item?id=49111925
date: '2026-07-30'
depth_score: 9
hn_id: '49111925'
image: /infographics/01-github-49111925.jpg
interest_score: 9
novelty_score: 9
section: databases
source: github
tags:
- benchmarking
- catchup
- clickhouse
- columnar-layout
- github
- performance
- pgrust
- postgres
- rust
title: pgrust v0.2 achieves superior performance over Postgres and Clickhouse
url: https://github.com/malisper/pgrust/releases/tag/v0.2-release
utility_score: 9
why_read: Read this to understand the significant performance improvements of pgrust
  v0.2, a Postgres rewrite in Rust. You will learn how it outperforms established
  databases like Postgres and ClickHouse in specific benchmarks, including details
  on its columnar layout and benchmark caveats.
---

A Postgres rewrite in Rust, "Pgrust," just released v0.2, claiming to be faster than both native PostgreSQL and ClickHouse on critical benchmarks. This is a monumental achievement in database engineering.

Specifically, Pgrust v0.2 achieved an 18.5 percent faster combined score than ClickHouse on the ClickBench benchmark, leveraging its built-in `pgrcolumnar` layout. For OLTP workloads, it delivered 30 percent higher throughput than PostgreSQL 18.3 on read-only operations at 300GB scale.

These are not small gains, and they were independently reviewed by an expert in PostgreSQL performance. While there are caveats regarding CPU tuning and deployment environments, the implications for database performance and the potential for Rust in system-level software are profound.

The future of high-performance databases just got more interesting.