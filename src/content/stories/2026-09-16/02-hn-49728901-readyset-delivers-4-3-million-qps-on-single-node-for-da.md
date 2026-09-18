---
title: Readyset delivers 4.3 million QPS on single node for databases
source: hn
url: https://readyset.io/case-studies/how-we-reached-43-million-qps-for-mysql-and-postgresql-workloads-on-a-single-readyset-node
date: '2026-09-16'
tags:
- benchmarking
- caching
- catchup
- hn
- mysql
- performance-tuning
- postgresql
- qps
- readyset
- single-node-performance
section: databases
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49728901'
comments: https://news.ycombinator.com/item?id=49728901
why_read: This post details how Readyset achieved 4.3 million queries per second on
  a single node for MySQL and PostgreSQL. Readers will learn about the process of
  profiling and bottleneck fixing that led to significant performance improvements.
authors:
- marceloaltmann
---

Achieving 4.3 million queries per second (QPS) on a single node for cached MySQL and PostgreSQL workloads is not trivial. Readyset managed this by focusing intensely on the serving path.

They found that careful profiling, rather than just throwing hardware at the problem, was key. By pinpointing and fixing bottlenecks, they extracted 6.4x more throughput from the same hardware, drastically reducing latency while improving resource utilization.

This is a masterclass in query optimization and system design for extreme performance. If you are building high-throughput data systems, understanding how they achieved this level of efficiency will provide invaluable, actionable insights.
