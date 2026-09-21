---
title: PostgreSQL 19 manages unexpected query plan changes
source: hn
url: https://tapoueh.org/blog/2026/09/plan-advice-in-postgresql-19/
date: '2026-09-19'
tags:
- catchup
- hn
- pg-plan-advice
- pg-stash-advice
- postgresql-19
- query-optimization
- query-plan-management
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49761880'
comments: https://news.ycombinator.com/item?id=49761880
why_read: This explains how PostgreSQL 19 addresses the common problem of queries
  slowing down due to the planner unexpectedly choosing a different plan. You will
  learn about new modules that enable reading and enforcing specific query plans.
authors:
- Dimitri Fontaine
---

PostgreSQL 19 is bringing a game-changer for query performance stability: `pg_plan_advice` and `pg_stash_advice`. These new modules finally allow you to take a specific, effective query plan and enforce it, preventing the dreaded 'query got slow overnight' scenario.

Imagine a query that performs perfectly, then suddenly degrades because the planner, with updated statistics, chose a different, suboptimal path. With these features, you can now instruct PostgreSQL to use a known good plan, effectively stabilizing performance in critical production workflows.

This is a huge step forward for query optimization and database reliability. Any senior engineer managing PostgreSQL will find this invaluable for proactive performance management and debugging those frustrating, intermittent query regressions.
