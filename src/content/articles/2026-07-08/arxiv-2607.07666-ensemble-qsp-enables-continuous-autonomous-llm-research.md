---
title: Ensemble QSP Enables Continuous Autonomous LLM Research
source: arxiv
url: http://arxiv.org/abs/2607.07666v1
date: '2026-07-08'
tags:
- arxiv
- autonomous-llm-research
- catchup
- context-management
- cs.MA
- debugging-efficiency
- ensemble-qsp
- hierarchical-memory
- multi-agent-framework
- pharmacokinetic-modeling
- q-bio.QM
arxiv_id: '2607.07666'
categories: q-bio.QM, cs.MA
why_read: Read this to understand how Ensemble QSP, a multi-agent framework with hierarchical
  memory, enables large language models to perform continuous, long-horizon research
  without context degradation. You will learn about its architecture, its benefits
  for autonomous operation, and improved debugging efficiency.
authors:
- Shivendra G. Tewari
- Holly Kimko
---

LLMs struggle with long-horizon tasks due to their stateless architecture and context window limits. This paper presents Ensemble QSP, a multi-agent framework that solves this with a three-layer hierarchical memory architecture.

This architecture keeps injected context bounded and constant throughout project duration, with a median of 301 tokens and a maximum of 4,050 across 104 runs.

The system orchestrates five specialist worker agents under principal investigators, even enforcing physical constraints with physics-based checklists. This enables continuous autonomous operation without context degradation.

This architecture is domain-agnostic and shows robust autonomous model selection, consistent result quality across different LLMs, and improved parameter recovery, making it a powerful tool for complex scientific workflows.
