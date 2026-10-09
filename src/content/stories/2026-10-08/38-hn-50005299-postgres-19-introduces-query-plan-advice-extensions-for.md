---
title: Postgres 19 introduces query plan advice extensions for execution plans
source: hn
url: https://www.snowflake.com/en/blog/engineering/postgres-19-query-plan-hints/
date: '2026-10-08'
tags:
- catchup
- execution-plans
- hn
- pg-plan-advice
- pg-stash-advice
- query-hints
- query-planner
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50005299'
comments: https://news.ycombinator.com/item?id=50005299
why_read: Read this to understand how PostgreSQL 19 adds explicit query plan hints
  through new extensions and when to use them.
authors:
- Elizabeth Garrett Christensen
---

PostgreSQL has historically avoided native query optimizer hints, arguing that accurate table statistics and vacuuming should yield the optimal plan. However, production workloads frequently hit edge cases where an optimizer picks a suboptimal join order or scans the wrong index under skewed data distributions.

PostgreSQL 19 addresses this gap through two new contrib modules named pg_plan_advice and pg_stash_advice. Instead of hacking planner cost constants globally, these extensions allow engineers to provide explicit execution advice, such as scan types or join sequences, directly alongside queries.

The pg_stash_advice extension lets operators persist advice strings keyed by query identifier. This means parameterized queries that run repeatedly can use stable, predefined plan advice without requiring application code changes or schema rewrites.

Having the ability to stabilize volatile plans in production provides a crucial safety valve for database engineers dealing with unexpected regression spikes.
