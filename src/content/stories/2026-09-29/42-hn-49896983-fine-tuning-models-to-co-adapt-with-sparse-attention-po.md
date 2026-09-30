---
title: Fine-tuning models to co-adapt with sparse attention policies
source: hn
url: https://arxiv.org/abs/2608.19920
date: '2026-09-29'
tags:
- catchup
- fine-tuning
- h2o-attention
- hn
- kv-cache-compression
- long-context-inference
- sparse-attention
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49896983'
comments: https://news.ycombinator.com/item?id=49896983
why_read: Learn how fine-tuning language models with sparse key-value cache policies
  enables efficient long-context inference on moderate hardware while matching or
  exceeding exact attention performance.
authors:
- Matthias Seeger
- Zeyu Zhang
- Vihang Patil
- Konstantinos Benidis
- Sebastian Schelter
---

Standard KV cache compression techniques like H2O allow long-context transformer inference on modest hardware, but they often degrade accuracy because the model was never trained to handle missing history.

A new fine-tuning framework allows language models to co-adapt directly with arbitrary sparse attention and cache eviction policies. Fine-tuned on a single 40 GB A100 GPU, the resulting sparse models match or outperform baselines trained with full sequence parallelism.

Pairing custom eviction kernels with policy-aware weight updates solves the memory wall without sacrificing retrieval quality.
