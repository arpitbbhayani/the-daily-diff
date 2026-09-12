---
title: Next-Gen Transformer Loops Are Not What You Need
source: hn
url: https://zartbot.github.io/blog/model_arch/inception/
date: '2026-09-10'
tags:
- catchup
- chain-of-thought
- hn
- loop-transformer
- recursive-self-improvement
- recursive-transformer
- transformer-architecture
- weight-tying
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49648784'
comments: https://news.ycombinator.com/item?id=49648784
why_read: This article clarifies the distinction between Loop and Recursive Transformers,
  arguing for the latter's superiority, and explores its connection to Chain of Thought
  and Recursive Self-Improvement for advanced LLM architectures.
authors:
- zartbot
---

New Transformer architectures are challenging the conventional wisdom of adding "memory modules" to LLMs. Instead of simple loops, this article proposes a recursive model with fine-grained context management.

This shift changes how we think about an LLM's internal "computation graph" and where state can be written. It is not just about stacking more layers; it is about how the model processes and re-uses its own thought processes for Recursive Self-Improvement.

For senior engineers building agentic systems or LLM infrastructure, understanding these architectural shifts is crucial. It points towards a future where models are not just larger, but fundamentally smarter about their own context and reasoning. This is context engineering at its deepest level.
