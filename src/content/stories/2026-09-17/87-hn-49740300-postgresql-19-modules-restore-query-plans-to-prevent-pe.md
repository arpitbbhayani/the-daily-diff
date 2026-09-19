---
title: PostgreSQL 19 modules restore query plans to prevent performance regressions
source: hn
url: https://tapoueh.org/blog/2026/09/plan-advice-in-postgresql-19/
date: '2026-09-17'
tags:
- catchup
- hn
- pg-plan-advice
- pg-stash-advice
- plan-enforcement
- postgresql
- query-plan
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49740300'
comments: https://news.ycombinator.com/item?id=49740300
why_read: This article introduces new PostgreSQL 19 modules, pg_plan_advice and pg_stash_advice,
  that allow users to enforce specific query plans. Readers will learn how these modules
  prevent performance regressions caused by unexpected query plan changes.
authors:
- Dimitri Fontaine
---

Every PostgreSQL shop eventually faces the same headache: a query that once performed perfectly suddenly slows down overnight because the planner picked a new, suboptimal path. PostgreSQL 19 is set to solve this with `pg_plan_advice` and `pg_stash_advice`.

These new modules allow you to capture a working query plan as a string and then enforce it for future executions. Even better, `pg_stash_advice` can automatically apply these preferred plans based on the query ID, providing a robust mechanism against planner flukes caused by evolving data distributions.

This is a game-changer for database reliability and performance tuning. It ensures that critical queries maintain stable performance, providing a direct, powerful tool for query optimization that goes beyond merely analyzing `EXPLAIN` output.

This feature is poised to save countless hours of debugging and reactive performance tuning, offering proactive control over query execution.
