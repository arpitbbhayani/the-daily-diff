---
title: Pg_plan_filter blocks expensive queries using estimated planner cost
source: news
url: https://www.postgresql.org/about/news/pg_plan_filter-100-released-3352/
date: '2026-10-07'
tags:
- catchup
- cost-estimation
- news
- pg-plan-filter
- postgresql
- query-planner
section: databases
is_news: true
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49989582'
comments: https://news.ycombinator.com/item?id=49989582
why_read: Learn how this module prevents resource-intensive statements from running
  on production databases by evaluating query planner cost estimates before execution.
authors:
- PGX, Inc.
---

Most database guardrails rely on statement timeouts after a runaway query has already consumed CPU and I/O. pg_plan_filter takes a different approach by intercepting queries before execution starts.

The extension evaluates the PostgreSQL planner cost estimates directly. If a statement exceeds the configured statement_cost_limit, or if the cumulative cost in a transaction crosses transaction_cost_limit, the engine aborts the plan immediately with an error.

Because this check runs against the query planner output rather than actual execution runtime, it prevents expensive full table scans or nested loops from touching disks in production. You can also restrict checks to read queries using filter_select_only across PostgreSQL 14 through 18.

Stopping bad queries at the planner phase is an effective way to safeguard multi-tenant database clusters.
