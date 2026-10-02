---
title: Snowflake open sources pg_lake for Postgres and Iceberg integration
source: hn
url: https://www.snowflake.com/en/blog/engineering/pg-lake-postgres-lakehouse-integration/
date: '2026-10-01'
tags:
- apache-iceberg
- catchup
- data-lakehouse
- hn
- pg-lake
- postgresql
- s3
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49923515'
comments: https://news.ycombinator.com/item?id=49923515
why_read: Learn how pg_lake enables PostgreSQL to natively query, write, and manage
  Apache Iceberg tables and raw data files. It provides a practical overview of bridging
  transactional Postgres workloads with modern data lakehouse architectures.
authors:
- Craig Kerstiens
---

Querying analytical data lakes from standard transactional databases has historically required complex federated query layers or heavy external engines. The release of pg_lake open sources the core engine behind Crunchy Data Warehouse, allowing PostgreSQL to natively interact with Apache Iceberg tables and raw object storage.

With pg_lake, Postgres itself acts as the Iceberg catalog. You can create, query, and write to Iceberg tables directly from standard SQL while retaining familiar ACID transaction semantics. It allows querying Parquet, CSV, and Delta tables residing directly in Amazon S3 buckets or remote HTTP endpoints.

This architecture lets teams build unified data pipelines without maintaining separate query clusters for ad-hoc analytical workloads. You can join local transactional tables with multi-terabyte data lake tables using the standard Postgres planner and execution engine.

Bringing native open table format support to standard Postgres dramatically simplifies modern lakehouse infrastructure.
