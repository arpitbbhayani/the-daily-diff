---
title: ArXiv Paper
source: arxiv
url: https://arxiv.org/abs/49207056
date: '2026-08-07'
tags:
- arxiv
- catchup
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
arxiv_id: '49207056'
categories: ''
why_read: You should read this to understand a novel technique for optimizing memory
  and bandwidth bottlenecks in long-context LLM inference, directly applicable to
  improving LLM infrastructure performance.
---

Optimizing LLM inference, especially for long contexts, often boils down to tackling the KV-cache bottleneck. A new paper introduces OptR, an "output-aware rotation" method for INT2 KV-cache quantization, showing surprising improvements. Many existing INT2 methods optimize for proxy errors, but OptR directly minimizes the error propagated through attention and the output projection $W_O$. This means the quantization is more effective where it truly matters.

The authors decompose the post-$W_O$ attention-output error into key- and value-induced terms, learning per-head orthogonal corrections through the full INT2 quantization path. The result is a significant boost over prior methods like QuaRot and OSCAR, particularly strengthening long-context retrieval, all while maintaining the paged KV-cache format and adding negligible inference overhead. This is a practical win for anyone battling LLM memory constraints.
