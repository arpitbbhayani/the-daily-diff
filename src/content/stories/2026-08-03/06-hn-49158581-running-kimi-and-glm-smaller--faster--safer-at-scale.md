---
authors:
- ascorbic
comments: https://news.ycombinator.com/item?id=49158581
date: '2026-08-03'
depth_score: 8
hn_id: '49158581'
image: /infographics/06-hn-49158581.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- cache-protection
- catchup
- glm
- hn
- inference-optimization
- kimi
- kv-cache-quantization
- model-weight-compression
- sglang
- workers-ai
title: Running Kimi and GLM smaller, faster, safer at scale
url: https://blog.cloudflare.com/smaller-faster-safer-models/
utility_score: 8
why_read: This article details Cloudflare's methods for running large language models
  like Kimi and GLM more efficiently. Readers will learn about KV cache quantization,
  model weight compression, and cache protection for optimized inference.
---

Running long-context Mixture-of-Experts (MoE) LLMs like Kimi and GLM efficiently is a huge challenge due to memory constraints. Cloudflare shares their battle-tested strategies for serving these behemoths at scale on Workers AI.

A critical win comes from quantizing the KV cache to 8-bit floating point (FP8, e4m3), effectively halving its size. This single optimization dramatically increases the context window capacity from 68k to 130k tokens for models like Kimi K2.6, allowing more simultaneous requests on shared hardware.

Beyond KV cache, they also compress model weights and implement smart cache protection mechanisms. These techniques, benchmarked with SGLang, lead to significant cost savings and increased customer support without compromising model accuracy. It is a masterclass in practical LLM infrastructure engineering.

This piece offers deep, actionable insights into optimizing large language model serving.