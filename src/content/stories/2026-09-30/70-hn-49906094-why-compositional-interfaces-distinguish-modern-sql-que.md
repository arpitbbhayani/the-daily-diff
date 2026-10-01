---
title: Why compositional interfaces distinguish modern SQL query builders
source: hn
url: https://mechanicalrabbit.github.io/FunSQL.jl/stable/two-kinds-of-sql-query-builders/#Two-Kinds-of-SQL-Query-Builders
date: '2026-09-30'
tags:
- catchup
- funsql
- hn
- query-builders
- relational-databases
- sql-generation
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49906094'
comments: https://news.ycombinator.com/item?id=49906094
why_read: Learn why generating SQL programmatically is challenging and how compositional,
  data-oriented interfaces differ fundamentally from traditional query builders.
authors:
- fanf2
---

Most SQL query builders look nearly identical on the surface, but their underlying architectures fundamentally differ in expressiveness.

Traditional query builders simply mirror SQL syntax into method chains, which makes dynamic query composition fragile whenever joins, aggregations, or subqueries must be reused. In contrast, compositional query builders model queries as true relational algebra transformations, assembling an abstract semantic graph before generating SQL.

Understanding this distinction helps engineers design more maintainable data-access layers that avoid ORM query generation bottlenecks.
