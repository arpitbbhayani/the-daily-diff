---
title: MySQL binary log can feed DuckDB for superior performance
source: hn
url: https://percona.community/blog/2026/08/26/duckdb-speed-on-mysql-without-a-new-storage-engine/
date: '2026-08-26'
tags:
- binary-log
- catchup
- columnar
- duckdb
- hn
- mysql
- performance
- replication
- storage-engine
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49452144'
comments: https://news.ycombinator.com/item?id=49452144
why_read: This article demonstrates how to achieve significant performance gains by
  integrating DuckDB with MySQL using the existing binary log, without needing to
  modify MySQL's internals. It offers an alternative to the storage engine approach,
  highlighting the efficiency of a columnar feed from the binlog.
authors:
- nethalo
---

Achieving DuckDB's analytical speed on MySQL data without rewriting storage engines is a compelling challenge. This article dives deep into two approaches: an experimental storage engine integration and a more practical method using MySQL's binary log (binlog) as a columnar feed via dbtrail.

It outlines striking performance gains, with DuckDB loads being 25 times faster and disk usage one-fifth of InnoDB, completing TPC-H in seconds compared to hours. Crucially, it honestly addresses real-world challenges, such as silent data loss found in the experimental storage engine approach, highlighting the complexities of data consistency.

This is essential reading for anyone designing hybrid transactional/analytical processing systems, offering actionable insights into leveraging existing database infrastructure for powerful analytical capabilities and the pitfalls to avoid.
