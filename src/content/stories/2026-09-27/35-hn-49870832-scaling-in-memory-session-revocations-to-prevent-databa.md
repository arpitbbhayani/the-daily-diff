---
title: Scaling in-memory session revocations to prevent database stampedes
source: hn
url: https://www.canva.dev/blog/engineering/session-revocations-at-scale/
date: '2026-09-27'
tags:
- catchup
- database-stampede
- gateway-architecture
- hn
- in-memory-caching
- session-revocation
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49870832'
comments: https://news.ycombinator.com/item?id=49870832
why_read: Learn how Canva handles near real-time session revocations at scale using
  in-memory caching and avoids database bottlenecks during gateway deployments.
authors:
- Llew Vallis
---

Managing authentication for hundreds of millions of active users requires verifying session validity hundreds of thousands of times per second. Querying a centralized database on every incoming request is prohibitively expensive, so Canva caches session revocation lists directly in gateway pod memory.

However, holding twelve hours of revocations in memory introduces a classic distributed systems problem: cache stampedes during rolling deployments. When hundreds of gateway pods deploy simultaneously, each pod queries MySQL for over a million revocation records, threatening to overwhelm the database cluster.

To decouple deployment startup from database capacity, the team restructured cache hydration. Gateway pods do not hammer MySQL on boot; instead, they rely on periodic background refreshes and fallback lookups for session cookie renewals while keeping request verification latency near zero.

Decoupling deployment lifecycle events from relational database reads is essential when scaling high-throughput gateway infrastructure.
