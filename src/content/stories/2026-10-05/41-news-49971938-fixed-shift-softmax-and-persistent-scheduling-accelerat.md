---
title: Fixed-shift softmax and persistent scheduling accelerate FlashAttention on
  Blackwell
source: news
url: https://arxiv.org/abs/2610.02229
date: '2026-10-05'
tags:
- blackwell
- catchup
- fixed-shift-softmax
- flashattention
- gpu-optimization
- news
- triton-tlx
section: ai
is_news: true
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49971938'
comments: https://news.ycombinator.com/item?id=49971938
why_read: Learn how architectural optimizations like fixed-shift softmax and persistent
  scheduling eliminate normalization bottlenecks in attention kernels on NVIDIA Blackwell
  GPUs.
authors:
- Oleksandr Stashuk
- Hongtao Yu
- Jay Shah
---

On Nvidia Blackwell GPUs, deeply pipelined matrix multiplications mean normalization and operand movement quickly become the primary performance bottlenecks in attention kernels.

A new implementation written in Triton TLX addresses this by restructuring FlashAttention around fixed-shift dense softmax and persistent scheduling. By switching to a fixed shift, the kernel completely removes recurrent accumulator corrections during the forward pass. Saving the reciprocal inverse denominator shifts row normalization out of the quadratic backward loop into a linear preprocessing stage.

Additional hardware optimizations include a packed BF16 exponential approximation, pipelined derivative publication, and skipping fully masked diagonal contractions on causal paths. On a B200 running at 1,000 watts across variable-batch token sequences up to 32,768 tokens, these techniques deliver a 7.3 percent geometric-mean throughput gain, with backward pass throughput improving up to 24.4 percent on standard benchmarks.

Kernel efficiency on modern accelerators is increasingly determined by register pressure and memory movement rather than raw arithmetic capability.
