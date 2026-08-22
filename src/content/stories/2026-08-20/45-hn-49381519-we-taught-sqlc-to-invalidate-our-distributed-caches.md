---
title: We Taught sqlc to Invalidate Our Distributed Caches
source: hn
url: https://blog.exe.dev/we-taught-sqlc-to-invalidate-our-caches
date: '2026-08-20'
tags:
- cache-invalidation
- catchup
- database-access
- distributed-systems
- hn
- proxy-server
- sqlc
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49381519'
comments: https://news.ycombinator.com/item?id=49381519
why_read: This post explains a real-world problem of cache invalidation in a distributed
  proxy system. Readers will learn how `sqlc` was leveraged to automatically handle
  cache invalidation for database-driven routing information.
authors:
- bryanmikaelian
---

Cache invalidation remains one of the hardest problems in computer science. This article provides a deep dive into how exe.dev tackled it for their globally distributed proxy services using `sqlc`. The challenge was to keep routing information fresh across many proxies without a centralized bottleneck or replicating the entire database.

They did not just implement a cache; they implemented smart invalidation. By extending `sqlc` to generate type-safe database access functions, they could also trigger cache updates reliably. This ensures that when data changes in the central database, relevant proxies are quickly informed to update their local caches, minimizing stale data issues.

This is a masterclass in applying practical engineering to a classic distributed systems problem. It demonstrates how to achieve high availability and performance in a distributed environment, offering a blueprint for anyone dealing with similar caching challenges.
