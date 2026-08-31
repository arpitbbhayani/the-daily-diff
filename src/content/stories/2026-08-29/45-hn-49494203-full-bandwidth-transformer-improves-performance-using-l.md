---
title: Full-bandwidth transformer improves performance using latent feedback
source: hn
url: https://arxiv.org/abs/2608.08888
date: '2026-08-29'
tags:
- autoregressive-transformers
- catchup
- hn
- language-modeling
- latent-feedback
- model-pretraining
- transformer-architecture
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49494203'
comments: https://news.ycombinator.com/item?id=49494203
why_read: This paper introduces the full-bandwidth transformer, a novel architecture
  that enhances transformer performance by incorporating latent feedback. Readers
  will learn how this approach improves language model evaluations and generation
  tasks while maintaining architectural compatibility.
authors:
- Xi Wang
- Ziyang Cai
- Zheng Zhan
- Harry Dong
- Ying Fan
- Gustavo de Rosa
- Tim Pearce
- John Langford
---

A crucial bottleneck in autoregressive transformers has been the narrow vertical feedback channel during decoding. Traditional methods discard the top-layer hidden state, letting only the sampled token re-enter the stack.

New research introduces the "full-bandwidth transformer" using latent feedback, which fuses the previous top-layer hidden state with the sampled token. This significantly widens the feedback channel, allowing non-verbalized computation to re-enter with a renewed depth budget.

This architectural shift leads to impressive gains: 1B-parameter models match standard transformers trained with roughly 1.5x more tokens, improving validation loss, language modeling, and even math/coding generation, all with negligible decoding overhead. This is a big step for efficient, higher-performing LLMs in agentic AI.
