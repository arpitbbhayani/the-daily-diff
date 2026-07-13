---
title: MIRA-Math Benchmarks Minimal Information Requesting for Math Reasoning
source: arxiv
url: http://arxiv.org/abs/2607.07391v1
date: '2026-07-08'
tags:
- arxiv
- benchmarking
- catchup
- cs.AI
- diagnostic-capability
- information-requesting
- large-language-models
- mathematical-reasoning
- mira-math
- missing-information
arxiv_id: '2607.07391'
categories: cs.AI
why_read: This paper introduces MIRA-Math, a novel benchmark designed to diagnose
  an LLM's ability to identify and request missing facts in mathematical problems.
  It reveals that successful information requesting and accurate final computation
  are separable capabilities.
authors:
- Charbel Al Bateh
- Samer Saab
---

LLMs are great at mathematical reasoning, but what if they do not have all the facts upfront? How well do they identify and request missing information?

MIRA-Math is a new benchmark designed precisely for this: solving math problems where exactly one atomic fact is missing, and the solver must request it under budget.

It is not just about reasoning, but about strategic information gathering. The benchmark contains 2,310 instances across 22 mathematical families, from algebra to Markov chains.

Experiments reveal that request success and final-answer accuracy are separable. Models might ask for the right info but still fail the computation, or fail to even ask correctly.

For engineers pushing the boundaries of LLM agents, MIRA-Math provides a critical tool to evaluate and improve their proactive information-seeking and reasoning capabilities.

Teaching LLMs to ask the right questions.
