---
title: Datalevin 1.1.0 Achieves State-of-the-Art Performance Across Data Models
source: hn
url: https://yyhh.org/blog/2026/09/datalevin-1-1-0-performance/
date: '2026-09-07'
tags:
- benchmarking
- catchup
- database-performance
- datalevin
- document-reads
- durable-transactions
- graph-queries
- hn
- logical-queries
- relational-queries
section: databases
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49601360'
comments: https://news.ycombinator.com/item?id=49601360
why_read: This article presents benchmark results showcasing how Datalevin 1.1.0 delivers
  state-of-the-art performance across relational, graph, document, and logical workloads.
  Readers will learn about its competitive advantages against established databases
  like SQLite, PostgreSQL, Neo4j, and MongoDB in key metrics.
authors:
- huahaiy
---

Datalevin 1.1.0 claims top performance across relational, graph, document, and even logical data models. This is a bold assertion given how specialized most high-performance databases are. The benchmarks show it outperforming SQLite, PostgreSQL, Neo4j, and MongoDB in their respective domains.

For example, it achieves 3.57x SQLite's throughput in durable transactions and is 3.37x faster than PostgreSQL for total query time on JOB queries. In graph queries, it is 8.56x faster than Neo4j, and for document reads, 3.99x faster than MongoDB.

This kind of multi-model performance from a single system is a big deal. It suggests a potentially unified approach to application state that could simplify infrastructure for many teams.
