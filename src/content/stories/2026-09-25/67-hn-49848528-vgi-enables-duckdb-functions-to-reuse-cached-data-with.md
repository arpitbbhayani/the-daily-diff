---
title: VGI enables DuckDB functions to reuse cached data with HTTP rules
source: hn
url: https://query.farm/blog/http-caching-duckdb-vgi/
date: '2026-09-25'
tags:
- api-calls
- catchup
- data-reuse
- duckdb
- hn
- http-caching
- vgi
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49848528'
comments: https://news.ycombinator.com/item?id=49848528
why_read: This article explains how the Vector Gateway Interface (VGI) integrates
  HTTP-style caching into DuckDB functions, allowing data services to specify how
  long an answer is safe to reuse. You will learn how this mechanism helps reduce
  redundant API calls and improve query performance by reusing previously fetched
  data.
authors:
- Query.Farm Team
---

Applying HTTP caching principles to database functions can revolutionize how AI agents interact with data services. A new Vector Gateway Interface (VGI) for DuckDB allows external data services to explicitly tell the database how long query results are safe to reuse.

This means AI agents can make repeated, slightly varied queries without hitting external APIs for data that has not changed. The service controls the cache lifetime, ensuring data freshness while drastically reducing latency and cost from redundant API calls.

Benchmarking reveals that while caching is a powerful optimization, understanding its overhead is crucial. This approach offers a smart trade-off, enabling efficient and responsive agentic workflows against dynamic external data sources.

Better context engineering is not just for LLMs, it is for data access patterns too.
