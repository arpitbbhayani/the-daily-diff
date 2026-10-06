---
title: Sail runs Doom on DataFusion using a single query
source: hn
url: https://rust.ai/sail-runs-doom/
date: '2026-10-05'
tags:
- apache-datafusion
- catchup
- doom
- hn
- raycasting
- recursive-cte
- sail
- spark-sql
section: databases
is_news: false
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49967793'
comments: https://news.ycombinator.com/item?id=49967793
why_read: Learn how the Sail compute engine models Doom game mechanics and raycasting
  entirely through recursive SQL queries and common table expressions.
authors:
- setuporg
---

Running Doom inside a database engine is the ultimate stress test for query planners. The team behind Sail, a Spark-compatible compute engine built on Apache DataFusion in Rust, executed 1,200 tics of Freedoom as a single recursive SQL query.

Unlike traditional ports that rely on procedural updates and side-effecting tables, this implementation uses a pure recursive Common Table Expression where each iteration computes the complete 35 Hz game state tic. The raycasting renderer itself runs across 89 CTEs, performing binary space partitioning traversal, wall clipping, and texture mapping through standard relational joins and window functions over raw map tables.

Executing complex state machines purely within relational algebra exposes real planner bottlenecks. Pushing non-trivial computation into query engines demonstrates how modern vectorized query execution engines handle massive nested CTE graphs without intermediate materialization penalties.

Vectorized execution engines continue to push the boundaries of what purely declarative SQL can evaluate efficiently.
