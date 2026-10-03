---
title: Pretraining language models in Rust reveals silent framework failures
source: hn
url: https://arxiv.org/abs/2609.25008
date: '2026-09-23'
tags:
- burn
- candle
- catchup
- gradient-flow-arbiter
- hn
- language-model-pretraining
- rust
- tokenizer-fertility
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49818349'
comments: https://news.ycombinator.com/item?id=49818349
why_read: Read this to understand the silent failure modes of Rust machine learning
  frameworks during pretraining. It offers practical verification techniques like
  gradient-flow arbitration to catch non-obvious defects.
authors:
- Arif Adito
---

Attempting to train large language models outside the PyTorch ecosystem reveals how fragile emerging ML backends remain. A recent engineering report details pretraining a 0.4-billion parameter model end-to-end in Rust using Candle and Burn on an H100 GPU for 164 dollars, documenting severe failure modes that pass ordinary loss-curve checks.

The most dangerous bugs were silent correctness issues. In Candle, certain fused kernels silently failed to compute gradients while still returning clean execution codes. In Burn, the backward pass ran at roughly 3 percent of theoretical GPU throughput, and another kernel fusion pathway triggered segmentation faults at scale.

To detect these silent failures, the author introduced a gradient-flow arbiter test. This verification harness runs a single forward and backward pass before training to assert that every single trainable parameter receives a finite, non-zero gradient.

Standard loss curves will happily hide broken backward passes until compute budgets are completely wasted.
