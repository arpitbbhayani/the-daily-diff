---
title: Reverting SQL property graph queries in PostgreSQL
source: github
url: https://git.postgresql.org/pg/commitdiff/2b9e1aff4d3d933ae8ee377fef22c2af9c7797e8
date: '2026-10-05'
tags:
- catchup
- github
- graph-queries
- postgresql
- property-graphs
- sql-pgq
section: databases
is_news: false
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 7
hn_id: '49964997'
comments: https://news.ycombinator.com/item?id=49964997
why_read: This commit log details the revert of the SQL/PGQ implementation in PostgreSQL.
  It provides insight into the components and patches involved in graph query support
  within relational engines.
authors:
- Peter Eisentraut
---

PostgreSQL committers have officially reverted the implementation of SQL Property Graph Queries (SQL/PGQ) from the development branch for PostgreSQL 19. The change reverts dozens of commits spanning graph pattern matching, lateral references in GRAPH_TABLE, and query rewrites.

SQL/PGQ is part of the SQL:2023 standard, designed to let relational databases query property graph structures natively without external graph extensions. However, supporting pattern matching, multi-label expressions, and recursive graph traversals inside the core query planner introduces immense complexity into the parser, AST rewrites, and dependency tracking.

The git log reveals persistent edge cases around graph pattern variable scoping, RLS interactions, and stack overflows during query rewrites. Graph engines require dedicated execution paradigms, and mapping graph semantics cleanly onto the relational executor remains a massive engineering hurdle.

Building native graph syntax into an established relational engine is hard, and Postgres maintainers consistently choose engine stability over rushed standards compliance.
