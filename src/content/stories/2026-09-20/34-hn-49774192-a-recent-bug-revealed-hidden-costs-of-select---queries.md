---
title: A recent bug revealed hidden costs of SELECT * queries
source: hn
url: https://notesonsystems.com/articles/why-im-done-with-select-star
date: '2026-09-20'
tags:
- catchup
- database-performance
- debugging-database
- hn
- orm-critique
- select-star
- sql-queries
section: databases
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49774192'
comments: https://news.ycombinator.com/item?id=49774192
why_read: This text explains why one should be careful with SELECT * queries, detailing
  a real-world bug that exposed unexpected performance issues. It highlights how seemingly
  safe database operations can have hidden costs.
authors:
- theanonymousone
---

Ever thought `SELECT *` queries were mostly harmless? A recent production incident highlighted a critical flaw in that assumption, forcing an engineer to rethink their approach to database queries and ORMs.

The culprit? An innocent-looking `SELECT *` on a table that later had a large `TEXT` column added. What was once a fast query became a bottleneck, silently fetching megabytes of unnecessary data per row. This amplified the problem exponentially with more rows.

The lesson is clear: explicit column selection is not just a style preference. It is a fundamental practice for query optimization and system stability, especially as schemas evolve. Avoid the hidden performance traps of `SELECT *` to prevent unexpected scaling issues and keep your database happy.
