---
title: A single DISTINCT keyword cripples PostgreSQL parallel query performance
source: hn
url: https://boringsql.com/posts/distinct-in-your-count/
date: '2026-08-06'
tags:
- catchup
- distinct-aggregate
- hn
- parallel-query
- performance
- postgresql
- query-optimization
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49201369'
comments: https://news.ycombinator.com/item?id=49201369
why_read: This post explains how the DISTINCT keyword in COUNT statements can severely
  impact PostgreSQL query performance by disabling parallel execution. Readers will
  understand the underlying mechanism and learn strategies to optimize such queries.
authors:
- gmcabrita
---

Do you use COUNT(DISTINCT column) in PostgreSQL? Be warned: that innocent-looking DISTINCT keyword can single-handedly disable parallel query execution for the entire statement. This is a critical performance trap that many engineers overlook.

The article dives deep into the PostgreSQL planner's behavior, explaining exactly why this happens and how it impacts large datasets. It is not just about indexing; it is about how aggregates are processed.

The good news? It also shows you concrete SQL rewrite patterns, like pushing DISTINCT into a GROUP BY subquery, that can re-enable parallelism and drastically cut down query times. This is highly actionable advice for anyone dealing with analytical workloads.

Stop letting a single keyword sabotage your database performance.
