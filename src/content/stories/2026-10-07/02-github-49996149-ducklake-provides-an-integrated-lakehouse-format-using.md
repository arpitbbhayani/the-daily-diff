---
title: DuckLake provides an integrated lakehouse format using Parquet
source: github
url: https://github.com/duckdb/ducklake
date: '2026-10-07'
tags:
- catchup
- duckdb
- ducklake
- github
- lakehouse-format
- metadata-catalog
- parquet
section: databases
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49996149'
comments: https://news.ycombinator.com/item?id=49996149
why_read: Understand how DuckLake organizes catalog metadata and Parquet storage for
  lakehouse workflows. Learn how to query and attach Lakehouse tables directly using
  DuckDB.
authors:
- saikatsg
image: /infographics/02-github-49996149.jpg
---

Data lakehouse architectures often impose significant infrastructure overhead, requiring external catalog services like Apache Iceberg REST catalogs or Hive metastores just to query a collection of Parquet files.

DuckLake introduces a minimalist, SQL-native lakehouse catalog format directly integrated into DuckDB. It separates metadata and payload by persisting table catalogs inside a standard database file while storing raw column data in external Parquet files on disk or object storage.

You can attach a DuckLake database using standard SQL syntax, immediately enabling full transactional schema updates, inserts, and analytical scans without standing up external catalog infrastructure. Because DuckDB executes the queries natively, you bypass the coordination friction typical of multi-engine lakehouse setups.

For embedded analytical systems and lightweight data platforms, embedding your lakehouse catalog directly into the database engine eliminates needless distributed complexity.
