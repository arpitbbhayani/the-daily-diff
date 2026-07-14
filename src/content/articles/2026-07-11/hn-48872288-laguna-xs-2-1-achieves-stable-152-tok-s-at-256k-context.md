---
title: Laguna XS 2.1 achieves stable 152 tok/s at 256K context
source: hn
url: https://www.lucebox.com/blog/laguna-xs21
date: '2026-07-11'
tags:
- catchup
- hn
- kv-cache-optimization
- llm-inference
- long-context
- mixture-of-experts
- rtx-3090
- speculative-decoding
score: 18
hn_id: '48872288'
comments: https://news.ycombinator.com/item?id=48872288
why_read: Read this to understand how a 33B LLM can achieve impressive, stable inference
  speeds on consumer hardware across extreme context lengths. It details specific
  optimization techniques like speculative decoding and KV cache management that make
  this possible.
authors:
- Davide Ciffa
author: Davide Ciffa
---

Achieving 152 tokens per second with a 33B LLM at 256K context on a single RTX 3090 is a significant performance breakthrough.

This is not a hypothetical; it is a measured result for Laguna XS 2.1, an MoE model. The key is a combination of three novel optimizations: a DFlash speculative-decoding drafter with a context-KV ring cache, sliding-window ring caches for attention layers, and KVFlash paging.

These optimizations slashed prefill time for 256K tokens from 411 seconds to 67 seconds, maintaining 3,500 tokens per second. Crucially, the speculative decode is lossless, meaning every committed token is identical to what the model would natively produce.

This work showcases how intelligent architectural choices in LLM inference can defy hardware limitations.
