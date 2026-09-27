---
title: Reusing agent execution history unlocks parallel test-time scaling
source: hn
url: https://blog.doubleword.ai/swe-bench-pro-64-deepseek-agents
date: '2026-09-24'
tags:
- catchup
- coding-agents
- hn
- inference-optimization
- kv-cache-reuse
- swe-bench-pro
- test-time-scaling
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49831159'
comments: https://news.ycombinator.com/item?id=49831159
why_read: Read this to understand how managing memory contention and KV cache reuse
  enables massive parallel test-time scaling for long-horizon coding agents.
authors:
- ibobev
image: /infographics/02-hn-49831159.jpg
---

Long-horizon coding agents spend most of their inference budget re-evaluating context history. When dozens of agents execute in parallel, their growing conversational traces compete for KV cache memory, causing servers to constantly evict and recompute identical prompt prefixes.

Benchmarking 64 independent agents running DeepSeek models across 731 SWE-bench Pro tasks on an 8xB300 node revealed that baseline inference engines completed only 10 to 24 tasks per agent in 24 hours. The primary bottleneck was not compute saturation, but memory thrashing in the KV cache as agents interleaved tool execution.

By implementing an inference architecture that preserves long-horizon prefix caches across asynchronous tool steps, Doubleword allowed all 64 agents to finish their full 731-problem workloads in under 21 hours. Aggregating attempts across agents boosted final benchmark resolution from 51.2 percent to 70.7 percent.

Scaling agentic reasoning requires optimizing memory reuse in the inference engine just as much as improving model capabilities.
