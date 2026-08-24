---
title: ArXiv Paper
source: arxiv
url: https://arxiv.org/abs/49397868
date: '2026-08-22'
tags:
- arxiv
- catchup
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
arxiv_id: '49397868'
categories: ''
why_read: You should read this to understand a novel approach for deploying large
  Mixture-of-Experts (MoE) models on edge devices, learning about techniques for bandwidth-adaptive
  execution, expert residency, and runtime memory management for agent workloads.
---

Deploying frontier-scale Mixture-of-Experts (MoE) models on edge devices like laptops or gaming desktops has been a significant challenge due to resource constraints. FreeToken presents a groundbreaking system that makes this practical by fundamentally rethinking the serving stack.

The paper introduces a full co-design approach, spanning model layout, expert residency, CPU-GPU execution, agentic state reuse, and runtime memory management. This is not just about offloading; it is about continuously mapping computation and model state onto whatever heterogeneous resources are actually available, adapting to changing agent workloads.

The results are compelling: FreeToken enables serving 35B models on a laptop, 284B on a gaming desktop, and even the 753B GLM-5.2 on a single workstation GPU. This transforms personal machines into viable platforms for large-scale AI, effectively turning open weights into deployable local software.

This is a must-read for anyone building practical AI applications and struggling with the deployment challenges of large models on constrained hardware.
