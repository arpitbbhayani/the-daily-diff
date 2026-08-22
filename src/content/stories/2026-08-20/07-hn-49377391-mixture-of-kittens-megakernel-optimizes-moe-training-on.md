---
title: Mixture-of-Kittens megakernel optimizes MoE training on NVL72s
source: hn
url: https://cursor.com/blog/mixture-of-kittens
date: '2026-08-20'
tags:
- catchup
- communication-computation-fusion
- gpu-training
- hn
- megakernel
- mixture-of-experts
- mixture-of-kittens
- nvl72
- performance-optimization
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49377391'
comments: https://news.ycombinator.com/item?id=49377391
why_read: This introduces Mixture-of-Kittens (MoK), an open-source megakernel that
  dramatically optimizes Mixture-of-Experts (MoE) training on NVL72s by fusing communication
  and computation. Readers will learn about a novel approach to overcome MoE training
  bottlenecks on specific hardware architectures.
authors:
- gmays
---

Scaling Mixture-of-Experts (MoE) models, especially for agentic AI, faces a critical bottleneck: the MoE layer. Cursor's new open-source "Mixture-of-Kittens" (MoK) megakernel directly tackles this by fusing all communication and computation into a single, fully deterministic kernel, specifically for NVL72s.

This is not just an incremental improvement; it is a fundamental redesign that considers the unique architecture of multi-node, single NVLink domain systems. By minimizing CPU-side work and aggressive GPU-side fusion, MoK cuts down a bottleneck that can consume over half of end-to-end training time.

Engineers working with large-scale LLM training and advanced GPU clusters will find this approach incredibly valuable. It demonstrates how deep hardware-software co-design can unlock significant performance gains for modern AI workloads, moving beyond general optimizations to highly specialized solutions.

This changes how you think about optimizing complex AI model architectures.
