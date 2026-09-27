---
title: ScyllaDB integration optimizes Feast feature and vector serving
source: hn
url: https://feast.dev/blog/scylladb-feast-online-store/
date: '2026-09-25'
tags:
- catchup
- database-integration
- feast
- feature-store
- hn
- online-store
- performance-optimization
- scylladb
- vector-search
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49844548'
comments: https://news.ycombinator.com/item?id=49844548
why_read: This post explains the new, tighter integration between Feast and ScyllaDB,
  offering significant performance improvements and vector embedding support. Readers
  will understand why ScyllaDB is a suitable online store for large-scale feature
  store workloads and how to configure it.
authors:
- tzach
---

Scaling ML feature stores often leads to unexpected costs and performance bottlenecks. The new, optimized Feast and ScyllaDB integration specifically targets these challenges, offering a significant leap forward.

Prior integrations through Cassandra drivers overlooked ScyllaDB's shard-awareness, a critical factor for peak performance. This new connector leverages a shard-aware Python driver, ensuring data is routed directly to the correct shard without intermediate hops, cutting latency significantly. It also fully supports Feast's vector database API, enabling efficient vector embedding storage and retrieval for modern AI applications.

This is not just an incremental update; it is a fundamental re-engineering of the data path to ensure your online feature store can truly scale economically, hitting 200K+ ops/sec at single-digit millisecond P99 latency. Engineers building real-time ML systems need to see how a thoughtful database integration can redefine performance limits.
