---
title: How FunSQL combines compositional queries with full SQL coverage
source: hn
url: https://mechanicalrabbit.github.io/FunSQL.jl/stable/two-kinds-of-sql-query-builders/#Two-Kinds-of-SQL-Query-Builders
date: '2026-09-29'
tags:
- catchup
- compositionality
- database-querying
- funsql
- hn
- sql-generation
- sql-query-builders
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49901267'
comments: https://news.ycombinator.com/item?id=49901267
why_read: Understand how FunSQL overcomes the grammar limitations of SQL by combining
  complete querying capabilities with a compositional interface. You will learn the
  structural differences between traditional ORM query builders and data-oriented
  SQL generation.
authors:
- ibobev
---

Most SQL query builders in production codebases are thin syntactic wrappers over SQL clauses. They offer fluent method chaining for WHERE or LIMIT, but they break down when building deeply nested, reusable subqueries or dynamic projections.

True compositional query builders treat SQL queries as structured data transformations rather than string-assembly pipelines. Instead of mirroring the quasi-English grammar of SQL, a relational abstraction allows clauses to compose cleanly without leaky state or unintended variable shadowing.

When your query builder models the underlying relational algebra rather than raw syntax, complex dynamic queries become significantly safer and more modular.
