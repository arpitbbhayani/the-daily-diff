---
title: Model harnesses are baked into weights during post-training
source: hn
url: https://future-seems-so-good.com/blog/the-harness-is-in-the-weights
date: '2026-09-28'
tags:
- catchup
- evaluation-harness
- function-calling
- hn
- post-training
- reinforcement-learning
- tool-use
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49878244'
comments: https://news.ycombinator.com/item?id=49878244
why_read: Understand how model tool-calling capabilities are tightly coupled to the
  exact harness formats used during training. Learn why changing tool interfaces impacts
  performance across different LLMs.
authors:
- henriquegodoy
---

Tool calling in modern LLMs is not an abstract interface layer; it is deeply baked into model weights during post-training reinforcement learning. While many developers view harnesses as interchangeable bridges, empirical evidence shows that tool definitions, serialization syntax, and token schemas dictate task execution success.

When models are trained with specialized pseudo-XML formats, Harmony syntax, or grammar-constrained sampling markers, their internal policy optimizes specifically for those exact representations. Swapping an edit harness for a hash-tagged diff tool can jump code generation pass rates dramatically because the model was biased toward specific token structures during training.

Treating the interaction harness as decoupled from model weights leads to fragile agent systems. High-performing agent architectures require matching tool serialization directly to the post-training format the base model was rewarded on.
