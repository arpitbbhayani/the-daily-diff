---
title: Turbopuffer redesigns storage architecture by making vector indexes secondary
source: hn
url: https://turbopuffer.com/blog/rip-vector-database
date: '2026-10-01'
tags:
- ann-search
- catchup
- hn
- secondary-index
- storage-architecture
- turbopuffer
- vector-database
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49923466'
comments: https://news.ycombinator.com/item?id=49923466
why_read: Understand the architectural limitations of vector-first databases and how
  demoting ANN search to a secondary index enables faster hybrid search and complex
  SQL aggregations.
authors:
- Dan Harrison
image: /infographics/03-hn-49923466.jpg
---

Specialized vector databases made sense when approximate nearest neighbor search was a novel workload, but treating vector indices as the primary storage layout creates major architectural bottlenecks for general query execution. As systems evolve, real-world workloads invariably demand structured filtering, aggregations, and standard SQL queries alongside vector similarity.

Turbopuffer is restructuring its storage engine in version 3, demoting the approximate nearest neighbor vector index from primary storage layout to a secondary index. In the original architecture, documents were keyed primarily around vector graphs, which severely constrained execution plans for operations like GROUP BY and multi-column filtering. By moving to a layout that treats vectors as standard secondary attributes alongside text and columnar data, the engine can execute complex relational queries while querying object storage directly.

This architectural shift mirrors database history: specialized engines often get subsumed into unified storage systems once access patterns mature.

Secondary vector indices on decoupled storage are replacing standalone vector databases across production infrastructure.
