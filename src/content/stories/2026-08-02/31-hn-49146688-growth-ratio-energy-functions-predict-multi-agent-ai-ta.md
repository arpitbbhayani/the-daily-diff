---
title: Growth-Ratio Energy Functions Predict Multi-Agent AI Task Failure
source: hn
url: https://vishalvermalabs.com/papers/empirical-lyapunov-stability-agent-failure/
date: '2026-08-02'
tags:
- catchup
- growth-ratio-normalization
- hn
- lyapunov-stability
- multi-agent-ai
- task-failure-prediction
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49146688'
comments: https://news.ycombinator.com/item?id=49146688
why_read: This paper presents empirical validation for a physics-inspired framework
  for multi-agent AI systems. It demonstrates how growth-ratio normalization transforms
  an unstable diagnostic signal into a precise leading indicator of agent task failure.
authors:
- Vishal Verma
---

Predicting when an AI agent will fail is a critical problem for robust multi-agent systems. New research proposes a "growth-ratio energy function" as a precise leading indicator for agent task failure, resolving high false positive rates found in simpler approaches.

The key insight is normalizing context growth rather than just monitoring raw token counts. Traditional Lyapunov energy functions, based on cumulative token counts, often produced unacceptable false positives because multi-turn conversations naturally grow context. By monitoring a ratio against a warmup baseline, the diagnostic signal becomes much more accurate.

This approach is implemented in a hybrid Rust/Python runtime safety library called `state-harness` and validated across multiple benchmarks, including SWE-bench and MINT. This offers a highly practical, physics-inspired framework for managing the "semantic boundary layer" of AI systems, directly improving their reliability.

This is a significant step towards more reliable and debuggable AI agents in production.
