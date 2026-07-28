---
arxiv_id: '49055230'
categories: ''
date: '2026-07-26'
depth_score: 8
image: /infographics/62-arxiv-49055230.jpg
interest_score: 8
novelty_score: 8
section: ai
source: arxiv
tags:
- arxiv
- catchup
title: ArXiv Paper
url: https://arxiv.org/abs/49055230
utility_score: 7
why_read: Learn how deterministic KV-cache eviction strategies can fundamentally hide
  errors, and discover a novel randomized design that provides statistically sound
  error certificates to improve LLM inference reliability and efficiency.
---

Deterministic KV-cache eviction in LLMs might be hiding critical errors from you, making it impossible to know the true impact of evicted tokens. New research reveals that these methods cannot reliably estimate the attention-output error, potentially leading to silent failures in production.

The solution? Randomized eviction. By using a Poisson-sampled tail and a clever logit offset, this approach restores identifiability. It offers a per-step error certificate with impressive empirical coverage, allowing for real-time, accurate assessment of cache-induced errors without compromising accuracy.

This means better output confidence and smarter recomputation scheduling. For anyone running LLM inference at scale, understanding this shift from opaque deterministic caching to transparent, certifiable randomized eviction is a game-changer for system stability and performance.