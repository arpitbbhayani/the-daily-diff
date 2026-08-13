---
title: Pg_clickhouse v0.10.0 significantly improves analytic workload pushdown
source: hn
url: https://clickhouse.com/blog/pg_clickhouse-whats-new-july-2026
date: '2026-08-11'
tags:
- aggregates
- c-driver
- catchup
- hn
- pg-clickhouse
- query-pushdown
- subqueries
- tpc-h
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49265031'
comments: https://news.ycombinator.com/item?id=49265031
why_read: Read this to understand the significant performance enhancements in pg_clickhouse
  v0.10.0, particularly for analytic workloads and TPC-H queries. You will learn about
  new features like subquery pushdown and a C driver, and how they improve query efficiency.
authors:
- Josh Ventura
---

Imagine 1000x faster TPC-H queries. The latest pg_clickhouse v0.10 release makes this a reality for analytical workloads, a massive win for anyone bridging PostgreSQL and ClickHouse. The key? Enhanced subquery pushdown.

This update pushes 16 out of 22 TPC-H queries to fully execute on ClickHouse, avoiding inefficient local processing. For example, a correlated subquery that was previously evaluated once per outer row now leverages full pushdown, turning a 32-second query into a 37-millisecond one.

Beyond pushdown, the team also rebuilt the binary driver using a plain-C client library and addressed concurrency bugs, significantly hardening the FDW. This kind of deep optimization directly impacts system scalability and query efficiency.
