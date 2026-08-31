---
title: HTDYM optimizes LLM deployment for maximum intelligence-per-dollar
source: hn
url: https://www.sailresearch.com/blog/htdym
date: '2026-08-29'
tags:
- catchup
- cost-optimization
- hardware-selection
- hn
- htdym
- llm-inference
- model-deployment
- performance-modeling
- sharding
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49493616'
comments: https://news.ycombinator.com/item?id=49493616
why_read: This article introduces HTDYM, an open-source tool for optimizing large
  language model deployment by evaluating hardware and sharding configurations to
  maximize intelligence-per-dollar.
authors:
- Ben Mayer
---

Optimizing LLM inference costs and performance means deeply understanding hardware and sharding. Sail Research open-sourced HTDYM, their internal performance modeling tool, to tackle exactly this.

HTDYM ranks various chips and sharding configurations for specific LLM workloads. It factors in model types (MoE, dense), precision (MXFP8, BF16), and workload phases (compute-bound prefill vs. memory-bound decode), revealing that a chip good for one phase might be mediocre for another. Sharding choices alone can impact tokens per dollar by over 3x.

This is not about finding the 'best' chip, but the most cost-effective one for your specific scenario. You gain a framework for systematically evaluating trade-offs, ensuring your AI infrastructure truly maximizes intelligence-per-dollar rather than just raw FLOPs.
