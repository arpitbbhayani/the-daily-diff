---
authors:
- VinayUPrabhu
comments: https://news.ycombinator.com/item?id=49038788
date: '2026-07-24'
depth_score: 9
hn_id: '49038788'
image: /infographics/49-hn-49038788.jpg
interest_score: 8
novelty_score: 9
section: ai
source: hn
tags:
- algorithm-expression
- catchup
- hn
- no-training
- torchwright
- transformer-architecture
- weight-computation
title: Torchwright computes transformer weights for explicit algorithm implementation
url: https://ood.dev/posts/torchwright-intro/
utility_score: 7
why_read: This post introduces torchwright, a novel tool for computing exact transformer
  weights to implement algorithms explicitly. Readers will learn about an approach
  to determine the architectural limits of transformers by bypassing the training
  process.
---

Transformers are widely known to be Turing complete, but what does that truly mean for their practical capabilities beyond observed training performance? A new tool, Torchwright, provides a groundbreaking answer by compiling computation graphs directly into vanilla transformer weights, effectively reverse-engineering algorithms into the model architecture.

This innovative approach allows researchers to demonstrate what specific algorithms a transformer architecture can explicitly express, entirely bypassing the complexities and noise of the training process. For example, a Phi-3 model was shown incrementing binary numbers perfectly, with zero training required.

This is not merely an academic exercise. Understanding the fundamental architectural limits and intrinsic computational capabilities of LLMs is crucial for advancing AI agent design, reasoning, and system robustness. It shifts our focus from simply what models learn to what they are inherently wired to compute.