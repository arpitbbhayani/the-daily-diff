---
title: Common PostgreSQL design mistakes and recommended alternatives
source: hn
url: https://wiki.postgresql.org/wiki/Don%27t_Do_This
date: '2026-09-28'
tags:
- anti-patterns
- catchup
- data-types
- database-design
- hn
- postgresql
- sql-patterns
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 4
hn_id: '49877446'
comments: https://news.ycombinator.com/item?id=49877446
why_read: Read this to understand common schema design pitfalls in PostgreSQL and
  learn safer architectural alternatives.
authors:
- piccirello
---

The official PostgreSQL wiki maintains an indispensable catalog of antipatterns that quietly degrade query performance and data integrity in production. Many developers still use timestamp without time zone, char(n), serial keys, or SQL_ASCII out of habit, unaware of the subtle operational landmines these types introduce.

For example, using NOT IN against a subquery will completely collapse into returning zero rows if a single null value exists in the target set, whereas NOT EXISTS handles null semantics cleanly and executes via an efficient antijoin. Similarly, using the serial data type creates an underlying sequence with restrictive ownership quirks, while standard identity columns offer cleaner permission handling and robust schema portability.

Auditing schema definitions against these documented mistakes is one of the highest leverage hygiene tasks any backend engineering team can perform on an active database cluster.
