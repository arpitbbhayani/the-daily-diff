---
title: HySparse2 reduces prefill cost and key-value cache size
source: hn
url: https://twitter.com/_LuoFuli/status/2102766365190901957
date: '2026-09-23'
tags:
- agentic-inference
- catchup
- hn
- hysparse2
- kv-cache
- long-context-retrieval
- mimo-v3
- sparse-attention
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49821132'
comments: https://news.ycombinator.com/item?id=49821132
why_read: Understand how the HySparse2 architecture reduces prefill FLOPs and KV-cache
  memory overhead while improving long-context retrieval in agentic workloads. You
  will learn the exact mechanics of dual-level key-value sharing and token selection.
authors:
- Fuli Luo
---

Agentic LLM workloads place an unusual burden on inference infrastructure because short tool calls repeatedly trigger long observation prefill cycles. HySparse2 addresses this bottleneck directly by rethinking KV cache allocation and attention mechanisms for agent loops.

The architecture combines two levels of key-value sharing: KV Bridging across decoder layers and KV Reuse across hybrid attention blocks. Because cross-decoder layers source their keys and values directly from self-decoder states, prefill computation can terminate significantly earlier in the execution cycle.

In benchmarks at one million tokens, this architecture yields a 5.02 times reduction in prefill FLOPs alongside a 4.5 times smaller KV cache footprint. It replaces traditional block-level sparsity with token-level selection and forces a recent window so local and global tokens share a single unified cache.

Tailoring attention mechanics to the exact dynamics of agent tool loops delivers massive efficiency gains without degrading long-context retrieval accuracy.
