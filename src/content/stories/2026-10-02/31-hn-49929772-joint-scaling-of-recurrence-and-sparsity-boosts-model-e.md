---
title: Joint scaling of recurrence and sparsity boosts model efficiency
source: hn
url: https://arxiv.org/abs/2609.40316
date: '2026-10-02'
tags:
- catchup
- hn
- looped-transformers
- mixture-of-experts
- parameter-efficiency
- recurrence
- scaling-laws
- test-time-scaling
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49929772'
comments: https://news.ycombinator.com/item?id=49929772
why_read: Read this to understand how combining recurrent looping and sparse mixture-of-experts
  creates predictable scaling laws and significantly improves compute and parameter
  efficiency on reasoning tasks.
authors:
- Yanbei Chen
- Anirudh Goyal
- Raghuraman Krishnamoorthi
---

Recurrent layer looping increases computational depth at fixed parameter count, while Mixture of Experts (MoE) sparsity expands total model capacity at constant active compute. A new research paper introduces Loop Scaling Laws, providing the first formal framework to model both recurrence and sparsity simultaneously.

The findings show that sparsity and recurrence reinforce each other. Sparse models demonstrate a higher effective parameter gain from looping than dense counterparts, delivering roughly 3x active parameter efficiency and 2x total parameter efficiency on complex reasoning tasks.

At a trillion-token pre-training scale, a looped MoE designed using these laws matches the reasoning performance of a non-looped MoE with double the parameter count. This architecture also naturally enables test-time compute scaling simply by adjusting loop iterations during inference.

Co-designing routing sparsity with architectural recurrence offers a practical blueprint for training highly efficient reasoning models under strict memory budgets.
