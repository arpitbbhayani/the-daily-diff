---
title: Adaptive routers balance open-weight model cost and latency
source: hn
url: https://getunblocked.com/blog/adaptive-routing-inference-providers/
date: '2026-09-29'
tags:
- adaptive-routing
- catchup
- cost-optimization
- hn
- llm-inference
- open-weight-models
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49897322'
comments: https://news.ycombinator.com/item?id=49897322
why_read: Learn how to build an automated adaptive router for LLM inference that dynamically
  shifts traffic across providers based on live cost, latency, and reliability metrics.
authors:
- Peter Werry
image: /infographics/09-hn-49897322.jpg
---

Serving open-weight models across multiple inference hosts reveals massive disparities in pricing, latency, and reliability. Naive round-robin routing guarantees that you overpay on slower providers while remaining vulnerable to sudden outages.

A resilient architecture borrows directly from TCP congestion control principles. By continuously measuring token generation speed, error rates, and cost per million tokens in production, an adaptive router can funnel the majority of traffic to the cheapest healthy endpoint while throttling providers that experience latency spikes or degraded performance.

Automating provider selection eliminates manual failover maintenance and consistently trims infrastructure spend without sacrificing request SLAs.

Treating LLM inference providers like dynamic network links is the only scalable way to manage open-weight workloads in production.
