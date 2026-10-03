---
title: Contrasting earlier recurrent states improves looped Transformer decoding
source: hn
url: https://arxiv.org/abs/2610.02185
date: '2026-10-02'
tags:
- catchup
- contrastive-decoding
- hn
- inference-efficiency
- looped-transformers
- recurrent-depth
- token-selection
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49933979'
comments: https://news.ycombinator.com/item?id=49933979
why_read: Understand how reusing intermediate representations from earlier recurrent
  loops provides self-contained contrastive decoding signals to boost model performance
  and cut inference FLOPs.
authors:
- Weihao Liu
- Huangjie Zheng
- Tianrong Chen
- Rohit Dilip
- Richard He Bai
- Yizhu Jiao
- Yuyang Wang
- Ruixiang Zhang
---

Looped Transformers achieve impressive parameter efficiency by running inputs through shared recurrent blocks. However, standard autoregressive decoding typically throws away intermediate loop representations, discarding valuable computational signal along the way.

LoopCD introduces a training-free contrastive decoding technique that uses those earlier recurrent passes directly. Because earlier passes naturally represent weaker predictions, contrasting the final hidden state or logit output against an earlier iteration creates an aligned weak-and-strong decoding pair without requiring auxiliary draft models.

The benchmark results are compelling. LoopCD-Hidden boosts Huginn's HumanEval pass@1 from 22.56 percent to 31.71 percent with zero output pass overhead. More importantly, this guidance signal allows teams to cut the number of recurrent iterations in half while matching baseline accuracy, reducing forward FLOPs by up to 48 percent.

Squeezing higher inference throughput out of recurrent architectures without retraining is an effective architectural win for on-device and edge LLM deployments.
