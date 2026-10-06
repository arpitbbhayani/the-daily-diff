---
title: Importing operational data into DuckDB using Java table functions
source: hn
url: https://duckdb.org/2026/10/05/import-data-with-java
date: '2026-10-05'
tags:
- catchup
- data-ingestion
- duckdb
- hn
- java-table-functions
- mongodb
section: databases
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49965104'
comments: https://news.ycombinator.com/item?id=49965104
why_read: Learn how to dramatically speed up slow analytical queries and exports by
  moving operational data into DuckDB via Java table functions.
authors:
- Geertjan Wielenga
- Alex Kasko
---

Running heavy analytical queries against an operational database often degrades performance as volume grows. When optimizing indices and query plans in MongoDB stopped yielding performance gains for reporting exports, one engineering team embedded DuckDB directly on the same host to handle analytical queries.

The real challenge was moving historical operational data into DuckDB with minimal latency and resource overhead. After testing several ingestion pipelines, they implemented a custom DuckDB table function written entirely in Java. This allowed them to stream data directly into DuckDB vector batches in memory without costly intermediate disk serialization.

By leveraging embedded DuckDB table functions, they brought expensive multi-minute analytical exports down to sub-second execution times while keeping memory usage strictly constrained.

Custom table functions offer a clean architectural alternative when you need fast analytical acceleration alongside operational data stores.
