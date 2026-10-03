---
title: Executing embedded chDB queries directly inside Postgres databases
source: github
url: https://github.com/ClickHouse/pg_chdb
date: '2026-09-23'
tags:
- catchup
- chdb
- clickhouse
- cloud-storage
- data-ingestion
- github
- postgresql
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49811883'
comments: https://news.ycombinator.com/item?id=49811883
why_read: Learn how the pg_chdb extension embeds ClickHouse processing inside PostgreSQL
  to directly query and ingest data from cloud object stores.
authors:
- ClickHouse
---

Ingesting massive datasets from cloud object storage into PostgreSQL has traditionally required external ETL pipelines or cumbersome intermediate stages. The pg_chdb extension changes this workflow by embedding ClickHouse local processing directly inside PostgreSQL.

By compiling chDB into a PostgreSQL extension, you can execute embedded ClickHouse SQL functions directly against external files stored in S3, Google Cloud Storage, Azure Blob, or remote HTTP endpoints. The integration also hooks straight into the standard PostgreSQL COPY command. This allows the database to stream, filter, and parse remote Parquet, CSV, or JSON datasets using ClickHouse vectorized execution engine before writing rows into native Postgres tables.

Instead of paying high network egress costs and maintaining separate batch conversion workers, you can push the transformation layer down to the database interface. The extension handles parallel decompression and schema mapping seamlessly.

Embedded engines bridge the analytical speed of columnar systems with the operational simplicity of relational databases.
