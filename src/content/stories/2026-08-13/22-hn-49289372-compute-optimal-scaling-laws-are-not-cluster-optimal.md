---
title: Compute-optimal scaling laws are not cluster-optimal
source: hn
url: https://szha.ai/blog/compute-optimal-is-not-cluster-optimal/
date: '2026-08-13'
tags:
- catchup
- flops
- gpu-hours
- hn
- llm-training
- model-flops-utilization
- mosaic-framework
- scaling-laws
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49289372'
comments: https://news.ycombinator.com/item?id=49289372
why_read: This post explains why optimizing for FLOPs does not equate to optimizing
  for GPU-hours in LLM training. Readers will understand the limitations of traditional
  scaling laws and learn about the MOSAIC framework for cluster-optimal model design.
authors:
- Sheng Zha
---

The common wisdom of "compute-optimal" scaling laws for ML model training often hits a wall in the real world: clusters do not bill FLOPs, they bill GPU-hours. This means optimizing for theoretical compute is not the same as optimizing for actual cluster cost and efficiency.

This article highlights that factors like Model Flops Utilization (MFU) and "goodput" (how often a job actually runs) are critical. A model that looks efficient on paper might be significantly more expensive or slower to train in practice due to poor MFU or frequent interruptions.

For senior engineers building and scaling AI infrastructure, this is a crucial distinction. It prompts a shift towards a "cluster-optimal" mindset, where architectural choices are co-optimized with distributed execution layouts for tangible economic and performance gains.
