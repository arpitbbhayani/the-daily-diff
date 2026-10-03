---
title: Continuous latent states eliminate discrete token bottlenecks in reasoning
source: hn
url: https://www.g-ftech.com/blog/latent-grpo-deep-dive
date: '2026-09-23'
tags:
- catchup
- chain-of-thought
- continuous-thought-vectors
- hn
- latent-grpo
- reinforcement-learning
- token-tax
section: ai
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
hn_id: '49823444'
comments: https://news.ycombinator.com/item?id=49823444
why_read: This article explains how shifting from discrete text tokens to continuous
  latent representations eliminates the massive computational tax of standard chain-of-thought
  reasoning.
authors:
- g factor
image: /infographics/02-hn-49823444.jpg
---

Forcing models to articulate intermediate reasoning in English tokens creates a massive compute tax. During reinforcement learning post-training, intermediate thought chains consume up to 90 percent of generation time, exhaust KV caches, and frequently cause rollout truncations that poison gradient updates.

Latent-GRPO addresses this bottleneck by replacing discrete vocabulary tokens with continuous recurrent thought vectors inside the embedding manifold. The model reasons through internal continuous representations rather than projecting through a sixty-four-layer vocabulary bottleneck at every intermediate step.

This continuous approach keeps gradient flow stable while avoiding arbitrary rollout cutoff penalties. It allows models to execute dense multi-step reasoning in complex domains without exhausting context limits or ballooning infrastructure costs.

Decoupling internal model reasoning from natural language generation is the next major step in scalable post-training architecture.
