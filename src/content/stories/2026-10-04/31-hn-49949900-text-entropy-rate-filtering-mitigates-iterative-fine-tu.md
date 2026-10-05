---
title: Text entropy rate filtering mitigates iterative fine-tuning collapse
source: hn
url: https://arxiv.org/abs/2610.01493
date: '2026-10-04'
tags:
- catchup
- entropy-rate
- hn
- iterative-fine-tuning
- kontoyiannis-estimator
- model-collapse
- qlora
- synthetic-data
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49949900'
comments: https://news.ycombinator.com/item?id=49949900
why_read: Read this to understand how raw text entropy estimators can effectively
  prevent model collapse during iterative fine-tuning without requiring model log-probabilities
  or external data.
authors:
- Lewis Mitchell
---

Iterative fine-tuning on synthetic data inevitably triggers model collapse, eroding output diversity and trapping generations in repetitive loops. Standard mitigations require access to model log-probabilities or expensive external judge models to score training samples.

A new information-theoretic technique uses the non-parametric Kontoyiannis entropy rate estimator, computed entirely from raw text via match-length statistics. Because it operates directly on text strings without evaluating neural network probabilities, it requires zero model inference overhead during filtering.

In a multi-generation QLoRA experiment on Llama-3.1-8B, this model-free entropy filtering outperformed log-probability filtering across every diversity metric. It delivered a 42 percent boost in unique trigrams and a 19 percent reduction in phrase repetition, while log-probability filters showed no statistically significant benefit.

Clean data pipelines do not require massive evaluation models when classical information theory solves the problem with simple string matching.
