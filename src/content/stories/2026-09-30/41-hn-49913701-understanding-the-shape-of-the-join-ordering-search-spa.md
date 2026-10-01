---
title: Understanding the shape of the join ordering search space
source: hn
url: https://deferworks.org/posts/join-ordering/
date: '2026-09-30'
tags:
- catchup
- dynamic-programming
- hn
- join-ordering
- query-optimization
- search-space
section: databases
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49913701'
comments: https://news.ycombinator.com/item?id=49913701
why_read: Read this to build a clear mental model of join ordering algorithms in query
  optimization. You will gain a foundational understanding of the search space structure
  and German dynamic programming techniques.
authors:
- ibobev
---

Join ordering remains one of the hardest computational bottlenecks inside relational query optimizers. As the number of relations in a query grows, the search space of valid join trees explodes combinatorially, making exhaustive evaluation impossible.

This breakdown covers the foundational search spaces of join ordering, comparing left-deep, right-deep, and bushy tree representations. It walks through how modern query optimizers systematically prune equivalent sub-plans using dynamic programming algorithms derived from the German lineage of database research.

Understanding these algorithmic trade-offs explains why slight differences in query structure or join graph topologies dramatically impact optimizer latency and plan quality.

If you want to understand how engines like PostgreSQL, DuckDB, or SQLite decide execution order under the hood, this deep dive is essential reading.
