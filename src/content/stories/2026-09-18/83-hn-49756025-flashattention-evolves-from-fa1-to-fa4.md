---
title: FlashAttention evolves from FA1 to FA4
source: hn
url: https://chizkidd.github.io//2026/09/17/flashattention-2/
date: '2026-09-18'
tags:
- catchup
- efficient-attention
- flashattention
- fp8-precision
- gpu-optimization
- hardware-acceleration
- hn
- paged-attention
- transformers
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49756025'
comments: https://news.ycombinator.com/item?id=49756025
why_read: Readers will learn about the evolution of FlashAttention from its initial
  version to FA4, understanding the architectural changes and optimizations introduced
  in each generation. It also clarifies FlashAttention's place among other efficient
  attention mechanisms and practical considerations for its use.
authors:
- ibobev
---

FlashAttention has rapidly evolved, and understanding its journey from FA1 to FA4 is critical for anyone building LLM infrastructure. This breakdown goes deep into what changed with each iteration, offering a nuanced view beyond just performance metrics.

You will find clear comparisons with other efficient attention techniques like PagedAttention, sparse, and linear attention. It also highlights the distinction between training and inference regimes, alongside practical PyTorch integration and common implementation pitfalls.

Learning how FA3 leverages asynchrony to overlap data movement, GEMM, and softmax, or how FA4 tackles asymmetric hardware scaling, will fundamentally shift how you approach optimizing attention mechanisms. This is not just theoretical; it provides a mental model for real-world application.
