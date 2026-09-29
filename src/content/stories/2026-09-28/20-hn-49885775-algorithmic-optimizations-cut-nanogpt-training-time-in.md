---
title: Algorithmic optimizations cut NanoGPT training time in half
source: hn
url: https://hyperstition.cc/training-nanogpt-in-39-9-seconds
date: '2026-09-28'
tags:
- anvil-ii
- catchup
- hn
- nanogpt
- optimizer-optimization
- sampled-softmax
- sparse-n-gram
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49885775'
comments: https://news.ycombinator.com/item?id=49885775
why_read: Read this to learn how combining optimizer improvements, sampled softmax,
  and sparse n-gram tables slashed NanoGPT training time to under forty seconds. You
  will gain a concrete breakdown of how individual algorithmic optimizations compound
  during model pretraining.
authors:
- Deven Pietrzak
---

Training a 124M parameter language model to a target validation loss of 3.28 on FineWeb has dropped to 39.9 seconds on 8 H100 GPUs, cutting the previous record of 73.9 seconds nearly in half.

The speedup comes from stacking targeted algorithmic and system-level optimizations rather than brute compute. An improved optimizer called ANVIL II delivers better validation loss progression than Muon, saving 5.09 seconds. Combining that with sampled softmax removes the burden of scoring the full vocabulary during intermediate steps, shaving off another 8.41 seconds, while a sparse n-gram model provides fast local token pattern capacity.

Complementing these algorithmic adjustments with FP8 execution and CUDA graphs eliminated overhead across every training step. For teams designing pretraining harnesses or optimizing distributed GPU workloads, this run demonstrates that optimizer redesign and vocabulary sampling deliver far greater returns than raw hardware scaling alone.
