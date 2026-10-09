---
title: ClickHouse might not need its own separate storage format
source: hn
url: https://pivotlake.io/blog/does-clickhouse-need-its-own-storage-format/
date: '2026-10-08'
tags:
- apache-iceberg
- catchup
- clickhouse
- columnar-format
- data-warehousing
- hn
- parquet
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50003665'
comments: https://news.ycombinator.com/item?id=50003665
why_read: Learn why real-time analytics databases and data lakehouses share nearly
  identical storage architectures, and whether data duplication across formats is
  truly necessary.
authors:
- dkgs
---

Real-time analytical engines such as ClickHouse traditionally demand their own proprietary storage formats, forcing engineering teams to duplicate petabytes between transactional systems, data lakes, and fast analytical engines.

Both ClickHouse and Apache Iceberg organize columnar data into chunks, compute identical min-max statistics per boundary, and rely on periodic background merges for sorting. The technical mechanisms of ClickHouse granules and Parquet row groups mirror each other closely, yet organizations maintain parallel storage pipelines because of historical format divergence rather than fundamental architectural limits.

Bridging this gap by allowing analytical engines to query unified columnar lakehouse formats directly eliminates redundant storage costs and ingestion lag. The real performance bottleneck in modern OLAP is rarely the file header; it is vectorized execution and memory caching.
