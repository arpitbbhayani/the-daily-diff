---
title: Why ClickHouse Cloud outperforms Databricks for real-time analytics
source: hn
url: https://clickhouse.com/blog/clickhouse-vs-databricks-real-time-performance-per-dollar
date: '2026-10-06'
tags:
- catchup
- clickhouse-cloud
- continuous-ingestion
- costbench
- databricks
- hn
- real-time-analytics
section: databases
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49977499'
comments: https://news.ycombinator.com/item?id=49977499
why_read: Read this to understand why ClickHouse Cloud achieves significantly higher
  performance per dollar than Databricks under continuous data ingestion. You will
  learn how the efficiency of data preparation directly impacts streaming query latency
  and cloud infrastructure costs.
authors:
- Tom Schreiber
- Lionel Palacin
---

Real-time analytics benchmarks frequently hide the true cost of making incoming data query-ready under heavy streaming loads.

A rigorous architectural comparison streaming over 113 billion records reveals that real-time performance depends heavily on continuous ingestion preparation. When queries run while the dataset actively grows, the preparation pipeline dictates how much scanning and aggregation work remains at query runtime.

ClickHouse leverages tight columnar storage, explicit physical ordering, and streaming pre-aggregations to dramatically outpace traditional lakehouse architectures on cost-per-query. Because the summaries stay fresh alongside arriving data, interactive queries avoid expensive dynamic scans over unindexed micro-batches.

Designing for low-latency analytics requires evaluating ingestion pipeline costs and query engine efficiency as a single coupled system.
