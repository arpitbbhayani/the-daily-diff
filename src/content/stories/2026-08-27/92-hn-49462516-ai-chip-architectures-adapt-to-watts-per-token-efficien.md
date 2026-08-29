---
title: AI chip architectures adapt to watts per token efficiency
source: hn
url: https://openrating.io/blog/current-state-of-ai-chips
date: '2026-08-27'
tags:
- ai-chips
- asic
- catchup
- gpu
- hn
- silicon-architecture
- sram-engine
- watts-per-token
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49462516'
comments: https://news.ycombinator.com/item?id=49462516
why_read: Read this to understand the current landscape of AI chip architectures,
  their underlying mechanisms, and how the economic bottleneck has shifted from raw
  FLOPs to watts-per-token efficiency.
authors:
- m00dy
---

Understanding the true cost and performance of LLMs goes beyond raw FLOPs; it is about Tokens Per Megawatt. This article brilliantly breaks down the current state of AI chips, moving past generic GPU discussions to deep-dive into specialized architectures.

You will learn about programmable SIMT GPUs, compile-time systolic ASICs like Google's TPUs, wafer-scale SRAM engines such as Cerebras, and even frontier lab custom silicon from OpenAI. Each design presents unique trade-offs in flexibility, memory access, and power efficiency for both prefill and decode phases of LLM inference.

This level of architectural detail is vital for anyone designing scalable AI systems. It helps you see why a datacenter capped at 50 megawatts prioritizes sustained tokens per megawatt over theoretical peak FLOPs. A must-read to truly grasp the hardware bottlenecks and innovations driving AI infrastructure.
