---
title: TTT-Discover trains LLMs at test time for discovery challenges
source: hn
url: https://ucbskyadrs.github.io/blog/ttt/
date: '2026-08-13'
tags:
- catchup
- discovery-problems
- gpu-optimization
- hn
- large-language-models
- reinforcement-learning
- test-time-adaptation
- ttt-discover
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49290619'
comments: https://news.ycombinator.com/item?id=49290619
why_read: This post introduces TTT-Discover, a novel approach that trains LLMs on
  single test problems using reinforcement learning to solve complex discovery challenges.
  Readers will learn how this method achieves state-of-the-art results by generalizing
  beyond training data to beat existing records.
authors:
- matt_d
---

Forget frozen LLMs and static prompts. TTT-Discover introduces a paradigm shift: it trains an LLM using reinforcement learning *at test time* on a single, specific problem to achieve novel discoveries.

Instead of just iterating on prompts or fine-tuning, TTT-Discover's approach involves the model actually learning and adapting during the discovery process. This has enabled it to surpass human benchmarks in complex tasks like optimizing GPU kernels.

This is not merely incremental progress; it represents a powerful new direction for agentic AI. Imagine LLMs that do not just retrieve or summarize, but actively discover and optimize solutions in real-time. This could redefine how we approach engineering and scientific challenges with AI.
