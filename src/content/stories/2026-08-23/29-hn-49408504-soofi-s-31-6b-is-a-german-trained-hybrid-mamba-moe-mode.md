---
title: Soofi S 31.6B is a German-trained hybrid Mamba-MoE model
source: hn
url: https://kie.ai/blog/what-is-soofi-s-31-6b
date: '2026-08-23'
tags:
- catchup
- hn
- long-context-window
- mamba-moe
- mixture-of-experts
- multilingual-model
- open-weights-model
- pretraining
- soofi-s-31.6b
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49408504'
comments: https://news.ycombinator.com/item?id=49408504
why_read: Read this to understand the specifics of Soofi S 31.6B, a new German-developed
  open-weights model. You will learn about its unique hybrid Mamba-MoE architecture,
  massive pretraining, and multilingual capabilities.
authors:
- pelasaco
---

A new contender has entered the open-weights LLM arena: Soofi S 31.6B. This is not just another large model; it is a meticulously crafted hybrid Mamba-MoE architecture with 31.6 billion total parameters, yet only 3.2 billion are active per token.

What truly sets it apart is the architecture: a blend of Mamba-2 blocks, Mixture-of-Experts blocks, and GQA attention, specifically tuned for German and English. It was trained on an astounding 27 trillion tokens, consuming over 250,000 GPU-hours on NVIDIA B200s.

For engineers evaluating or deploying foundation models, understanding these specifics - from parameter counts to the training compute and architectural choices - is invaluable. It provides a concrete example of how large-scale, specialized LLMs are being built and optimized for specific linguistic contexts.
