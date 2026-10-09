---
title: TIN accelerates Postgres search queries while adding multilingual stemming
source: hn
url: https://planetscale.com/blog/tin-v106
date: '2026-10-08'
tags:
- catchup
- full-text-search
- hn
- postgres
- rust-stemmers
- snowball-project
- stemming
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50008022'
comments: https://news.ycombinator.com/item?id=50008022
why_read: Read this update to understand how TIN improves Postgres full-text indexing
  throughput and implements multilingual word stemming.
authors:
- Patrick Reynolds
- Eric Ridge
---

Full-text search inside relational databases frequently hits bottlenecks when reconciling linguistic stemming with aggressive top-k ranking queries. PlanetScale recently broke down the internals of TIN v1.0.6, their custom Postgres search index designed to outpace standard GIN indexing.

The update incorporates the Snowball stemming algorithm across 18 languages via Rust, mapping lexical variants to single root stems at indexing and query time. More importantly, it tackles heap attribute tiebreakers within top-k queries, avoiding expensive secondary table lookups when ordering results.

Because stemming alters indexed tokens, it requires an index rebuild, but the resulting query throughput shows a 2x to 3x performance improvement over previous builds. Pushing token normalization and sorting logic directly into the specialized index engine prevents the Postgres executor from falling back to slow sequential scans.

If you run text search directly inside PostgreSQL, examining how specialized index extensions handle ranking and stemming without external search clusters is well worth your time.
