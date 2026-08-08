---
title: Fast approximations and sampling improve slow COUNT DISTINCT in Postgres
source: hn
url: https://www.snowflake.com/en/blog/engineering/postgres-count-distinct-approximation/
date: '2026-08-06'
tags:
- catchup
- count-distinct
- data-approximation
- hn
- postgres
- probabilistic-data-structures
- sampling
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49199556'
comments: https://news.ycombinator.com/item?id=49199556
why_read: This article explains how to use approximation and sampling techniques in
  Postgres to significantly speed up slow COUNT DISTINCT queries for large datasets.
  Readers will learn about various built-in and algorithmic options for fast, approximate
  results.
authors:
- Elizabeth Garrett Christensen
---

Tired of `COUNT(DISTINCT)` queries grinding your PostgreSQL database to a halt? The Snowflake engineering team just dropped a brilliant guide on fast approximations.

They dive deep into how Postgres's built-in sampling and probabilistic data structures, specifically HyperLogLog (HLL) and DataSketches, can slash query times. Imagine getting an 'about 497,000' in milliseconds instead of waiting a second for '497,536'. For many analytical use cases, this trade-off is a no-brainer.

The article provides a full breakdown with test data, benchmarks, and configuration tips for Postgres 17/18+. This is highly actionable for anyone managing large-scale data and needing real-time insights without the performance penalty.
