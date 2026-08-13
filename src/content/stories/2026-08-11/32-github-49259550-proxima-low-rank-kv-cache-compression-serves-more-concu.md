---
title: Proxima low-rank KV cache compression serves more concurrent GPU requests
source: github
url: https://github.com/Tenosra/Proxima
date: '2026-08-11'
tags:
- catchup
- concurrent-requests
- github
- gpu-memory
- kv-cache-compression
- low-rank-projection
- paged-attention
- star-kv
- vllm
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49259550'
comments: https://news.ycombinator.com/item?id=49259550
why_read: This project introduces Proxima, an out-of-tree vLLM plugin, implementing
  STAR-KV low-rank KV cache compression. Readers will learn how this technique significantly
  increases the number of concurrent requests and context length that GPUs can handle
  for large language models.
authors:
- Bhatnagar
---

Scaling LLM inference remains a massive challenge, but what if you could serve 4x more requests on your existing GPU hardware? Proxima offers a compelling answer by implementing STAR-KV, a low-rank KV cache compression technique, as an out-of-tree vLLM plugin.

This is not a minor tweak. By replacing full-dimension key/value caches with calibrated, low-rank projections and leveraging dedicated Triton kernels, Proxima enables significantly denser memory packing. This translates directly to serving more concurrent requests, even handling longer contexts where vanilla vLLM fails to boot. The practical implications for cost-effective LLM deployment are profound. You are getting serious throughput gains without needing to upgrade your hardware.

This shows that innovative systems-level optimizations, rather than just bigger models, are key to unlocking the next wave of applied AI at scale.
