---
authors:
- mfiguiere
comments: https://news.ycombinator.com/item?id=49170794
date: '2026-08-04'
depth_score: 9
hn_id: '49170794'
image: /infographics/01-hn-49170794.jpg
interest_score: 9
novelty_score: 9
section: ai
source: hn
tags:
- catchup
- communication-computation-fusion
- hn
- kernel-optimization
- megakernel
- mixture-of-experts
- moe-training
- nvl72
title: Mixture-of-Kittens megakernel optimizes MoE training on NVL72s
url: https://cursor.com/blog/mixture-of-kittens
utility_score: 9
why_read: This post introduces Mixture-of-Kittens, an open-source megakernel that
  addresses the major bottleneck in Mixture-of-Experts training. Readers will learn
  about a novel approach to fuse all MoE communication and computation for significant
  performance gains, particularly on NVL72 systems.
---

Scaling Mixture-of-Experts (MoE) layers in LLMs, especially for agentic models, has been a major bottleneck. Cursor.com is tackling this head-on by open-sourcing 'Mixture-of-Kittens' (MoK), a production MoE training megakernel designed for NVL72s.

MoK's brilliance lies in fusing all MoE communication and computation into a single, fully deterministic kernel. This redesign fundamentally addresses the communication overhead that often limits performance on multi-node, single NVLink domain hardware like the NVL72, especially when integrated Grace CPUs are slower than their GPU counterparts.

For anyone building or operating large-scale AI agents, understanding this level of optimization is crucial. It is a prime example of deep kernel engineering solving a real-world, high-impact problem in LLM infrastructure, leading to more efficient and scalable agent training.