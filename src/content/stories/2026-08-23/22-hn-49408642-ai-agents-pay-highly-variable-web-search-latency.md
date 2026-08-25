---
title: AI agents pay highly variable web search latency
source: hn
url: https://telem.ai/blog/latency-research
date: '2026-08-23'
tags:
- ai-agents
- catchup
- deep-search
- hn
- llm-snippet-generation
- tail-latency
- web-search-latency
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49408642'
comments: https://news.ycombinator.com/item?id=49408642
why_read: This article explains why the actual web search latency paid by AI agents
  is often significantly higher and more variable than published benchmarks, detailing
  the impact of caching, tail latency, and LLM-based snippet generation.
authors:
- TelemAI Research
---

The true web search latency for AI agents is often far higher than advertised API numbers. You might see a provider quote 100ms, but empirical data shows that cached queries can be 37 times faster than un-cached ones, meaning average metrics hide massive variability.

Pay close attention to p95 latency: a provider that looks fast at the median (p50) can be dramatically slower at the tail, making your multi-step agents grind to a halt when they must wait for every sub-query. Some search APIs also secretly run LLMs to generate "snippets," adding 5x latency and 2.4x cost without providing a proportional benefit.

Understanding these hidden costs and architectural implications is crucial for building performant and cost-effective AI agents that actually work in production.
