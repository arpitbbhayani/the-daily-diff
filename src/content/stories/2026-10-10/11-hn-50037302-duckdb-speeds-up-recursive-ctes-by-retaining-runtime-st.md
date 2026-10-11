---
title: DuckDB speeds up recursive CTEs by retaining runtime state
source: hn
url: https://duckdb.org/2026/08/25/how-duckdb-runs-recursive-ctes-faster
date: '2026-10-10'
tags:
- catchup
- duckdb
- fixed-point-computation
- hn
- pipeline-scheduling
- query-execution
- recursive-ctes
section: databases
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '50037302'
comments: https://news.ycombinator.com/item?id=50037302
why_read: Read this to understand the architectural shift in DuckDB that treats recursive
  CTEs as long-lived computations rather than repeated isolated queries, drastically
  reducing execution overhead.
authors:
- Denis Hirn
---

Traditional analytical engines evaluate recursive Common Table Expressions by running the recursive step in an isolated loop, paying the penalty of pipeline scheduling, operator instantiation, and teardown on every iteration.

DuckDB overhauled this architecture for version 2.0 by restructuring recursion as a single long-lived computation. Instead of rebuilding execution state per cycle, the query plan now owns the physical operator tree and maintains a reusable pool of pipeline executors. Iterations borrow these executors and retain epoch-invariant state like hash table builds across the entire fixed-point computation.

The engine also inspects exact frontier cardinalities dynamically before each step. It switches between lightweight inlined execution for tiny working tables and full scheduled worker threads when the frontier expands. This eliminates query dispatch overhead during the long tail of graph traversal queries.

Query engines often leak performance across iteration boundaries when they fail to distinguish persistent state from transient step inputs.
