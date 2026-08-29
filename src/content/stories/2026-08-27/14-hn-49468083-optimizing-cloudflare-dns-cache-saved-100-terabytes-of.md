---
title: Optimizing Cloudflare DNS cache saved 100 terabytes of memory
source: hn
url: https://blog.cloudflare.com/dns-cache-memory-optimization-1111/
date: '2026-08-27'
tags:
- big-pineapple
- catchup
- cloudflare-1.1.1.1
- dns-cache-optimization
- edns-client-subnet
- hn
- memory-optimization
- performance-improvement
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49468083'
comments: https://news.ycombinator.com/item?id=49468083
why_read: This post details how Cloudflare optimized its 1.1.1.1 DNS cache, achieving
  100 terabytes of memory savings and improved performance. Readers will learn about
  specific technical changes to cache entry storage and their impact on large-scale
  systems.
authors:
- TangerineDream
---

Optimizing a core service like 1.1.1.1 is never simple, but Cloudflare's deep dive into their DNS cache delivered an astonishing 100 terabytes of memory savings across their fleet. They achieved this by making five successive, targeted changes to how cache entries were stored in memory, cutting the per-entry footprint by over 50 percent.

This was not just about saving space; the cache also got faster. Insert throughput rose by 43 percent, and lookup latency dropped by 19 percent, thanks to fewer allocations and better memory locality. It is a masterclass in not trading speed for space.

This case study offers practical lessons in memory optimization, cache design, and system-level performance tuning, detailing specific Rust data structures and the iterative engineering process.

If you are building large-scale distributed systems, this is a blueprint for impactful memory efficiency.
