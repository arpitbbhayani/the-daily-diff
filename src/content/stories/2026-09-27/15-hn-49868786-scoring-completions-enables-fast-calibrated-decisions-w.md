---
title: Scoring completions enables fast calibrated decisions without text generation
source: hn
url: https://victordibia.com/explainers/jev/
date: '2026-09-27'
tags:
- catchup
- decision-models
- hn
- inference-latency
- model-calibration
- option-scoring
- temperature-scaling
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49868786'
comments: https://news.ycombinator.com/item?id=49868786
why_read: Read this to understand how decision models score completion probabilities
  instead of generating text to achieve low latency and calibrated predictions. You
  will learn the mechanics, calibration trade-offs, and practical performance benchmarks
  on open models.
authors:
- Victor Dibia
---

Generating autoregressive tokens just to classify user intent or pick a discrete decision is an expensive anti-pattern. Instead of waiting for a language model to emit full text tokens, decision models frame classification as candidate sentence completion, scoring each option via logit probabilities in a single forward pass.

Benchmarking this approach on Qwen 2.5 7B reveals that direct logit scoring runs 7 to 54 times faster than traditional autoregressive generation while matching or exceeding classification accuracy. Constraining each candidate option to a single-token identifier prevents latency degradation even when the choice set expands to dozens of options.

Calibration requires careful handling. While base language models produce relatively well-calibrated confidence scores, instruction-tuned models tend to be significantly overconfident. Applying temperature scaling can reduce Expected Calibration Error from 0.10 down to 0.03 when evaluated against task-specific labeled data.

Skipping token decoding turns a heavy generative pipeline into a lightning-fast classifier.
