---
title: FreeToken efficiently serves MoE models on edge with adaptive execution
source: hn
url: https://arxiv.org/abs/2608.16157
date: '2026-08-24'
tags:
- adaptive-execution
- catchup
- edge-computing
- hn
- local-ai
- moe-serving
- resource-management
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 9
hn_id: '49427074'
comments: https://news.ycombinator.com/item?id=49427074
why_read: Read this to understand how FreeToken enables efficient serving of large
  Mixture-of-Experts (MoE) models on edge devices by adaptively utilizing heterogeneous
  resources. You will learn how personal machines can become practical platforms for
  frontier-scale intelligence.
authors:
- Shuo Yang
- Xiaoze Fan
- Melissa Pan
- Haocheng Xi
- Zhe Wang
- Shanlin Sun
- Kurt Keutzer
- Song Han
- Matei Zaharia
- Chenfeng Xu
- Ion Stoica
---

Serving frontier-scale Mixture-of-Experts (MoE) models typically demands datacenter infrastructure, but FreeToken shatters this assumption. This new system transforms personal machines into unified, elastic inference platforms, making massive LLMs like GLM-5.2 (753B) deployable on a single workstation GPU.

FreeToken's innovation lies in its co-design of the entire serving stack: from model layout to expert residency, CPU-GPU execution, and agentic state reuse. It dynamically maps computation and model state to available resources, adapting to continuously changing agent workloads and heterogeneous edge hardware.

This means you can run powerful coding and tool-using agents locally, reducing reliance on cloud APIs and opening up new possibilities for privacy-preserving and low-latency AI applications. It changes what your existing machines can practically serve, turning open weights into deployable local software.
