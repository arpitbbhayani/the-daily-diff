---
authors:
- flurly
comments: https://news.ycombinator.com/item?id=49036402
date: '2026-07-24'
depth_score: 8
hn_id: '49036402'
image: /infographics/93-hn-49036402.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- cache-invalidation
- cache-stampede
- catchup
- hn
- request-coalescing
- simulation
- stale-while-revalidate
- ttl-jitter
title: Cache Stampede Lab Simulates Expiry Strategies Against Origin Overload
url: https://github.com/telemetry-sh/cache-stampede-lab
utility_score: 9
why_read: This project provides a Go simulator to observe how various cache invalidation
  strategies perform against cache stampedes and origin overload. Readers will learn
  the distinct impacts of TTL jitter, request coalescing, and stale-while-revalidate
  through concrete simulation data.
---

Cache stampedes are a silent killer for many distributed systems, often leading to cascading failures and overloaded origins. This Go simulator offers a deterministic way to deeply understand and mitigate these critical issues.

It starkly compares common advice like TTL jitter against more robust solutions like request coalescing (singleflight) and stale-while-revalidate. The findings are not just theoretical; they show concrete impacts on p99 latencies, timeouts, and origin queue behavior.

This is a powerful tool for any engineer designing or troubleshooting high-traffic systems. You will gain clarity on why seemingly simple caching advice sometimes falls short and how to choose the right strategy for resilience.