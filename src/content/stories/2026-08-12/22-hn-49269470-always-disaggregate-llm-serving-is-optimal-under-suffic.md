---
title: Always disaggregate LLM serving is optimal under sufficient load
source: hn
url: https://blog.doubleword.ai/when-to-disaggregate
date: '2026-08-12'
tags:
- catchup
- decode
- disaggregated-llm-serving
- hn
- inference-optimization
- kv-cache
- prefill
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49269470'
comments: https://news.ycombinator.com/item?id=49269470
why_read: This text makes a strong case for why disaggregated LLM serving should always
  be used in practice with sufficient load. Readers will understand its mechanics
  and how it optimizes inference compared to other scheduling techniques like temporal
  or chunked prefill.
authors:
- somnial
---

Disaggregated LLM serving is not just an optimization; it is a fundamental architectural choice you should be making for production systems. By splitting prefill and decode onto separate GPU pools, you can achieve independent control over Time-To-First-Token and Time-Per-Output-Token.

This approach moves beyond traditional temporal disaggregation or chunked prefill, where batching conflicts create tail latencies. Disaggregation ensures that long prefill operations for new requests do not block the rapid token generation for existing requests, dramatically improving user experience at scale.

For senior engineers building and optimizing AI infrastructure, understanding the mechanics of KV cache transfer and the strategic benefits of this split architecture is crucial. This is not about marginal gains; it is about fundamentally rethinking your LLM inference pipeline.
