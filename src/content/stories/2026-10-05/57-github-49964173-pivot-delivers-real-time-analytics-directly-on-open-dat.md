---
title: Pivot delivers real-time analytics directly on open data formats
source: github
url: https://github.com/pivotlake/pivot/
date: '2026-10-05'
tags:
- catchup
- columnar-execution
- github
- morsel-driven-parallelism
- numa-aware-execution
- open-data-formats
- real-time-analytics
- rust
- simd
section: databases
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49964173'
comments: https://news.ycombinator.com/item?id=49964173
why_read: Explore an open-source analytics engine built in Rust that achieves high
  concurrency and low-latency queries directly on open formats without dedicated database
  replication.
authors:
- dkgs
---

Querying open lakehouse formats in real time has traditionally forced teams to ingest and duplicate data into dedicated columnar stores such as ClickHouse or Druid. Pivot is an open-source Rust engine designed to execute fast analytical workloads directly against Apache Iceberg and Delta Lake storage layers.

Under the hood, Pivot combines morsel-driven parallelism, NUMA-aware task distribution, and SIMD-vectorized execution kernels over raw Parquet data. By integrating DuckDB planning with custom cache-conscious aggregation and join algorithms, it achieves low query latencies and high concurrency straight from object storage.

Decoupling compute from dedicated ingestion pipelines eliminates redundant ETL systems while preserving interactive query speeds across open table standards.
