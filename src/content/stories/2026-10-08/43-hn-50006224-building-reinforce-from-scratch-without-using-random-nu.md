---
title: Building Reinforce from scratch without using random numbers
source: hn
url: https://srush.github.io/sampling-to-reinforce/
date: '2026-10-08'
tags:
- catchup
- hn
- random-variables
- reinforce
- reinforcement-learning
- variance-reduction
section: ai
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '50006224'
comments: https://news.ycombinator.com/item?id=50006224
why_read: Read this to understand the mechanics of Reinforce by building it without
  stochastic sampling. You will gain an intuitive mental model for foundational variance
  reduction techniques in policy optimization.
authors:
- srush
---

Most explanations of policy gradient algorithms like REINFORCE lean heavily on Monte Carlo random sampling, which ironically obscures the mathematical mechanics. When stochastic noise dominates the equations, subtle implementation bugs and variance reduction dynamics become difficult to diagnose and understand.

Sasha Rush takes a completely deterministic approach by constructing discrete random variables from scratch without pseudorandom numbers. By tracking explicit histograms over finite support sets, operations like expectation, score functions, and policy updates can be calculated exactly.

This removes the confounding randomness and cleanly reveals why policy gradients work, how baseline subtraction reduces variance without introducing bias, and where naive implementations fail in model reasoning loops.

If you are working on post-training loops for reasoning models, inspecting this implementation provides rare clarity into the foundations of LLM alignment.
