---
title: Turbopuffer rebuilds storage engine to generalize beyond vectors
source: hn
url: https://turbopuffer.com/blog/rip-vector-database
date: '2026-09-30'
tags:
- ann-index
- catchup
- hn
- object-storage
- spann
- spfresh
- storage-engine
- vector-database
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49915734'
comments: https://news.ycombinator.com/item?id=49915734
why_read: Read this to understand why turbopuffer is moving away from an ANN-centric
  primary index toward a generalized search architecture.
authors:
- Dan Harrison
---

Treating the approximate nearest neighbor vector index as the primary storage engine is an architectural dead end for general-purpose search. Early vector databases organized their entire storage layout around vector graph or clustering trees, making metadata filtering, updates, and non-vector queries inefficient.

Turbopuffer is redesigning its storage engine to demote vector search from the primary index to just another secondary index. In their original architecture, documents were clustered strictly around vector centroids on object storage. While this delivered cost-effective similarity search with local NVMe caching, it severely restricted query planning when workloads required heavy metadata filtering and full-text search.

By decoupling document storage from index mechanics, modern search engines can execute hybrid plans across relational filters and inverted indexes without forcing every read through a vector structure.

Specialized vector databases are increasingly giving way to unified search architectures where embeddings are simply secondary columns.
