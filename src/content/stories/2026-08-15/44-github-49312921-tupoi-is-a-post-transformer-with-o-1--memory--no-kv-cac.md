---
title: TUPOI is a post-transformer with O(1) memory, no KV-cache
source: github
url: https://github.com/narelabs/TUPOI
date: '2026-08-15'
tags:
- attention-free
- catchup
- github
- kv-cache-free
- o1-memory
- symplectic-language-model
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49312921'
comments: https://news.ycombinator.com/item?id=49312921
why_read: This describes a novel language model architecture, TUPOI, that achieves
  constant O(1) memory by replacing the attention mechanism with a Symplectic Hamiltonian
  Integrator. Readers will learn how a different approach to sequence modeling can
  eliminate the KV-cache and ensure zero state dissipation.
authors:
- NARE LABS
---

A new LLM architecture, Tupoi, claims to achieve strictly O(1) memory usage by replacing the attention mechanism with a Symplectic Hamiltonian Integrator. This is a significant departure from standard Transformer models which suffer from O(N) memory for the KV cache.

This approach could be a game-changer for deploying LLMs, especially in environments with strict memory constraints or when dealing with extremely long contexts, where the KV-cache becomes a bottleneck. Imagine running LLMs without memory growing with input sequence length.

The claim of matching Transformer expressivity while guaranteeing zero state dissipation and constant memory is ambitious and deeply intriguing. This research pushes the boundaries of efficient LLM design.
