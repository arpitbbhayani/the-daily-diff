---
title: Aurora PostgreSQL embeds DuckDB to query data lakes directly
source: hn
url: https://aws.amazon.com/blogs/aws/amazon-aurora-postgresql-now-supports-direct-querying-of-apache-iceberg-and-parquet-data-in-your-data-lake/
date: '2026-09-30'
tags:
- amazon-aurora-postgresql
- apache-iceberg
- apache-parquet
- catchup
- data-lake
- duckdb
- hn
- reverse-etl
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49913313'
comments: https://news.ycombinator.com/item?id=49913313
why_read: Learn how embedded DuckDB in Aurora PostgreSQL allows querying Iceberg and
  Parquet data lakes alongside operational data. This eliminates reverse ETL pipelines
  and simplifies combining transactional and historical data for analytics and AI
  agents.
authors:
- swasheck
---

Amazon has integrated DuckDB directly into the Aurora PostgreSQL kernel to enable native, zero-ETL querying across operational tables and Apache Iceberg or Parquet datasets stored in S3.

Historically, bridging transactional data with historical records required complex reverse ETL pipelines or separate analytical query engines. This architecture eliminates that boundary entirely. Engineers can now issue standard PostgreSQL queries that join live operational rows with petabyte-scale Iceberg tables managed by any REST catalog.

Under the hood, embedding DuckDB allows the PostgreSQL query planner to push vector execution and columnar scans directly to object storage while preserving ACID guarantees for live table joins. This drastically reduces query latency, removes pipeline synchronization lag, and simplifies downstream architectures for analytics and context-heavy AI agents.

Unifying transactional and lakehouse storage inside a single query interface fundamentally changes how we design hybrid data pipelines.
