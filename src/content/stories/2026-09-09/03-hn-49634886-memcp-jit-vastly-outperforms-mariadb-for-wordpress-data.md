---
title: MemCP-JIT vastly outperforms MariaDB for WordPress database operations
source: hn
url: https://www.memcp.org/wiki/Benchmark_MemCP_vs._MariaDB_on_Wordpress#Host_PHP_directly%3A_remove_a_round_trip_for_every_small_query
date: '2026-09-09'
tags:
- benchmarking
- catchup
- hn
- mariadb
- memcp
- performance
- php-hosting
- query-optimization
- wordpress
section: databases
interest_score: 9
depth_score: 8
utility_score: 9
novelty_score: 9
hn_id: '49634886'
comments: https://news.ycombinator.com/item?id=49634886
why_read: This article presents benchmark results demonstrating MemCP-JIT's significant
  performance advantage over MariaDB for WordPress database queries. Readers will
  understand the specific speedups achieved and MemCP's capability to host PHP directly.
authors:
- carli2
---

Imagine a database that can run your PHP code directly within its process, eliminating round trips for small queries. MemCP, a MySQL-compatible database, does exactly this, and the benchmarks are astonishing.

For WordPress workloads, MemCP-JIT is shown to complete search queries 36 times faster than MariaDB, with comment counts 21 times faster. This is not just a marginal gain; it is a fundamental shift in how database-driven applications can achieve peak performance.

This innovative architectural choice to co-locate application logic with data processing presents a paradigm shift for query optimization. It is a must-read for anyone seeking to push the boundaries of database performance in web applications.
