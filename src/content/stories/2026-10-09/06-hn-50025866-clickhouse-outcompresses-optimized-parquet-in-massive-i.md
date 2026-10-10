---
title: ClickHouse outcompresses optimized Parquet in massive IoT migrations
source: hn
url: https://tomalard.github.io/posts/clickhouse-outcompresses-parquet-surprises-from-our-migration/
date: '2026-10-09'
tags:
- catchup
- clickhouse
- columnar-storage
- compression
- hn
- iot-data
- parquet
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50025866'
comments: https://news.ycombinator.com/item?id=50025866
why_read: Learn how ClickHouse achieves superior data compression over Parquet at
  scale through specialized columnar encoding and schema design.
authors:
- TomAlard
image: /infographics/06-hn-50025866.jpg
---

Parquet is widely treated as the gold standard for columnar storage, but fine-tuned ClickHouse codecs can achieve significantly better compression ratios on massive time-series datasets.

When migrating IoT telemetry workloads ingesting over fifty thousand rows per second and trillions of rows annually, storage economics dictate architectural decisions. Parquet handles columnar layout well, yet ClickHouse exposes granular column-level codecs such as DoubleDelta, T64, and Gorilla compression algorithms that operate directly on sorted physical sequences.

By matching the sorting key to spatial and temporal query patterns, ClickHouse arranges data so consecutive values differ minimally. Applying specialized delta-of-delta encoding to sequential timestamps and geographic coordinates compresses the underlying bytes far more aggressively than general-purpose Snappy or ZSTD passes over standard Parquet blocks.

Query latency also drops because smaller disk footprints translate to reduced memory bandwidth saturation during large scans.

Optimizing columnar layout at the individual codec level beats generic file format defaults every time.
