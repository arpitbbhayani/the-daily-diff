---
title: Cross-model trajectory transport enables closed-form weight surgery
source: github
url: https://github.com/dsadawq3/DynamicTune
date: '2026-10-02'
tags:
- catchup
- github
- hidden-trajectory-transport
- knowledge-distillation
- model-compression
- orthogonal-procrustes-atlas
- weight-surgery
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49937109'
comments: https://news.ycombinator.com/item?id=49937109
why_read: Learn how aligning hidden representation trajectories enables direct weight
  surgery between different transformer architectures without requiring massive training
  compute.
authors:
- dsadawq3
---

Knowledge distillation typically requires hundreds of billions of tokens, massive synthetic data pipelines, and weeks of GPU compute. DynamicTune offers an alternative by treating the transformer stack as a discrete dynamical system over depth, transferring informational trajectory fields directly.

Instead of running token-level cross-entropy loss across GPU clusters, the system aligns representation trajectories using a local orthogonal Procrustes atlas. It then solves for closed-form weight updates inside the student model MLP layers, enabling cross-dimension capability transport such as moving Qwen 4B parameters into an 0.8B student on consumer hardware.

This mathematical formulation circumvents standard multi-node training overhead by operating on geometric trajectories rather than iterative gradient descent over large corpora.

Direct closed-form weight surgery opens practical paths for downstream model compression on constrained hardware.
