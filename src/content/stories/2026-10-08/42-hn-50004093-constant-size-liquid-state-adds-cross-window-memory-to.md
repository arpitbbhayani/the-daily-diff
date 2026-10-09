---
title: Constant-size liquid state adds cross-window memory to frozen models
source: hn
url: https://huggingface.co/AwareLiquid/M1-TinyLlama-Adapter
date: '2026-10-08'
tags:
- catchup
- cross-window-recall
- fast-weight-associative-memory
- hn
- liquid-state
- residual-adapters
- selective-decay
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '50004093'
comments: https://news.ycombinator.com/item?id=50004093
why_read: Read this to understand how lightweight liquid adapters with selective decay
  provide frozen language models with persistent cross-window memory without expanding
  context size.
authors:
- AwareLiquid
---

Transformers struggle with cross-window memory because attention KV cache demands grow linearly with context length. A lightweight adapter design demonstrates that adding multi-timescale selective decay recurrence alongside fast-weight associative memory can supply persistent state across context windows.

By augmenting a frozen base model with an adapter representing only 0.76 percent of its parameter count, the system achieves cross-window recall that static attention mechanisms cannot structurally express. The liquid state maintains a constant footprint during inference rather than ballooning memory bandwidth.

Ablation tests prove that selective decay and fast weights are essential: removing the fast-weight matrix causes cross-window recall to collapse immediately from 0.55 down to 0.008. This offers a compelling blueprint for extending agent memory without paying quadratic attention costs.
