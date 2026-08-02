---
authors:
- Philpax
comments: https://news.ycombinator.com/item?id=49113099
date: '2026-07-30'
depth_score: 8
hn_id: '49113099'
image: /infographics/45-hn-49113099.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- agentic-systems
- catchup
- decoder-only-transformer
- hn
- multimodal-model
- open-weights
- rag
- sparse-moe
title: Inkling-Small is a multimodal model using a sparse MoE architecture
url: https://huggingface.co/thinkingmachines/Inkling-Small
utility_score: 9
why_read: This document introduces Inkling-Small, a general-purpose multimodal AI
  model with a unique sparse Mixture-of-Experts architecture. Developers will learn
  about its capabilities, input modalities, and potential applications for building
  AI-powered systems.
---

A new 276-billion-parameter multimodal LLM, Inkling-Small, has just been released with open weights, making waves for its potential in agentic AI and coding assistance. This is a game-changer for engineers building advanced AI applications.

Inkling-Small uses a sparse Mixture-of-Experts (MoE) transformer architecture, routing tokens to 6 of 256 experts, plus 2 shared experts. It handles text, image, and audio inputs natively, projecting all modalities into a shared hidden space. This unified approach simplifies multimodal processing considerably.

Crucially, it is designed for local deployment and supports popular open-source libraries like SGLang, vLLM, and Hugging Face. This means you can integrate a sophisticated multimodal agent into your own infrastructure without relying solely on API providers.

This is not just another model; it is an infrastructure enabler for the next generation of AI agents.