---
title: How to replicate production query plans in test environments
source: hn
url: https://weavori.com/blog/postgres-query-plans-without-production-data
date: '2026-09-28'
tags:
- catchup
- hn
- pg-statistic
- postgresql
- query-optimization
- query-planner
- synthetic-data
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49884311'
comments: https://news.ycombinator.com/item?id=49884311
why_read: Learn why database queries perform differently in CI versus production and
  how to fix query planner mismatches by importing statistics or matching row distributions.
authors:
- The Weavori Team
---

Your local PostgreSQL query plans lie to you because query planners optimize for row distributions, not schema definitions. A query executing in 40 milliseconds against 100 development rows can easily degrade to a 5 second sequential scan when executed across 50 million production records.

The PostgreSQL query planner relies directly on pg_statistic to estimate predicate selectivity and decide whether an index scan is cheaper than a full table scan. In development or continuous integration environments, uniform random data generation corrupts selectivity estimates. An unindexed foreign key join costs almost nothing across 100 rows, leading engineers to deploy missing indexes straight to production.

With PostgreSQL 18, you can export and inject production statistics tables into non-production environments without copying sensitive row data. If you cannot use statistics injection, synthetic data generators must mirror production histograms and frequency tables rather than using uniform distributions.

Testing query performance requires replicating the statistical distribution, not just the schema.
