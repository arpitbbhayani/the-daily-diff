---
title: CtrlB is a faster alternative for querying Parquet than DuckDB
source: hn
url: https://ctrlb.ai/blogs/a-faster-alternative-to-duckdb
date: '2026-08-27'
tags:
- benchmarking
- catchup
- clickbench
- ctrlb
- duckdb
- hn
- parquet
- query-performance
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49464031'
comments: https://news.ycombinator.com/item?id=49464031
why_read: This article presents a benchmark comparison between CtrlB and DuckDB for
  querying Parquet files. Readers will learn how CtrlB outperforms DuckDB in various
  scenarios, particularly on hot runs, according to ClickBench metrics.
authors:
- ruhani_grover
---

A new query engine, CtrlB, is significantly outperforming DuckDB for analytical SQL queries on Parquet files, as shown by recent ClickBench results.

Running on identical AWS c6a instances (2xlarge and 4xlarge), CtrlB showed a clear advantage, especially in 'hot run' scenarios. While DuckDB has been the go-to for many, these benchmarks suggest a new contender for single-node Parquet analytics, directly challenging its dominance.

This is not a minor bump; the gap in performance could translate to tangible cost savings and faster insights for data-intensive applications. It is worth investigating for anyone pushing the limits of in-memory or on-disk analytical workloads.

Consider this benchmark if your data stack relies on efficient Parquet querying.
