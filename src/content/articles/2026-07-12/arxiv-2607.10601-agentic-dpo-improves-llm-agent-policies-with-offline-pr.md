---
title: Agentic-DPO Improves LLM Agent Policies with Offline Preference Optimization
source: arxiv
url: http://arxiv.org/abs/2607.10601v1
date: '2026-07-12'
tags:
- arxiv
- catchup
- cs.AI
- expert-trajectories
- llm-agents
- offline-policy-optimization
- preference-learning
arxiv_id: '2607.10601'
categories: cs.AI
why_read: This article introduces Agentic-DPO, a lightweight method for optimizing
  LLM agent policies from expert trajectories. You will learn how to achieve significant
  performance improvements over imitation learning without needing expensive online
  environment rollouts or reward models.
authors:
- Yixiong Chen
- Alan Yuille
---

Training powerful LLM agents is often a high-cost endeavor, especially when relying on environment rollouts for reinforcement learning or preference modeling. Supervised fine-tuning (SFT) is cheaper, but only imitates actions, not robust decision-making.

Agentic-DPO offers a compelling alternative. It is a lightweight, offline policy optimization method that transforms expert trajectories into state-conditioned preference supervision. At each expert action state, it samples plausible wrong actions and contrasts them with the expert action using a DPO-style objective.

This approach avoids expensive online environment rollouts or reward models. It also introduces Policy-Preserving Augmentation (PPA) to handle schema variations. On benchmarks like tau-bench, Agentic-DPO increased accuracy from 21.7% (SFT) to 41.4% for a 9B model, matching online GRPO with significantly fewer resources.

This is a major step forward for building more capable agents with drastically reduced training costs, making advanced agent development more accessible.
