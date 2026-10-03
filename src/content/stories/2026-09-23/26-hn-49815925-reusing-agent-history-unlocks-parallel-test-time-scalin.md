---
title: Reusing agent history unlocks parallel test-time scaling
source: hn
url: https://blog.doubleword.ai/swe-bench-pro-64-deepseek-agents
date: '2026-09-23'
tags:
- catchup
- coding-agents
- hn
- inference-optimization
- kv-cache-reuse
- swe-bench
- test-time-scaling
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49815925'
comments: https://news.ycombinator.com/item?id=49815925
why_read: Learn how optimizing memory reuse across parallel long-horizon agents prevents
  costly recomputation and significantly accelerates multi-agent benchmark performance.
authors:
- Doubleword
---

Running parallel coding agents for hours quickly turns into a memory bottleneck rather than a raw compute problem. When an agent spends several minutes executing tests locally, its cached context in GPU memory is often evicted by other parallel workers. When that agent returns for its next step, the inference engine is forced to recompute the entire prompt history from scratch.

A recent evaluation on SWE-bench Pro with sixty-four parallel agents revealed the magnitude of this problem. Under standard inference configurations, cache thrashing caused agents to complete only ten to twenty-five tasks within a twenty-four hour window on an eight-GPU node. An architecture optimized for persistent agent history cache completed all 731 tasks in just over twenty hours.

This thirty-fold throughput improvement directly boosted task accuracy from 51.2 percent on single attempts to 70.7 percent across parallel runs. Test-time scaling requires treating inference memory as an active operating system cache rather than isolated stateless requests.
