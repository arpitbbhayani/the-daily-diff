---
title: Trading compute for memory using selective activation checkpointing
source: hn
url: https://blog.janestreet.com/trading-off-compute-for-memory-with-activation-checkpointing/
date: '2026-10-02'
tags:
- activation-checkpointing
- backward-pass
- catchup
- gradient-computation
- hn
- memory-optimization
- pytorch
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49933055'
comments: https://news.ycombinator.com/item?id=49933055
why_read: Learn how activation checkpointing strategically recomputes intermediate
  forward-pass outputs during backpropagation to reduce peak memory usage during deep
  learning model training.
authors:
- James Somers
---

Training deep learning models frequently hits GPU memory ceilings long before compute capacity saturates. PyTorch by default retains intermediate activations across every forward layer to evaluate backward gradients, driving peak memory consumption.

Activation checkpointing trades compute for memory by discarding select activations during the forward pass and recalculating them on demand during the backward pass. The real systems challenge lies in selecting the optimal subset of computation graph nodes to recompute without causing massive execution slowdowns.

Jane Street ML engineers formulated this checkpointing problem as a constrained graph optimization task. By systematically analyzing the memory-compute frontier, infrastructure teams can fit larger parameter architectures and context windows into fixed memory allocations with minimal throughput overhead.

Understanding these memory trade-offs is essential for anyone designing high-throughput distributed training pipelines.
