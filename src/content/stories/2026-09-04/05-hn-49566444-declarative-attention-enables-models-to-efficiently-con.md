---
authors:
- Namgyu Ho
- Huzama Ahmad
- Woosung Koh
- Se-Young Yun
- Tal Schuster
- Cicero Nogueira dos Santos
comments: https://news.ycombinator.com/item?id=49566444
date: '2026-09-04'
depth_score: 8
hn_id: '49566444'
image: /infographics/05-hn-49566444.jpg
interest_score: 9
novelty_score: 9
section: ai
source: hn
tags:
- catchup
- context-management
- declarative-attention
- hn
- inference-optimization
- kv-cache
- language-models
title: Declarative Attention enables models to efficiently control context access
url: https://academy.dair.ai/papers/language-models-can-control-their-own-attention-2609.02737
utility_score: 9
why_read: Understand how Declarative Attention enables language models to reduce inference
  costs by intrinsically declaring their context needs, avoiding full KV cache reads.
  It presents a zero-shot, no-training protocol compatible with existing serving stacks.
---

Imagine an LLM that explicitly tells its inference engine exactly what context it needs, eliminating wasteful KV cache reads. This is not a distant future; a new protocol called Declarative Attention achieves precisely this, yielding massive efficiency gains.

The paper reveals that LLMs can announce within their chain-of-thought which parts of the context are relevant, allowing the inference engine to bypass scanning the entire KV cache. This simple yet profound change reduced attended tokens during decoding by 52 percent on Gemma-4-31B and 31.1 percent on Qwen-3.6-27B.

What makes this truly impactful is that it requires no model retraining or architectural changes. It works zero-shot on off-the-shelf models, integrating seamlessly by parsing these declarations like existing tool calls. This is a game-changer for reducing inference costs and latency, especially with increasingly long context windows.

This is a paradigm shift in how we think about LLM context management and infrastructure optimization.