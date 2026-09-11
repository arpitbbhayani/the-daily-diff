---
title: memcp offers 10x OLAP performance as a MySQL drop-in replacement
source: github
url: https://github.com/launix-de/memcp
date: '2026-09-09'
tags:
- catchup
- columnar-database
- database-performance
- github
- in-memory-database
- mysql-replacement
- olap
- oltp
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49623701'
comments: https://news.ycombinator.com/item?id=49623701
why_read: This describes memcp, a columnar in-memory database designed as a drop-in
  replacement for MySQL. Readers will understand how it delivers 10x performance improvements
  for OLAP workloads while maintaining OLTP compatibility.
authors:
- carli2
---

Imagine replacing your existing MySQL or Postgres instance and immediately getting up to 90x faster performance for analytical workloads. MemCP promises exactly that by implementing a columnar in-memory database designed as a drop-in replacement.

This is not a mere tweak; it is a fundamental architectural shift. While traditional row-oriented databases are optimized for OLTP, MemCP targets OLAP bottlenecks with its columnar design, storing data in memory for blazing-fast aggregations and complex queries.

The challenge with such solutions is always the 'drop-in' claim. If MemCP lives up to its promise, it offers a pragmatic path to significantly enhance query speeds without a complete re-architecture of your application layer, a huge win for data-intensive systems.
