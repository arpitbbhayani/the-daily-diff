---
title: Cloudflare saves 100TB of RAM by shrinking DNS cache
source: hn
url: https://www.tomshardware.com/tech-industry/big-tech/cloudflare-frees-100tb-of-ram-by-shrinking-dns-cache-entries
date: '2026-08-28'
tags:
- cache-optimization
- catchup
- cloudflare
- dns
- hn
- memory-savings
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49478712'
comments: https://news.ycombinator.com/item?id=49478712
why_read: Read to understand how micro-optimizations, like shrinking DNS cache entries
  by a single byte, can yield terabytes of memory savings in massive, distributed
  systems like Cloudflare's 1.1.1.1.
authors:
- sbulaev
---

Imagine saving 100TB of RAM. Cloudflare achieved this colossal feat by minifying DNS cache entries for their 1.1.1.1 resolver. When you operate at the scale of 250 billion cached DNS entries at any given moment, even one wasted byte translates to 250GB of memory gone.

This is a masterclass in extreme system optimization. It highlights that at the bleeding edge, performance gains are often found in the tiniest details: re-evaluating data structures, memory layouts, and cache efficiency. It is not about adding more hardware; it is about making existing hardware work smarter, drastically reducing operational costs and improving latency.

This example underscores the power of fundamental computer science principles applied rigorously to distributed systems. Every byte counts.
