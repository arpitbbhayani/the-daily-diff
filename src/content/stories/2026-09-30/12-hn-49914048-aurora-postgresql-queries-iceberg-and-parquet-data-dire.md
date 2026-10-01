---
title: Aurora PostgreSQL queries Iceberg and Parquet data directly
source: hn
url: https://aws.amazon.com/about-aws/whats-new/2026/09/aurora-postgresql-query-apache-iceberg-and-parquet/
date: '2026-09-30'
tags:
- apache-iceberg
- aurora-postgresql
- aws-glue-data-catalog
- catchup
- duckdb
- hn
- parquet
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49914048'
comments: https://news.ycombinator.com/item?id=49914048
why_read: Understand how Aurora PostgreSQL integrates an embedded DuckDB engine to
  query data lake formats directly without building custom ETL pipelines.
authors:
- daigoba66
image: /infographics/12-hn-49914048.jpg
---

Aurora PostgreSQL can now query Apache Iceberg and Parquet data lakes in Amazon S3 directly without requiring extract, transform, and load (ETL) pipelines.

Under the hood, AWS embedded the DuckDB vectorized execution engine straight into PostgreSQL. When your application queries foreign tables mapped to S3, the engine leverages DuckDB to execute fast columnar scans, partition pruning, and aggregations directly over Parquet files. This federated query capability also connects to external Iceberg REST Catalogs via AWS Glue Data Catalog.

For systems architects, this bridges the gap between transactional databases and object storage analytics. Instead of maintaining fragile background synchronization workers or paying double storage costs, your standard PostgreSQL connection can join operational transactional records with historical lakehouse datasets in place.

Eliminating batch pipelines while preserving the native SQL interface reduces architectural complexity across the entire data platform.
