---
title: Compositional query builders solve structural limitations of generating SQL
source: hn
url: https://mechanicalrabbit.github.io/FunSQL.jl/stable/two-kinds-of-sql-query-builders/
date: '2026-10-02'
tags:
- catchup
- compositional-apis
- funsql
- hn
- relational-queries
- sql-generation
- sql-query-builders
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49939889'
comments: https://news.ycombinator.com/item?id=49939889
why_read: Learn why SQL syntax makes programmatic query generation difficult and how
  compositional interfaces offer a more expressive approach to query building.
authors:
- vinhnx
---

Most backend developers treat SQL query builders as interchangeable syntactic wrappers. Whether using Active Record, Laravel, or LINQ, the method chains look virtually identical on the surface. However, beneath the interface lies a fundamental architectural divide in how query representations are constructed.

Traditional query builders simply mirror SQL syntax fragments into an abstract syntax tree. This creates severe composition problems: combining subqueries, dynamic joins, or nested aggregates often produces invalid SQL or requires unwieldy raw string interpolations.

True relational query builders model the underlying relational algebra rather than SQL clauses. Queries are treated as pure functional transformations over tabular relations. Intermediate operations can be composed, reordered, and optimized before the engine compiles the complete expression into clean SQL.

Understanding this distinction helps engineers design robust data access layers that handle complex relational logic without fighting ORM limitations.
