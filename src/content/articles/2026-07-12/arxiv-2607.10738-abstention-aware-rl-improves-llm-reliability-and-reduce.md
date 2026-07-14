---
title: Abstention-Aware RL Improves LLM Reliability and Reduces Hallucinations
source: arxiv
url: http://arxiv.org/abs/2607.10738v1
date: '2026-07-12'
tags:
- abstention-aware-rl
- abstention-reward
- arxiv
- catchup
- cs.AI
- cs.CL
- cs.LG
- hallucinations
- large-language-models
- ra-f1
- reinforcement-learning
- reliability
arxiv_id: '2607.10738'
categories: cs.LG, cs.AI, cs.CL
why_read: This paper introduces AWA-RL, a novel reinforcement learning method that
  reduces LLM hallucinations by penalizing fabricated answers. You will learn how
  dynamically shaping abstention rewards can lead to more reliable search agents with
  improved precision.
authors:
- Fengji Zhang
- Tianyu Fan
- Yuxiang Zheng
- Xinyao Niu
- Chengen Huang
- Jacky Keung
- Bei Chen
---

Search-augmented LLM agents are powerful, but they harbor a critical vulnerability: hallucinating answers when retrieval fails because current training often rewards correct answers but not adequately penalizes fabricated ones. This research tackles that head-on.

Introducing Abstention-Aware Reinforcement Learning (AWA-RL), this method dynamically shapes the abstention reward, allowing agents to intelligently decide whether to answer a query or to abstain when confidence is low.

This is not just about avoiding wrong answers; it is about building trust. AWA-RL boosted absolute precision by up to 10.3% and overall RA-F1 (a new capability-reliability trade-off metric) by 2.9%, with only marginal sacrifice in raw accuracy.

The key insight is that an agent should be explicitly rewarded for knowing when not to answer. This is a fundamental shift in how we approach training reliable LLM agents, moving beyond simply maximizing accuracy.

If you are building LLM agents, understanding how to instill a "know-when-to-say-nothing" intelligence is critical for robust, trustworthy deployments.
