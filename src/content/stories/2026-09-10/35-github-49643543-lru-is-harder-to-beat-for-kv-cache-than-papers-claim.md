---
title: LRU is harder to beat for KV-cache than papers claim
source: github
url: https://github.com/gauravapiscean/agentic-kv-cache
date: '2026-09-10'
tags:
- agentic-llm
- catchup
- github
- kv-cache
- llm-serving
- lru
- prefix-caching
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49643543'
comments: https://news.ycombinator.com/item?id=49643543
why_read: This analysis reveals that LRU is more effective than expected in KV-cache
  for agentic LLMs under real-world capacity pressure. Readers will learn why common
  optimization strategies fail and the true sources of recomputation waste in production.
authors:
- gauravapiscean
---

LRU is significantly harder to outperform in agentic LLM KV-caches than many research papers suggest, according to empirical data from over 68,000 Claude Code sessions. This study reveals that under capacity pressure, most recomputation waste comes from rapid tool-calling loops, not from sessions idling past a TTL.

This finding is crucial for anyone optimizing LLM serving infrastructure. It shifts the focus from managing long-idle sessions to understanding and mitigating the bursty computational patterns driven by agent tool usage. The 5-minute TTL, for instance, never even fired under capacity pressure in these real-world traces.

This data-driven insight directly impacts token usage, cost, and overall efficiency for production-grade LLM systems, particularly those relying on multi-step agents. It is a critical lesson in applied AI.
