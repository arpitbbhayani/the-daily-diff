---
title: Amazon Aurora PostgreSQL embeds DuckDB for direct data lake queries
source: hn
url: https://aws.amazon.com/blogs/aws/amazon-aurora-postgresql-now-supports-direct-querying-of-apache-iceberg-and-parquet-data-in-your-data-lake/
date: '2026-10-01'
tags:
- amazon-aurora-postgresql
- apache-iceberg
- apache-parquet
- catchup
- data-lakes
- duckdb
- hn
- zero-etl
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49920040'
comments: https://news.ycombinator.com/item?id=49920040
why_read: Learn how embedding DuckDB into Aurora PostgreSQL allows direct querying
  of Apache Iceberg and Parquet data lakes without complex ETL pipelines. It shows
  how to unify operational transactions with historical analytical data for real-time
  dashboards and AI agents.
authors:
- HatchedLake721
---

Amazon Aurora PostgreSQL now embeds DuckDB directly into the database engine to query Apache Iceberg and Apache Parquet files residing in Amazon S3 without any external ETL pipelines.

For years, combining transactional state with historical data lake records required reverse ETL jobs, scheduled sync scripts, and duplicate storage tiers. These pipelines often introduced synchronization lag, added operational fragility, and increased infrastructure overhead.

With DuckDB running directly inside the Aurora PostgreSQL process, applications can run standard SQL queries that join live operational tables with petabyte-scale Iceberg catalogs. This architecture exposes both uncommitted transactional rows and lakehouse objects through a single connection endpoint.

Backend engineers building reporting systems or AI agents can now bypass complex pipeline maintenance while retaining low-latency reads across disparate storage layers.

Embedding analytical query engines directly inside transactional databases is rapidly erasing the boundary between OLTP and OLAP systems.
