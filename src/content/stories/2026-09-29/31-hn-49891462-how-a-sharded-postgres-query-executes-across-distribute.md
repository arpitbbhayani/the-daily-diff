---
title: How a sharded Postgres query executes across distributed servers
source: hn
url: https://planetscale.com/blog/the-lifecycle-of-a-sharded-postgres-query
date: '2026-09-29'
tags:
- catchup
- connection-pooling
- database-sharding
- hn
- query-planner
- sharded-postgres
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49891462'
comments: https://news.ycombinator.com/item?id=49891462
why_read: Read this to understand the complex internal mechanics required to plan
  and execute distributed queries across large-scale sharded PostgreSQL deployments.
authors:
- hollylawly
---

Sharding Postgres across thousands of nodes sounds straightforward until you examine what happens inside the query planner. A single query joining two tables across multiple shards cannot rely on the standard Postgres process-per-connection model or a single local execution plan.

To present a sharded cluster as a single logical database, the distributed layer must replicate the Postgres wire protocol, parse the abstract syntax tree, and construct a shard-aware query plan. The planner determines which shards hold the relevant partitions, pushes predicate filters down to individual nodes, and coordinates scatter-gather routines for cross-shard joins.

Connection management is the next critical hurdle. Because standard Postgres allocates a dedicated process per connection, routing queries across thousands of backend shards will quickly exhaust server memory without an intermediate pooling and multiplexing tier.

Understanding this query lifecycle helps demystify how modern distributed SQL engines achieve linear scale while preserving relational semantics.
