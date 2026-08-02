---
authors:
- Z Lab
- Modal
- SGLang Teams
comments: https://news.ycombinator.com/item?id=49116159
date: '2026-07-30'
depth_score: 8
hn_id: '49116159'
image: /infographics/116-hn-49116159-dflash-and-spec-v2-achieve-state-of-the-art-llm-inferen.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- catchup
- dflash
- hn
- latency
- llm-inference
- sglang
- spec-v2
- speculative-decoding
- throughput
title: DFlash and Spec V2 achieve state-of-the-art LLM inference latency
url: https://www.lmsys.org/blog/2026-06-15-next-generation-speculative-decoding-dflash-v2/
utility_score: 8
why_read: This article introduces DFlash and Spec V2, a new speculative decoding approach
  that significantly boosts LLM inference throughput and reduces latency. Readers
  will learn about its performance benefits and how to implement it using SGLang.
---

LLM inference just got a massive speed boost with DFlash and Spec V2, pushing throughput by over 4.3x compared to baseline models. This is not just incremental; it changes the game for production LLM serving. 

The secret lies in parallel drafting with KV injection and sophisticated overlap scheduling. These techniques enable more efficient token generation by predicting future tokens and managing the KV cache far more intelligently, drastically reducing host overhead.

For any engineer grappling with LLM serving latency, understanding these advancements is crucial. You can integrate these optimizations into your SGLang deployments today and realize immediate, substantial performance gains.