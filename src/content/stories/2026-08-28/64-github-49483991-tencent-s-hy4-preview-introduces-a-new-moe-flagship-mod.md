---
authors:
- Tencent Hy Team
comments: https://news.ycombinator.com/item?id=49483991
date: '2026-08-28'
depth_score: 8
hn_id: '49483991'
image: /infographics/64-github-49483991.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- catchup
- gated-deepseek-sparse-attention
- github
- identity-hyper-connections
- large-language-model
- mixture-of-experts
- model-architecture
- speculative-decoding
title: Tencent's Hy4 Preview Introduces a New MoE Flagship Model Architecture
url: https://github.com/Tencent-Hunyuan/Hy4-preview
utility_score: 7
why_read: Read this to understand the detailed architecture of Tencent's Hy4 Preview,
  a new Mixture-of-Experts large language model. You will learn about its unique components
  like Gated DeepSeek Sparse Attention and Identity Hyper-Connections.
---

Tencent has unveiled Hy4, a formidable new Mixture-of-Experts (MoE) LLM with 770 billion total parameters, but efficiently activates only 49 billion per token. This design significantly boosts efficiency while maintaining scale.

The model incorporates advanced architectural choices, including Gated DeepSeek Sparse Attention with an IndexCache for cross-layer sparse index reuse. This intelligent attention mechanism optimizes how information is processed within the vast model.

Further enhancements come from the use of identity Hyper-Connections (iHC) in the residual pathway, expanding inter-layer information flow. This allows for richer data exchange between the 78 layers, 77 of which utilize MoE with 256 routed experts and 1 shared expert.

Hy4 represents a substantial step forward in large-scale LLM architecture, showcasing how strategic design choices can lead to powerful yet efficient AI models.