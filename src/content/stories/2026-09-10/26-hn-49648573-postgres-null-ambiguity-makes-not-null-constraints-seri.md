---
authors:
- Christopher Winslett
comments: https://news.ycombinator.com/item?id=49648573
date: '2026-09-10'
depth_score: 8
hn_id: '49648573'
image: /infographics/26-hn-49648573.jpg
interest_score: 8
novelty_score: 6
section: databases
source: hn
tags:
- catchup
- hn
- not-null-constraints
- 'null'
- postgres
- sql
- three-valued-logic
title: Postgres NULL ambiguity makes NOT NULL constraints serious business
url: https://www.crunchydata.com/blog/postgres-calculations-and-the-ambiguity-of-null
utility_score: 9
why_read: This article clarifies how NULL in Postgres behaves as 'unknown' rather
  than a value, explaining its propagation through SQL operations and why understanding
  this ambiguity makes NOT NULL constraints critical for predictable results.
---

NULL in SQL is not just 'empty'; it is 'unknown', and understanding its three-valued logic is critical for any database interaction. This guide details how PostgreSQL handles NULL across comparisons, arithmetic, logical operators, and aggregates, revealing common pitfalls.

For example, (NULL = NULL) and (NULL != NULL) both resolve to NULL, not TRUE or FALSE. This nuanced behavior can lead to unexpected query results if you are not explicitly testing for IS NULL or IS NOT NULL. Many senior engineers have been bitten by this.

Mastering NULL behavior helps you avoid subtle bugs and design more reliable database schemas using NOT NULL constraints, ensuring data integrity and predictable query outcomes.