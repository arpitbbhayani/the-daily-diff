---
title: Streaming large query results rapidly into Apache Arrow
source: hn
url: https://questdb.com/blog/streaming-500-million-rows-into-apache-arrow/
date: '2026-09-23'
tags:
- apache-arrow
- catchup
- data-egress
- hn
- questdb
- streaming-queries
- zero-copy-deserialization
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49816637'
comments: https://news.ycombinator.com/item?id=49816637
why_read: Learn how streaming query results directly into Apache Arrow eliminates
  data egress bottlenecks when transferring high-volume data into analytical pipelines.
authors:
- jinqueeny
---

Traditional analytical databases were architected under the assumption that queries reduce billions of rows into small, aggregated summaries. That paradigm breaks down when feeding modern machine learning pipelines, feature stores, and dataframe engines, where the query is simple but the egress volume is massive.

QuestDB tackled this bottleneck by streaming query results directly into Apache Arrow batches over a WebSocket protocol. Instead of converting rows into native Python objects, the client decodes column buffers and hands contiguous memory segments to Arrow by reference.

By streaming batches while data remains in flight and eliminating object allocation overhead, the system achieves egress speeds of 500 million rows in 2.3 seconds directly into tools like Polars and DuckDB.

Fast data egress is just as critical as fast ingestion when pipelines move from aggregations to raw tensor inputs.
