---
title: Pushing performance limits for DeepSeek-V4-Pro serving
source: hn
url: https://www.lmsys.org/blog/2026-08-19-deepseek-v4-pro-engine-optimization-h20/
date: '2026-08-25'
tags:
- catchup
- decode-optimization
- deepseek-v4-pro
- hardware-optimization
- hn
- llm-serving
- mixture-of-experts
- model-optimization
- parallel-processing
- prefill-optimization
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49437687'
comments: https://news.ycombinator.com/item?id=49437687
why_read: This document details advanced techniques for serving the DeepSeek-V4-Pro
  large language model. Readers will learn about specific hardware and software optimizations
  to achieve high performance in prefill and decode stages.
authors:
- Tianyu Zhang
- Yusong Gao
- Yun Zhang
---

Serving a massive Mixture-of-Experts (MoE) LLM like DeepSeek-V4-Pro at scale requires extreme engineering - it is not just about having big GPUs, but about meticulously optimizing every layer of the serving stack. This blog post breaks down how.

You will learn about specific techniques like using MXFP4AFP8 for weight footprint reduction, Online C128 for KV cache expansion, and the trade-offs between MoE-TP and MoE-EP for prefill. It also covers how to balance compute and communication, accelerate collectives, and tune for real routing shapes.

The evaluation sections offer concrete gains in prefill and decode, detailing performance and capacity trade-offs across different serving profiles. This is a masterclass in LLM infrastructure optimization from the trenches.
