---
title: Von enables sub-25ms non-autoregressive system one decision modeling
source: github
url: https://github.com/wfzyx/von
date: '2026-09-26'
tags:
- catchup
- decision-modeling
- github
- non-autoregressive-inference
- order-invariance
- system-one-models
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49858763'
comments: https://news.ycombinator.com/item?id=49858763
why_read: Learn how the Von decision model achieves order-invariant and low-latency
  inference for real-time control without task-specific reinforcement learning.
authors:
- wfzyx
---

Autoregressive generation is an inefficient way to make discrete decisions in agent loops. When an agent needs to route a request, classify an intent, or pick an action, generating sequential tokens introduces hundreds of milliseconds of latency and wastes compute.

Von takes a different approach by implementing a non-autoregressive System One decision model. It delivers calibrated discrete, probabilistic, and ordinal inference in under 25 milliseconds. Instead of predicting tokens one by one, the architecture evaluates multiple candidate options in parallel against a premise in a single forward pass.

Version 1.2 introduces order-invariant option scoring at the attention layer. Tokens for each candidate option attend strictly to the input premise and to themselves, eliminating position bias where earlier options were artificially favored. This provides deterministic routing without expensive policy networks or reinforcement learning setups.

Fast agent architectures depend on separating quick heuristic routing from heavy reasoning steps.
