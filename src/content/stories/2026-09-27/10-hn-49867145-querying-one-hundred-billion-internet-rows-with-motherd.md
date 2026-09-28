---
title: Querying one hundred billion internet rows with MotherDuck
source: hn
url: https://motherduck.com/blog/querying-the-entire-internet-100-billion-rows-with-motherduck/
date: '2026-09-27'
tags:
- catchup
- common-crawl
- duckdb
- hn
- http-archive
- motherduck
- sql
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49867145'
comments: https://news.ycombinator.com/item?id=49867145
why_read: Read this to learn how to perform large-scale analytical queries on massive
  datasets using DuckDB and MotherDuck. You will gain a clear comparison of major
  web crawl archives and understand how to track the growth of platform-hosted web
  domains.
authors:
- Dumky de Wilde
image: /infographics/10-hn-49867145.jpg
---

Querying web-scale datasets has traditionally required spinning up massive distributed compute clusters running Spark, Trino, or Snowflake. MotherDuck demonstrates that modern columnar storage and vectorized execution engines can query 100 billion rows of Common Crawl data in roughly 30 seconds.

The workload scans internet-scale index metadata to measure the historical surge of user-deployed personal sites across platforms like GitHub Pages and Vercel. Instead of relying on heavyweight distributed frameworks, the approach utilizes DuckDB vectorized scanning combined with cloud object storage pipelining.

This benchmark underscores a major architectural shift for data platform teams. By leveraging efficient columnar compression and aggressive predicate pushdown directly over object storage, single-node and hybrid analytical engines can now handle petabyte-scale queries that previously required multi-node Spark configurations.

Engineers can often achieve faster analytical query turnaround by ditching distributed cluster coordination in favor of dense, vectorized compute.
