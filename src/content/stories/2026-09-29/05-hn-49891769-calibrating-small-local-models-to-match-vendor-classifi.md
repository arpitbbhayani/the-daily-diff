---
title: Calibrating small local models to match vendor classifications reliably
source: hn
url: https://jevstiller.pages.dev/posts/the-guarantee/
date: '2026-09-29'
tags:
- catchup
- hn
- latency-optimization
- model-distillation
- out-of-distribution-detection
- routing-policy
- sentence-embeddings
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49891769'
comments: https://news.ycombinator.com/item?id=49891769
why_read: Understand how to build a fast local surrogate model that provably matches
  a remote model's accuracy via calibrated routing policies and out-of-distribution
  checks.
authors:
- tgluck
image: /infographics/05-hn-49891769.jpg
---

Every classification step inside an agent loop does not need a round-trip to a frontier LLM. When every decision point takes 300 milliseconds over the network, classification latency quickly consumes your entire execution budget.

Jevstiller solves this bottleneck by distilling repeated API responses into a tiny local linear model on top of frozen sentence embeddings (bge-small). Running via ONNX on standard CPUs, the local head returns decisions in 15 milliseconds.

The critical design choice is not the model size, but its calibrated routing contract. Rather than relying on simple softmax confidence heuristics, it combines full-distribution cross-entropy training with k-nearest-neighbour out-of-distribution detection. You set an allowable disagreement bound, such as two percent, and the local head only answers requests where the statistical guarantee holds, falling back to the remote API for the rest.

Treating distillation as a calibrated routing layer lets you slash operational costs and latency while preserving model behavior guarantees.
