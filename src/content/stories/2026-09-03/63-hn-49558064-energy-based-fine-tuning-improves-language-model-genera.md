---
title: Energy-Based Fine-Tuning improves language model generation by matching features
source: hn
url: https://energy-based-fine-tuning.github.io/
date: '2026-09-03'
tags:
- catchup
- distributional-shift
- energy-based-fine-tuning
- feature-matching-objective
- hn
- reinforce-estimator
- sequence-level-learning
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49558064'
comments: https://news.ycombinator.com/item?id=49558064
why_read: This introduces Energy-Based Fine-Tuning (EBFT) as a novel method for fine-tuning
  language models. Readers will learn how EBFT addresses the compounding error problem
  during generation by matching feature statistics, improving performance over existing
  methods.
authors:
- Samy Jelassi
- Mujin Kwun
- Rosie Zhao
- Yuanzhi Li
- Nicolo Fusi
- Yilun Du
- Sham M. Kakade
- Carles Domingo-Enrich
---

Language models struggle when generating from their own outputs due to distributional shift; they are trained on ground-truth but generate from their own (potentially error-prone) rollouts. This paper introduces Energy-Based Fine-Tuning (EBFT) as a solution. EBFT ditches scalar rewards or token-level objectives in favor of a feature-matching objective, aligning the *statistics* of model-generated completions with ground-truth in the frozen activation space. This novel approach outperforms standard methods like RLVR and SFT, demonstrating that better context and signal engineering can dramatically improve model robustness. It is a powerful reminder that the model is only as good as the objective it optimizes.
