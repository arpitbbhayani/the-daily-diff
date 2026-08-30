---
title: Tencent Hy4 Preview is a Scaled Mixture-of-Experts Model
source: hn
url: https://huggingface.co/tencent/Hy4-preview
date: '2026-08-28'
tags:
- catchup
- hn
- large-language-model
- long-context
- mixture-of-experts
- sparse-attention
- speculative-decoding
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49483563'
comments: https://news.ycombinator.com/item?id=49483563
why_read: This introduces Tencent's new Hy4 preview, a flagship Mixture-of-Experts
  model. Readers will learn about its innovative architecture, including sparse attention,
  identity hyper-connections, and massive scaling.
authors:
- JonSchneider
---

Tencent just dropped Hy4 preview, a colossal 770B parameter Mixture-of-Experts (MoE) model that signals a new frontier in LLM design. This is not just another large model; it is packed with architectural innovations.

It boasts a remarkable 1M token context length, achieved through advanced techniques like Gated DeepSeek Sparse Attention and iHC (identity Hyper-Connections). Each token activates 8 routed experts plus a shared one, indicating a sophisticated approach to efficiency and capability.

For anyone building LLM infrastructure or developing applied AI solutions, understanding these underpinnings is crucial. The deployment mentions of vLLM and SGLang also highlight the practical engineering considerations for bringing such large models to production. This is a clear step forward in what is possible with large language models. Pay attention to how these architectural choices push the boundaries of performance and scalability.
