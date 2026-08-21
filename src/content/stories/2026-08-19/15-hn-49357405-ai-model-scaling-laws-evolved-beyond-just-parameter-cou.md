---
title: AI model scaling laws evolved beyond just parameter counts
source: hn
url: https://twitter.com/jietang/status/2089941544581403107
date: '2026-08-19'
tags:
- ai-models
- catchup
- compute
- data
- hn
- inference-optimization
- parameters
- scaling-laws
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49357405'
comments: https://news.ycombinator.com/item?id=49357405
why_read: This text explains the evolution of AI model scaling laws, highlighting
  the shift from focusing solely on parameters to considering data, compute, and inference
  costs. Readers will learn how the industry's understanding of optimal scaling has
  matured.
authors:
- jietang
---

The "scaling law" for LLMs is not a fixed target, it is an evolving strategy. Early models mistakenly scaled parameters faster than data, driven by incomplete research.

This led to the trillion-parameter detour where compute was misallocated. Modern understanding, validated across hundreds of models, shows a more balanced approach is optimal for training.

Crucially, the objective has shifted from training cost to inference cost. Since models are called billions of times daily, lifetime cost dominates. This means the optimal strategy is often smaller models, trained far longer. This changes how you think about model architecture and deployment.
