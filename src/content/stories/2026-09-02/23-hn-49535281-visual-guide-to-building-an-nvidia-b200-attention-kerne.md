---
title: Visual guide to building an NVIDIA B200 attention kernel
source: hn
url: https://iaroslavelistratov.github.io/b200-attention/
date: '2026-09-02'
tags:
- b200-attention-kernel
- catchup
- cuda
- flashattention
- gpu-optimization
- hn
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49535281'
comments: https://news.ycombinator.com/item?id=49535281
why_read: This guide offers a visual, step-by-step approach to building a B200 attention
  kernel in CUDA from scratch, achieving near state-of-the-art performance. Readers
  will gain a deep understanding of GPU kernel optimization and a foundation for further
  research on latest hardware.
authors:
- Iaroslav Elistratov
---

Want to understand the bleeding edge of AI hardware optimization? This remarkable guide shows you how to build a B200 attention kernel from scratch using CUDA and PTX, achieving performance near the state-of-the-art FlashAttention-4.

This is not a high-level overview. The article provides an exceptionally detailed, visual progression through 60 diagrams, explaining every optimization step. You will learn fundamental GPU programming concepts and how to apply them to one of the most challenging kernels in modern AI.

Understanding these low-level optimizations is critical for anyone working on LLM infrastructure, applied AI, or designing scalable systems that rely on custom silicon. It provides foundational knowledge for achieving maximum performance on the latest NVIDIA Blackwell architecture.

By diving into the direct memory access, thread block scheduling, and warp-level programming, you will gain a mental model for designing your own highly optimized GPU kernels. This resource is indispensable for pushing the boundaries of AI performance engineering.
