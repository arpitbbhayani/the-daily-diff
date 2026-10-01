---
title: GPU memory bandwidth limits LLM decoding across concurrent prompts
source: hn
url: https://muhammadraza.me/2026/what-happens-inside-an-llm-server/
date: '2026-09-30'
tags:
- batching
- catchup
- gpu-memory-bandwidth
- hn
- kv-cache
- llm-inference
- prefill-vs-decode
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49910406'
comments: https://news.ycombinator.com/item?id=49910406
why_read: Understand the mechanistic limits of LLM serving, specifically how GPU memory
  bandwidth and KV cache govern batch performance during prefill and decode phases.
authors:
- mr_o47
---

When multiple users send prompts to an LLM server simultaneously, the GPU does not simply divide its computational throughput evenly. A single user might get sixty tokens per second, but ten concurrent users will not drop your throughput to six tokens per second each.

The reason lies in the fundamental distinction between the prefill and decode stages. Prefill processes the entire prompt in one parallel forward pass, keeping tensor cores saturated. In contrast, token generation during decode is sequential and strictly memory bandwidth-bound. The GPU must stream all model weights from High Bandwidth Memory into registers for every single generated token.

Because reading the model weights from VRAM is the primary bottleneck during decode, computing the next token for ten parallel requests costs almost the same memory bandwidth overhead as computing it for one. The real wall you hit is the memory footprint of the Key-Value cache.

Scaling LLM infrastructure requires treating memory bandwidth and context cache allocation as first-class constraints rather than raw FLOPs.
