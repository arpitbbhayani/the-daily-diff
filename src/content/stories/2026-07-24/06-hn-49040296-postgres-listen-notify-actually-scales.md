---
authors:
- Peter Kraft
comments: https://news.ycombinator.com/item?id=49040296
date: '2026-07-24'
depth_score: 8
hn_id: '49040296'
image: /infographics/06-hn-49040296.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- hn
- optimization
- postgres-listen-notify
- pub-sub
- scalability
- streams
title: Postgres LISTEN/NOTIFY Actually Scales
url: https://www.dbos.dev/blog/postgres-listen-notify-scalability
utility_score: 9
why_read: This article debunks the myth that Postgres LISTEN/NOTIFY does not scale,
  demonstrating how to optimize it for high-performance, low-latency streams and notifications.
---

Postgres LISTEN/NOTIFY has a reputation for not scaling, but this post challenges that widespread belief head-on. It shows how the DBOS team achieved an impressive 60,000 writes per second on a single Postgres server with millisecond-scale latency using optimized LISTEN/NOTIFY streams.

The key insight involves understanding and mitigating the global lock that causes unintuitive performance characteristics. Instead of polling, which scales poorly, they detail an approach that leverages LISTEN/NOTIFY for low-latency, durable notifications and pub/sub.

This is not just theoretical; the article provides concrete steps and architectural decisions. If you are designing real-time features or looking for robust messaging within your database, this changes the game for what you might consider possible with Postgres. It empowers you to build highly responsive systems without external messaging queues for certain use cases.