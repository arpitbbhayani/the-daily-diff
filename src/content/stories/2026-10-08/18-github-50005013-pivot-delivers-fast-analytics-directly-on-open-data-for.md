---
title: Pivot delivers fast analytics directly on open data formats
source: github
url: https://github.com/pivotlake/pivot
date: '2026-10-08'
tags:
- catchup
- columnar-execution
- github
- morsel-driven-parallelism
- open-data-formats
- rust
- simd
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '50005013'
comments: https://news.ycombinator.com/item?id=50005013
why_read: Read this to understand how Pivot achieves real-time analytics query performance
  over open formats without data replication. You will learn about its use of morsel-driven
  parallelism, SIMD optimizations, and object storage scalability.
authors:
- ntur1337
---

Direct querying of open table formats often introduces latency penalties that force teams to ingest data redundantly into specialized engines like ClickHouse or Druid. Pivot demonstrates how modern Rust-based query engine architectures can eliminate this replication step altogether.

Built on Apache Iceberg, the engine applies vectorized execution primitives including morsel-driven parallelism, SIMD acceleration, and NUMA-aware aggregation directly on object storage data. By scheduling dynamic chunks across cores and tuning cache locality during hash joins, it approaches dedicated memory-resident speeds on parquet datasets without requiring cluster-local copies.

Decoupling compute from data without sacrificing single-digit second latency changes the economics of modern lakehouse analytical pipelines.
