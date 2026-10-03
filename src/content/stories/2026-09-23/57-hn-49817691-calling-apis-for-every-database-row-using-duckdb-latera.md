---
title: Calling APIs for every database row using DuckDB lateral joins
source: hn
url: https://query.farm/blog/call-an-api-from-every-row-in-duckdb/
date: '2026-09-23'
tags:
- api-integration
- batch-processing
- catchup
- duckdb
- hn
- lateral-joins
- table-functions
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49817691'
comments: https://news.ycombinator.com/item?id=49817691
why_read: Learn how DuckDB replaces fragile application-level loops with SQL lateral
  joins and batching to invoke external APIs directly per row.
authors:
- Rusty Conover
---

Enriching database rows with external HTTP APIs usually means writing fragile application loops. You query a batch of rows, iterate over each record sequentially, make an HTTP request, and attempt to stitch the responses back to the original records while handling missing keys and network hiccups.

You can eliminate this application-level glue entirely inside DuckDB by pairing table functions with LATERAL joins. A LATERAL join allows the right-hand table expression to reference columns provided by the current row on the left side of the query.

DuckDB executes these table functions in batches using vectorized execution. Instead of dispatching thousands of individual synchronous HTTP requests, the query engine automatically manages batching, concurrency, and row alignment directly within the query plan.

Moving API orchestration into the database engine simplifies data pipelines and makes transformation workloads significantly faster.
