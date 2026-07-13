---
title: Taxonomy Separates AI Self-Improvement and Ranks Evaluation Signals
source: arxiv
url: http://arxiv.org/abs/2607.07663v1
date: '2026-07-08'
tags:
- ai-governance
- ai-self-improvement
- arxiv
- catchup
- cs.AI
- loop-closure
- model-collapse
- recursive-self-improvement
- self-evaluation
- taxonomy
- verification-hierarchy
arxiv_id: '2607.07663'
categories: cs.AI
why_read: This analysis provides a clear taxonomy for understanding different types
  of AI self-improvement and details a verification hierarchy for evaluating their
  effectiveness. Readers will learn how to distinguish between bounded self-refinement
  and open-ended recursive self-improvement, and recognize the critical role of evaluation
  signals in AI system development.
authors:
- Mingguang Chen
- Licheng Wang
- Bo Qu
---

AI systems are increasingly improving themselves, but understanding what "self-improvement" truly means across different contexts is complex. This paper offers a critical survey, analyzing 1,250 arXiv papers to clarify the landscape.

It proposes a two-axis taxonomy: what the system improves (behavior, policy, evaluator, or research process) and the degree of loop closure (human-in-the-loop to fully closed).

A key insight is the "verification hierarchy" for self-evaluation. This orders self-assessment signals from formal verifiers (strongest) to intrinsic self-assessment (weakest), revealing that demonstrated self-improvement strength directly tracks this hierarchy.

For engineers building or evaluating AI agents, this framework is invaluable. It helps you distinguish between convergent, industrial self-refinement and the more speculative open-ended recursive self-improvement, highlighting common failure modes like self-confirming loops and model collapse.
