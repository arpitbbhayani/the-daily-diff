---
title: Managing heavy-tailed memory traces optimizes long-horizon language agents
source: hn
url: https://redreamality.com/blog/ctwm-heavy-tailed-memory-traces-long-horizon-agents/
date: '2026-10-04'
tags:
- catchup
- core-tail-world-model
- heavy-tailed-memory
- hn
- long-horizon-agents
- memory-retrieval
- resource-allocation
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49955466'
comments: https://news.ycombinator.com/item?id=49955466
why_read: This analysis explains how memory access concentration creates error-prone
  long tails in language agents and introduces CTWM to control prompt budgets by rank.
  Readers will gain a clear diagnostic framework to optimize agent memory beyond simple
  success metrics and token costs.
authors:
- Xinyuan Song
- Zekun Cai
---

Most agent memory benchmarks track only task success and token consumption. This creates a blind spot: under repeated retrieval, memory access concentrates heavily on a core set of hubs while rare, critical states drift into a neglected tail where prediction errors compound.

Evaluating long-horizon agents requires treating memory not as a passive ledger, but as an active resource allocation mechanism. When the context window is finite, naive vector retrieval or graph lookups over-index on frequently accessed nodes at the expense of sparse edge cases.

The Core-Tail World Model (CTWM) framework addresses this imbalance directly. Instead of discarding older context or maintaining uniform weights, it uses access trace statistics to allocate prompt budgets by rank, parameterizing concentration with a single exponent and preserving summarized tail information.

Controlling the statistical shape of retrieval traces provides a predictable knob for prompt budgets while keeping long-tail context intact across extended execution horizons.
