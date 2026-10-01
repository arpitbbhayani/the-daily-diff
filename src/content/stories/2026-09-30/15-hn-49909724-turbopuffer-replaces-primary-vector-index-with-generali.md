---
title: Turbopuffer replaces primary vector index with generalized storage architecture
source: hn
url: https://turbopuffer.com/blog/rip-vector-database
date: '2026-09-30'
tags:
- ann-indexing
- catchup
- hn
- object-storage
- spann
- spfresh
- storage-architecture
- turbopuffer
- vector-database
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49909724'
comments: https://news.ycombinator.com/item?id=49909724
why_read: Read this to understand why specialized vector databases hit scaling limits
  and how redesigning storage around a generalized primary index enables broader search
  query plans.
authors:
- Dan Harrison
---

Dedicated vector databases built around a single Approximate Nearest Neighbor index are hitting an architectural dead end. When systems store vectors alongside relational data and metadata, making the vector index the primary storage structure forces massive compromises in compaction, querying, and cost.

Turbopuffer is completely overhauling its storage engine to treat vector search as just another secondary index. Earlier versions used hierarchical clustering trees like SPANN and SPFresh directly on object storage to keep costs low. However, supporting flexible multi-modal query plans and document updates requires a decoupled storage layout where primary records live independently of specialized search indexes.

Decoupling the primary document storage from ANN indexing allows object storage to act as the single source of truth while secondary indexes handle filtering and retrieval.

Specialized database engines inevitably converge toward general storage architectures once real-world query workloads mature.
