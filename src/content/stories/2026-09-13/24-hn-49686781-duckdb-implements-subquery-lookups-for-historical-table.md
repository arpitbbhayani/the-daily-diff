---
title: DuckDB implements subquery lookups for historical table versions
source: hn
url: https://rusty.today/blog/duckdb-at-clause-lateral-temporal-tables/
date: '2026-09-13'
tags:
- catchup
- duckdb
- ducklake
- historical-data
- hn
- snapshots
- subqueries
- temporal-tables
- time-travel
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49686781'
comments: https://news.ycombinator.com/item?id=49686781
why_read: This post explains a new DuckDB feature that enables direct subqueries for
  selecting historical table snapshots. Readers will learn how this simplifies querying
  past table states, eliminating the need for application-level workarounds.
authors:
- Rusty Conover
---

DuckDB just leveled up its time-travel capabilities, and it is a game changer for how you interact with versioned data.

Instead of fetching snapshot IDs in your application code, you can now embed subqueries directly into the AT (VERSION => ...) clause. This means you can write queries like SELECT * FROM table AT (VERSION => (SELECT max(snapshot_id) FROM ... WHERE schema_version = 1)) directly in SQL. This shift moves relational logic back where it belongs, dramatically improving query composability and reducing the N+1 query problem often seen with time-travel features.

It is a practical enhancement that simplifies your application code and optimizes your database interactions. This is about better expressiveness and more efficient data retrieval, making versioned data much easier to work with.
