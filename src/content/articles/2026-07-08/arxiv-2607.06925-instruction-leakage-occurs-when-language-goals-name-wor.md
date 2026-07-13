---
title: Instruction Leakage Occurs When Language Goals Name World Model Answers
source: arxiv
url: http://arxiv.org/abs/2607.06925v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- cs.AI
- grounding
- instruction-leakage
- language-goals
- model-diagnosis
- reference-anchors
- world-models
arxiv_id: '2607.06925'
categories: cs.AI
why_read: This paper identifies and explains 'instruction leakage,' a critical confound
  in goal-conditioned world models where predictions stem from transcribing instructions
  rather than genuine perception. Readers will learn when this leakage occurs, how
  to detect it, and a specific remedy to recover true instruction-independent grounding.
authors:
- Yufeng Wang
- Lu Wei
- Haibin Ling
---

Ever wonder if your AI model is actually "understanding" or just memorizing? This paper reveals a subtle but critical flaw called "instruction leakage" in world models. It shows how a goal-conditioned predictor can hit 90% accuracy on spatial relation tasks, not by perceiving the world, but by simply transcribing the instruction. Remove the goal, and accuracy plummets to 27%. The fix is elegant: keep the goal out of the model's dynamics, where it belongs to the planner, not the perception system. This insight is paramount for building truly intelligent AI agents that ground their actions in reality, not just instruction text.
