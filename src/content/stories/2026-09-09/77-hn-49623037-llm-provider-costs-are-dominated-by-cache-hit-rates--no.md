---
authors:
- Olaf Dsouza
comments: https://news.ycombinator.com/item?id=49623037
date: '2026-09-09'
depth_score: 7
hn_id: '49623037'
image: /infographics/77-hn-49623037.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- agentic ai
- caching
- catchup
- cost optimization
- deepseek
- hn
- llm inference
- openrouter
- performance benchmarking
- token pricing
title: LLM Provider Costs Are Dominated by Cache Hit Rates, Not Token Price
url: https://olafdsouza.com/blog/your-inference-provider-sucks-at-caching
utility_score: 9
why_read: This article exposes why token prices alone are misleading for LLM provider
  costs, demonstrating how caching profoundly impacts actual expenses for agentic
  AI workloads. Readers will learn to critically evaluate LLM provider economics beyond
  quoted token prices.
---

Thinking all LLM inference providers charge based purely on token price? Think again. A recent benchmark reveals that cache hit rates are the true determinant of cost for agentic workloads, with practical expenses varying by over 17x for the same model.

DeepSeek's official provider, despite ranking 21st by token price, was the second cheapest in practice, demonstrating the profound impact of caching on agent-heavy sessions. This is a critical finding for anyone optimizing LLM infrastructure.

You need to benchmark providers based on your actual workload's caching behavior, not just advertised token rates. This changes how you evaluate cost and performance for applied AI.