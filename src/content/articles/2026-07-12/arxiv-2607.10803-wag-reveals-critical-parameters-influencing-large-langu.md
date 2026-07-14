---
title: WAG Reveals Critical Parameters Influencing Large Language Model Behavior
source: arxiv
url: http://arxiv.org/abs/2607.10803v1
date: '2026-07-12'
tags:
- arxiv
- catchup
- cs.AI
- cs.LG
- large-language-models
- model-collapse
- model-interpretation
- parameter-importance
- weight-adjusted-gradients
- weights-and-gradients-interplay
arxiv_id: '2607.10803'
categories: cs.LG, cs.AI
why_read: This paper introduces Weight-Adjusted Gradients (WAG), a novel method for
  identifying crucial parameters in Large Language Models that significantly impact
  performance. Readers will learn how WAG reveals fundamental structural properties
  of trained networks and its practical utility for analyzing, debugging, and controlling
  LLMs.
authors:
- Shrestha Datta
- Hongfu Liu
- Anshuman Chhabra
---

Understanding which parameters in Large Language Models truly matter is crucial for building reliable and efficient AI, and Weight-Adjusted Gradients (WAG) offers a fresh perspective. WAG identifies parameters that disproportionately influence model behavior, including those tied to performance collapse.

Existing importance metrics often miss these critical parameters, as WAG explicitly captures the interplay between model weights and first-order gradients. It shows that neither signal alone tells the full story.

This method reveals a tiny but critical subset of parameters whose modification leads to dramatic performance degradation. The findings point to fundamental structural properties of trained networks.

WAG has practical applications for expert allocation in Mixture-of-Expert architectures, parameter-specific unlearning, and knowledge editing. It is a powerful tool for deeper LLM interpretation and control.

Truly controlling LLMs means understanding their most influential parameters.
