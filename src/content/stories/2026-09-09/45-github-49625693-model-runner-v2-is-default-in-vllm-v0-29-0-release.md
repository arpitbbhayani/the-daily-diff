---
title: Model Runner V2 is default in vLLM v0.29.0 release
source: github
url: https://github.com/vllm-project/vllm/releases/tag/v0.29.0
date: '2026-09-09'
tags:
- batch-sharded-sampling
- catchup
- cuda-graph
- github
- kv-cache
- large-language-models
- model-runner-v2
- vllm
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49625693'
comments: https://news.ycombinator.com/item?id=49625693
why_read: Read this to understand the significant performance and feature enhancements
  in vLLM's v0.29.0 release, particularly the full rollout of Model Runner V2 and
  new model support.
authors:
- khluu
---

Running large language models efficiently is a constant battle for resources. The latest vLLM v0.29.0 release makes Model Runner V2 the default, bringing critical performance enhancements that directly impact your GPU utilization and inference costs.

Key improvements include CUDA graph memory profiling for KV cache auto-sizing and batch-sharded sampling, which notably cuts per-step logits memory by 1/TP. This is not just an incremental update; these are deep optimizations for LLM serving at scale.

Engineers deploying LLMs will find this highly actionable for maximizing throughput and minimizing infrastructure spend. The technical details around prompt embeds and speculation also signal a more robust and flexible serving architecture for diverse LLM workloads.

This update delivers substantial gains for production LLM inference.
