---
title: Agon Improves Reasoning via Competitive Mutual Grading for Models
source: arxiv
url: http://arxiv.org/abs/2607.07690v1
date: '2026-07-08'
tags:
- agon
- arxiv
- catchup
- competitive-training
- cs.AI
- cs.CL
- cs.LG
- deepmath
- inference-cascade
- mutual-grading
- reasoning-models
- reinforcement-learning
arxiv_id: '2607.07690'
categories: cs.LG, cs.AI, cs.CL
why_read: This paper introduces Agon, a novel competitive training framework where
  two AI models grade each other to implicitly improve reasoning. Readers will learn
  how this approach fosters stronger reasoning models without explicit labels, achieving
  superior performance on challenging tasks.
authors:
- Vladislav Beliaev
---

Improving LLM reasoning on complex problems typically relies on reinforcement learning from verifiable rewards, but this only grades the final answer, not the quality of the thought process. This paper introduces Agon, a revolutionary approach.

Agon pits two competing models against each other. In alternating roles, one drafts a solution, and the other reads it while solving, with each model rewarded for out-solving its rival. This design implicitly grades the reasoning process itself.

Because both models are optimized, each continually faces a stronger opponent, a dynamic that single-model RL cannot replicate. On the hard split of DeepMath with Qwen3, Agon doubled the pass@1 score compared to GRPO, an eightfold gain over an untrained Mixture-of-Agents pass.

For software engineers building sophisticated AI agents, this competitive cross-model RL offers a powerful, label-free mechanism to elevate reasoning capabilities, pushing models to "think better" rather than just "write more."
