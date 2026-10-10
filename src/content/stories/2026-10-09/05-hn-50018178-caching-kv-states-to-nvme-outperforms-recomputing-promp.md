---
title: Caching KV states to NVMe outperforms recomputing prompt contexts
source: hn
url: https://huggingface.co/papers/2610.10845
date: '2026-10-09'
tags:
- catchup
- gpu-memory
- hn
- kv-cache
- long-context
- nvme-storage
- vllm
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50018178'
comments: https://news.ycombinator.com/item?id=50018178
why_read: Learn how offloading KV cache blocks to local NVMe storage can slash GPU
  energy use and inference latency over massive context windows without needing prompt
  recomputation.
authors:
- Sietse Schelpe
image: /infographics/05-hn-50018178.jpg
---

Recomputing key-value activations across multi-million token context windows is prohibitively expensive in both GPU time and power. Instead of keeping massive context in high-bandwidth memory or running repeated prompt prefill passes, offloading key-value blocks directly to local NVMe storage provides a viable alternative.

Recent benchmarks on vLLM serving twelve-billion and thirty-one-billion parameter models across fifty million tokens show that saving sixteen-thousand token key-value blocks to encrypted NVMe storage cuts retrieval latency significantly. Loading precomputed blocks from NVMe proved between 2.8 and 4.3 times faster than recomputing attention states, while slashing GPU energy consumption by up to twelvefold. GPU memory utilization remained completely flat throughout the entire fifty-million token stream.

Retrieval accuracy remained remarkably robust across millions of tokens, hitting ninety-eight percent precision on targeted fact probes with the larger model without hallucinations.

Treating persistent solid-state storage as a first-class tier for model activations changes the economics of ultra-long context serving.
