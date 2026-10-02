---
title: How ParadeDB matched PlanetScale TIN full text search performance
source: hn
url: https://www.paradedb.com/blog/opening-a-closed-tin
date: '2026-10-01'
tags:
- bm25
- catchup
- full-text-search
- hn
- paradedb
- planetscale-tin
- postgres
section: databases
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49924275'
comments: https://news.ycombinator.com/item?id=49924275
why_read: Read this to understand how ParadeDB optimized its architecture to match
  and surpass PlanetScale TIN search benchmarks. You will gain concrete insight into
  BM25 ranking and full-text search performance tuning in Postgres.
authors:
- Ming Ying
image: /infographics/07-hn-49924275.jpg
---

When PlanetScale released TIN, their Postgres full-text search extension, benchmarks showed it running up to eight times faster than ParadeDB on BM25-ranked search. The ParadeDB team analyzed the architecture and discovered that the speed difference was not an insurmountable structural advantage, but a set of specific query execution bottlenecks.

By deep-diving into execution paths on 150 million documents from StackExchange, ParadeDB restructured their BM25 ranking and document count paths. Under eight concurrent clients during sustained five-minute runs, ParadeDB pushed throughput to 81.9 queries per second compared to TIN at 33 queries per second across mixed conjunction and disjunction workloads.

This benchmark demonstrates that Postgres search extensions can compete directly with dedicated search engines when query execution and index traversal are fine-tuned at the engine level.
