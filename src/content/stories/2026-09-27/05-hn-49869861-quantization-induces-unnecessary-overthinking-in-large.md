---
title: Quantization induces unnecessary overthinking in large reasoning models
source: hn
url: https://arxiv.org/abs/2606.00206
date: '2026-09-27'
tags:
- catchup
- chain-of-thought
- hn
- kl-divergence
- logit-penalty
- post-training-quantization
- reasoning-models
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49869861'
comments: https://news.ycombinator.com/item?id=49869861
why_read: Understand the mechanistic cause of overthinking in quantized reasoning
  models where correct intermediate steps are discarded. You will learn how a simple
  training-free logit penalty reduces reasoning cost while recovering model accuracy.
authors:
- Sanae Lotfi
- Polina Kirichenko
- Steven Li
- Zechun Liu
image: /infographics/05-hn-49869861.jpg
---

Quantizing reasoning models often causes them to overthink and fail on answers they already got right. In up to 52 percent of failures on quantized reasoning benchmarks, models actually reach the correct answer in intermediate reasoning steps but talk themselves out of it before producing the final output.

Researchers found that token-level divergence between quantized and full-precision distributions spikes at positions with high entropy. At these decision points, quantized models disproportionately sample hesitation tokens such as "wait", "but", and "alternatively", triggering unnecessary extra loops of chain-of-thought computation.

A simple training-free logit penalty applied to these specific hesitation markers cuts chain-of-thought token length by 12 to 23 percent while reducing quantization overthinking errors by up to 58 percent.

Pruning unnecessary reasoning tokens at inference time saves compute budget without sacrificing accuracy.
