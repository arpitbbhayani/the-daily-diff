---
title: Hunting a delayed deadlock in Namespace's tiered Bazel cache
source: hn
url: https://namespace.so/blog/hunting-a-two-year-old-deadlock
date: '2026-08-20'
tags:
- action-cache
- bazel-cache
- catchup
- content-addressable-store
- deadlock
- distributed-object-storage
- hn
- performance-regression
- remote-build-execution
- tail-latency
- tiered-storage
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49375794'
comments: https://news.ycombinator.com/item?id=49375794
why_read: This article details how Namespace engineered a solution to a two-year-old
  deadlock, offering insights into complex bug hunting in distributed systems and
  tiered caching architectures.
authors:
- guergabo
---

Finding a two-year-old dormant deadlock in a production system is the stuff of engineering legends, and Namespace just shared the epic tale. This was not a simple bug, but one hiding in the subtle interactions of a tiered Bazel cache's asynchronous upload path.

The team detailed how their build cache, designed with local disk for hot data and object storage for warm data, developed a critical race condition. Asynchronous uploads to object storage, meant to improve performance, ended up creating a delayed deadlock that only manifested under specific load patterns.

This article offers a masterclass in distributed systems debugging, showcasing how deep understanding of concurrency, storage tiers, and thread-dump analysis are crucial for maintaining high-performance build infrastructure. A must-read for anyone building or maintaining complex distributed services.
