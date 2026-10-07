---
title: Polars 2.0 introduces out-of-core processing and first-class SQL support
source: news
url: https://pola.rs/posts/release-polars-2/
date: '2026-10-06'
tags:
- benchmarks
- catchup
- news
- out-of-core-processing
- query-optimizer
- sql-engine
section: databases
is_news: true
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49977177'
comments: https://news.ycombinator.com/item?id=49977177
why_read: Read this to understand key architectural upgrades in Polars 2.0, including
  spill-to-disk capabilities and major query engine optimizations.
authors:
- Ritchie Vink
image: /infographics/02-news-49977177.jpg
---

Polars 2.0 turns the popular DataFrame library into a full analytical query engine by introducing native out-of-core spill-to-disk execution and first-class SQL support.

The release ships major optimizer overhauls designed for heavy data workloads. Key additions include intelligent join reordering, dynamic predicates powered by runtime bloom filters, and improved common-subplan elimination. These features prevent intermediate query states from overwhelming system memory, allowing large streaming pipelines to run without thrashing.

On standard TPC-H and TPC-DS benchmarks, Polars outpaces alternative engines like DuckDB and DataFusion across multi-core cloud instances. By treating SQL as a primary interface alongside its native expression syntax, the engine broadens its utility for data platform engineers who need high throughput without the operational overhead of a separate query cluster.

Analytical data processing no longer requires choosing between embedded simplicity and raw execution performance.
