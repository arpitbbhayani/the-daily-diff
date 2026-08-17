---
title: ACORN and Filterable HNSW Repair Filtered Vector Search Graphs
source: hn
url: https://qdrant.tech/articles/filtered-vector-search-acorn/
date: '2026-08-15'
tags:
- acorn
- catchup
- filtered-vector-search
- hn
- hnsw
- metadata-filters
- nearest-neighbor-graph
- qdrant
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49312446'
comments: https://news.ycombinator.com/item?id=49312446
why_read: This article explains how filtered vector search graphs become fragmented
  and details Qdrant's solutions, ACORN-1 and Filterable HNSW, for repairing them
  and improving search performance. You will learn the mechanisms behind these fixes
  and when each is most effective.
authors:
- Dylan Couzon
- Meina Ghafouri
---

Filtered vector search often breaks down when metadata filters make the underlying HNSW graph sparse. Qdrant provides a detailed breakdown of this challenge and their ingenious solutions.

When filters remove too many points, HNSW graphs can lose connectivity, stranding traversals before reaching true nearest neighbors. Qdrant tackles this with two strategies: Filterable HNSW adds extra edges during index construction, while ACORN-1 explores "neighbors of neighbors" at search time.

Understanding these techniques is crucial if you are optimizing RAG pipelines or building any system relying on filtered vector search. It is a deep dive into the practical trade-offs between index build time and query performance.
