---
title: CRiT-QA Exposes Large Language Model Multi-Hop Reasoning Vulnerabilities
source: arxiv
url: http://arxiv.org/abs/2607.10562v1
date: '2026-07-12'
tags:
- arxiv
- catchup
- counterfactual-entities
- crit-qa
- cs.AI
- dataset-shortcuts
- distractor-chains
- large-language-models
- multi-hop-reasoning
arxiv_id: '2607.10562'
categories: cs.AI
why_read: This text introduces CRiT-QA, a novel dataset designed to rigorously evaluate
  multi-hop reasoning in LLMs. Readers will learn how existing models exploit dataset
  shortcuts and internal knowledge, and how CRiT-QA's counterfactuals and distractor
  traps expose these limitations.
authors:
- JungMin Yun
- JuneHyoung Kwon
- YoungBin Kim
---

Current multi-hop reasoning benchmarks often mask LLM vulnerabilities to internal knowledge reliance and dataset shortcuts.

While LLMs perform well on existing multi-hop question answering datasets, this performance often hides two critical issues: over-reliance on internal parametric knowledge and exploitation of superficial dataset shortcuts.

CRiT-QA (Counterfactual Reasoning with Traps) is a new dataset designed to expose these vulnerabilities. It transforms factual reasoning chains with counterfactual entities, forcing strict context dependency.

It also injects plausible, but incorrect, multi-anchor distractor chains that diverge at different hops, requiring models to follow the entire reasoning process. Experiments show substantial performance degradation on CRiT-QA, revealing where LLMs truly fall short in genuine multi-hop reasoning.

True multi-hop reasoning needs counterfactual challenges, not shortcuts.
