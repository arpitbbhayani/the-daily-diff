---
title: PostgreSQL rewrites query plans using statically knowable transformations
source: hn
url: https://theconsensus.dev/p/2026/09/13/query-plan-rewriting-in-postgresql.html
date: '2026-09-18'
tags:
- abstract-syntax-tree
- catchup
- hn
- postgresql
- query-plan-rewriting
- query-planner
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49753435'
comments: https://news.ycombinator.com/item?id=49753435
why_read: This article explains the specific mechanisms PostgreSQL uses to rewrite
  query plans before optimization. Readers will gain a clear understanding of the
  distinction between query rewriting and optimization within a database.
authors:
- Phil Eaton
---

Understanding how your database processes queries is not just academic; it directly impacts performance and debugging efficiency. PostgreSQL's query planner does more than just pick indexes; it actively rewrites your SQL behind the scenes.

This article dissects the planner's internal logic, clearly differentiating between static rewrites (like simplifying i+0 to i) and more complex, statistics-driven optimizations. It reveals how simple-looking queries can be dramatically transformed before execution.

Grasping these mechanisms is crucial for any engineer aiming to master SQL performance. You will learn to anticipate planner behavior, diagnose slow queries effectively, and ultimately craft more efficient database interactions. It changes how you think about writing SQL.
