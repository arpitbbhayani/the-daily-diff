---
title: TACO Improves LLM Reasoning by Calibrating Positive Credit
source: arxiv
url: http://arxiv.org/abs/2607.07976v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- credit-assignment
- critic-free-rl
- cs.AI
- cs.CL
- cs.LG
- large-language-models
- positive-credit-contamination
- reinforcement-learning
- tail-aware-credit-calibration
- training-stability
arxiv_id: '2607.07976'
categories: cs.CL, cs.AI, cs.LG
why_read: This analysis uncovers a critical failure mode, "Positive-Credit Contamination,"
  in critic-free reinforcement learning for LLMs and introduces TACO as a solution.
  You will learn how TACO calibrates credit assignment to improve LLM reasoning capabilities
  and training stability.
authors:
- Xiuyi Lou
- Zicheng Xu
- Yu-Neng Chuang
- Hoang Anh Duy Le
- Zhaozhuo Xu
- Guanchu Wang
- Vladimir Braverman
---

Large Language Models (LLMs) often suffer from "Positive-Credit Contamination" during reinforcement learning. This happens when implausible, low-probability tokens get the same positive credit as plausible ones, reinforcing flawed reasoning.

This research introduces Tail-Aware Credit calibratiOn (TACO), a method to suppress these undesirable updates. TACO computes a "tail-risk score" for each token, distinguishing incidental noise from genuine exploration or useful rare patterns.

By tuning positive credit for risky tokens without completely removing gradients, TACO allows valuable rare patterns to accumulate reinforcement while progressively dampening noise.

Experiments across three LLMs and eight benchmarks demonstrate that TACO consistently outperforms GRPO-style baselines, leading to improved training stability and sustained performance gains in long-horizon RL.

Build more stable and robust LLM agents with better reasoning.
