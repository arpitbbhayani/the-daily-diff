---
title: Checkpointing adjoint sweep on GPU drastically improves performance
source: hn
url: https://nablatensor.com/blog/gpu-checkpointing-forget-then-remember
date: '2026-09-16'
tags:
- adjoint-sweep
- catchup
- checkpointing
- financial-greeks
- gpu
- hn
- memory-management
- performance-optimization
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49730220'
comments: https://news.ycombinator.com/item?id=49730220
why_read: This article details how checkpointing the adjoint sweep on GPUs significantly
  boosts performance for financial calculations like Greeks. Readers will learn a
  specific memory optimization technique and its impressive impact on computation
  speed for complex derivatives.
authors:
- petrpravda
---

Optimizing GPU performance is often a game of managing memory, not just compute. This article reveals a profound bottleneck in adjoint sweeps, where calculating "Greeks" on a GPU was eight times slower than price calculation alone, largely due to memory overhead.

The solution is a classic "forget, then remember" checkpointing strategy. Instead of storing hundreds of intermediate numbers, the system throws them away after use, then recomputes them during the reverse sweep. This reduced memory from 760 to 38 numbers per path, yielding up to a 6.8x speedup.

This is a critical lesson for any high-performance computing on GPUs: sometimes, less memory means more speed. Recomputing can be far cheaper than constant memory access and transfer, fundamentally changing how you approach performance-critical sections of your code.
