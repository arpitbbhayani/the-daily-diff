---
authors:
- Rusty Conover
comments: https://news.ycombinator.com/item?id=49111006
date: '2026-07-30'
depth_score: 8
hn_id: '49111006'
image: /infographics/36-hn-49111006.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- duckdb
- file-row-number
- hn
- offset
- pagination
- parquet
- stateless-api
title: DuckDB's file_row_number pages Parquet files faster than OFFSET
url: https://rusty.today/blog/paging-parquet-duckdb-file-row-number-vs-offset/
utility_score: 8
why_read: This text explains how to efficiently paginate large Parquet files using
  DuckDB and stateless API services. Readers will learn the performance benefits of
  file_row_number over traditional OFFSET for this use case.
---

Paging through massive Parquet files in DuckDB? You might assume LIMIT OFFSET is a performance trap for large offsets, forcing full scans. Think again.

This analysis shows DuckDB cleverly optimizes OFFSET by utilizing Parquet's row group metadata, often performing better than anticipated. However, leveraging file_row_number directly still provides a 2.5x speedup across an entire 20-million-row file by filtering on physical row ranges.

This is a critical distinction for anyone building services that paginate large datasets, teaching you how to avoid unnecessary re-reads and choose the most efficient query strategy for your data pipelines.