---
title: Recurrent Looped Transformer enables unbounded temporal depth
source: hn
url: https://yifanzhang-pro.github.io/recurrent-looped-tranformer/
date: '2026-09-13'
tags:
- catchup
- causal-encoder
- complete-state-transition
- hn
- latent-reasoning
- model-hardware-co-design
- model-rl-co-design
- recurrent-decoder
- recurrent-looped-transformer
- sliding-window-attention
- temporal-depth
section: ai
interest_score: 8
depth_score: 9
utility_score: 6
novelty_score: 9
hn_id: '49678548'
comments: https://news.ycombinator.com/item?id=49678548
why_read: This text introduces the Recurrent Looped Transformer architecture, explaining
  how it combines an encoder and recurrent decoder for unbounded temporal depth. Readers
  will understand its design principles for reasoning, hardware, and RL integration.
authors:
- Yifan Zhang
---

A new architecture, the Recurrent Looped Transformer (RLT), aims to tackle one of the biggest challenges in LLMs: unbounded temporal depth and continuous latent reasoning. This is not just an incremental tweak to Transformers.

RLT uniquely combines a causal encoder with a recurrent decoder, passing the final hidden state and a layer-wise sliding-window attention cache across tokens. This design enables a continuous latent computation that extends as the sequence grows, promising deeper, more persistent reasoning.

It is also a holistic approach, considering model-hardware and model-RL algorithm co-design from the outset. For senior engineers building next-generation AI systems, understanding these foundational shifts in architecture is crucial for anticipating future capabilities and constraints.
