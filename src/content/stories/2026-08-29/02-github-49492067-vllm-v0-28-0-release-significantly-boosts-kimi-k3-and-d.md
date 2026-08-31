---
title: vLLM v0.28.0 release significantly boosts Kimi-K3 and DeepSeek V4 performance
source: github
url: https://github.com/vllm-project/vllm/releases/tag/v0.28.0
date: '2026-08-29'
tags:
- catchup
- deepseek-v4
- github
- kimi-k3
- performance-optimization
- rocm
- speculative-decoding
- vllm
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49492067'
comments: https://news.ycombinator.com/item?id=49492067
why_read: Readers will learn about the significant performance enhancements introduced
  in vLLM v0.28.0, specifically optimizations for Kimi-K3 and DeepSeek V4 models.
  It details advances in speculative decoding and various kernel-level speedups.
authors:
- khluu
---

The vLLM v0.28.0 release notes are packed with critical optimizations for LLM inference, showcasing the cutting edge of serving infrastructure. It highlights major performance pushes for Kimi-K3 and DeepSeek V4 models, including advanced techniques like Decode Context Parallel and fused FlashKDA decode and prefill kernels.

These are not just minor tweaks; we are talking about kernel-level speedups (1.5-3x for combined all-gathers) and significant memory savings (17 GiB per GPU for shared-expert sharding). The adaptive speculative token budget alone offers about 60 percent better DSpark TTFT, directly impacting user experience.

For any engineer dealing with the cost and latency of large language model deployment, these granular details on speculative decoding, hardware enablement (ROCm!), and specialized kernel optimizations are gold. This is how you genuinely scale LLM inference in production.
