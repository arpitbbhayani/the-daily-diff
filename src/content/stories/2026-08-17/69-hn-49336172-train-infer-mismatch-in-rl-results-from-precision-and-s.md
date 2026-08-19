---
title: Train-infer mismatch in RL results from precision and state differences
source: hn
url: https://kiddyboots216.github.io/mismatch/
date: '2026-08-17'
tags:
- cached-state
- catchup
- floating-point-arithmetic
- hn
- precision
- reinforcement-learning
- train-infer-mismatch
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49336172'
comments: https://news.ycombinator.com/item?id=49336172
why_read: This text explains the subtle technical causes of train-infer mismatch in
  Open-weight MoE RL. Readers will learn how differences in floating point precision
  and cached state handling between inference and training engines lead to discrepancies.
authors:
- kiddyboots216
---

Debugging 'train-infer mismatch' in large AI models, especially open-weight Mixture-of-Experts (MoE) in RL, can feel like chasing ghosts. This article uncovers the subtle culprits: from floating-point precision differences across kernels to state management discrepancies between training and inference engines.

You will discover how something as seemingly innocuous as the order of floating-point additions can lead to divergent log probabilities, severely impacting model behavior. The problem is not merely theoretical; it manifests in critical differences in cached state and generated tokens, breaking reproducibility.

This deep dive offers invaluable insights for engineers wrestling with the reliability and performance of applied AI systems. Understanding these low-level implementation details is crucial for building robust LLM infrastructure and ensuring your models behave consistently from development to production.
