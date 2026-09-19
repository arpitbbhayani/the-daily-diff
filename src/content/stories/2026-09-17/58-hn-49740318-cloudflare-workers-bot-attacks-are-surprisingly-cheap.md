---
title: Cloudflare Workers bot attacks are surprisingly cheap, but related costs are
  high
source: hn
url: https://gfuse.dev/one-hour-of-bots-on-cloudflare-workers
date: '2026-09-17'
tags:
- billing
- bot-attacks
- catchup
- cloudflare-workers
- cost-analysis
- hn
- spending-limits
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49740318'
comments: https://news.ycombinator.com/item?id=49740318
why_read: This article clarifies the actual cost of bot attacks on Cloudflare Workers,
  revealing that the Workers themselves are cheap but associated services can lead
  to high bills. It helps users understand potential financial risks and compare billing
  models across platforms.
authors:
- "Santiago Gasc\xF3n"
---

Cloudflare Workers are often touted for their low cost, but what happens when a bot storm hits or traffic spikes unexpectedly? This deep dive reveals that the real cost of serverless platforms is not just in requests, but in what those requests touch: database reads, external API calls, and memory usage. It is the cascading effects that lead to eye-watering bills.

This analysis provides concrete numbers, breaking down how 18 million requests per hour can trigger massive costs when each Worker interaction also hits an external service. It demonstrates that a platform's lack of spending limits combined with downstream service costs creates a significant financial risk.

This is essential reading for anyone designing serverless architectures. You must understand how to architect for cost control and abuse prevention, looking beyond the primary service's billing to the entire system footprint. Ignorance here can be incredibly expensive.
