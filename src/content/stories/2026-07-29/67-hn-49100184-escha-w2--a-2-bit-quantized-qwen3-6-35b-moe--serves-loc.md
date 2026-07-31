---
authors:
- Escha Labs Inc.
comments: https://news.ycombinator.com/item?id=49100184
date: '2026-07-29'
depth_score: 8
hn_id: '49100184'
image: /infographics/67-hn-49100184.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- 2-bit-quantization
- catchup
- gpu
- hn
- local-serving
- mixture-of-experts
- openai-api-compatible
- quantized-weights
- qwen3.6-35b-a3b
- sglang-engine
- zml-engine
title: Escha-W2, a 2-bit quantized Qwen3.6-35B MoE, serves locally
url: https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2
utility_score: 9
why_read: Readers will learn about Escha-W2, a 2-bit quantized Mixture-of-Experts
  model, and its technical requirements for local deployment with an OpenAI-compatible
  API.
---

Deploying large language models, especially Mixture-of-Experts (MoE), often feels like a VRAM battle. EschaLabs has just made a compelling leap, releasing a 2-bit quantized Qwen3.6-35B-A3B MoE model that surprisingly retains almost 100 percent FP8 quality. This is not a minor tweak.

This specific 2-bit quantization, applied per expert and mixed with 2/3-bit per projection, slashes the model size to just 12.3 GB. It allows the 35B MoE model, which has 256 experts, to run on a single 24 GB consumer GPU, or even a 16 GB card by trading some concurrency or context.

For anyone building applied AI systems, this is a game-changer for local inference and cost reduction. It demonstrates that significant efficiency gains are still possible without sacrificing model output quality, moving beyond just raw parameter counts to focus on real-world deployment. Expect to learn about concrete hardware constraints and the practicalities of optimized LLM serving.