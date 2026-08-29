---
authors:
- TechTechTech
comments: https://news.ycombinator.com/item?id=49463650
date: '2026-08-27'
depth_score: 7
hn_id: '49463650'
image: /infographics/40-hn-49463650.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- context-window
- hn
- local-model-execution
- mixture-of-experts
- model-quantization
- multimodal-model
- qwen3-8-flash-next
- ram-inference
- unsloth-desktop
title: Qwen3.8-Flash-Next runs locally on devices with 75GB RAM
url: https://unsloth.ai/docs/models/qwen3.8-next
utility_score: 8
why_read: This document introduces Qwen3.8-Flash-Next, a powerful new multimodal model
  that can run locally on devices with 75GB RAM, even without GPU VRAM. Readers will
  learn about its unique architecture, performance, and the hardware requirements
  for local deployment.
---

Running large language models locally often means grappling with massive GPU VRAM requirements. However, Qwen3.8-Flash-Next, a 125B parameter MoE model, shatters this expectation.

It can run locally on devices with just 75GB of system RAM, completely bypassing dedicated GPU VRAM. This is made possible by its unique Qwen4 architecture, specifically its Ngram and Per-Layer Embeddings (PLE) layers, which optimize quantization without significant accuracy loss. For context, this 1-bit quantized version retains 80 percent top-1 accuracy while being 79 percent smaller than its BF16 counterpart.

This advancement makes powerful multimodal LLMs like Qwen3.8-Flash-Next accessible for local development and experimentation on systems like Macs or NVIDIA DGX Spark, where unified memory or large RAM capacities are available. It is a game-changer for local LLM infrastructure.