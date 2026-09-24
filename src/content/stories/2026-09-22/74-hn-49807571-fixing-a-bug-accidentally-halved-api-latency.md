---
title: Fixing a bug accidentally halved API latency
source: hn
url: https://blog.koodos.com/p/the-edge-of-glory
date: '2026-09-22'
tags:
- api-latency
- bug-fix
- catchup
- cloudflare-workers
- edge-compute
- hn
- performance-optimization
section: systems
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49807571'
comments: https://news.ycombinator.com/item?id=49807571
why_read: This article explains how a configuration change for an edge compute service,
  intended to fix a bug, unexpectedly halved API latency. Readers will learn about
  the complexities of optimizing distributed systems and the importance of understanding
  data flow.
authors:
- Apurva Chitnis
---

Thinking edge compute always means lower latency? Not always. One engineering team discovered that deploying Cloudflare Workers at the edge actually doubled their API latency.

The culprit? Their edge functions were making repeated calls to a centralized database in a single region. The distributed compute added network hops, negating any "edge" advantage and turning it into a performance bottleneck.

The fix was counter-intuitive but effective: centralize the compute with the database. This reduced latency by half, showing that co-location is key when your compute is database-bound, despite the allure of global distribution.
