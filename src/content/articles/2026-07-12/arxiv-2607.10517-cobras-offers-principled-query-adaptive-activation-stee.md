---
title: Cobras Offers Principled Query-Adaptive Activation Steering for LLMs
source: arxiv
url: http://arxiv.org/abs/2607.10517v1
date: '2026-07-12'
tags:
- activation-steering
- arxiv
- catchup
- cs.AI
- cs.LG
- entropic-optimal-transport
- large-language-models
- log-density-ratio
- out-of-distribution-generalization
- query-adaptivity
- "schr\xF6dinger-bridge"
arxiv_id: '2607.10517'
categories: cs.LG, cs.AI
why_read: "This paper introduces Cobras, a novel activation steering method for LLMs\
  \ derived from a principled Schr\xF6dinger Bridge formulation. Readers will understand\
  \ how it provides query-adaptive control, consistently outperforming baselines and\
  \ avoiding out-of-distribution performance degradation."
authors:
- Seyed Arshan Dalili
- Ajay Narayanan Sridhar
- Vijaykrishnan Narayanan
- Mehrdad Mahdavi
---

Controlling large language models at inference time can move beyond heuristics to principled optimization.

Existing methods for activation steering, which offer a lightweight alternative to fine-tuning, often implicitly optimize a log-density-ratio objective. However, they do so heuristically, leading to query-independent steering directions that can degrade performance.

This paper introduces COBRAS, which tackles this by framing activation steering as a Schrödinger Bridge problem. This is the first principled derivation of the log-density-ratio steering objective from a well-posed optimization.

Crucially, COBRAS yields query-adaptive steering directions because the Schrödinger potentials are evaluated at the current activation. Empirically, it consistently outperforms prior baselines across four models and three alignment axes, avoiding out-of-distribution degradation.

Achieve precise, context-aware LLM control with a principled approach.
