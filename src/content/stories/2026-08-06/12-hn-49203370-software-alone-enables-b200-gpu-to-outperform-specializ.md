---
title: Software alone enables B200 GPU to outperform specialized inference hardware
source: hn
url: https://runinfra.ai/news/b200-beats-the-lpu
date: '2026-08-06'
tags:
- b200-gpu
- catchup
- gpu-performance
- hn
- llm-inference
- software-optimization
- specialized-inference-hardware
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49203370'
comments: https://news.ycombinator.com/item?id=49203370
why_read: This article demonstrates how advanced software optimization can significantly
  boost LLM inference performance on general-purpose GPUs like the B200. Readers will
  learn that existing hardware, when properly optimized, can rival or even surpass
  specialized inference silicon.
authors:
- OsamaJaber
---

One B200 GPU, purely with software optimizations, can achieve LLM inference speeds that rival specialized hardware like Groq's LPU and Cerebras. This highlights a significant untapped potential in existing GPUs.

The author pushed throughput from 411 tokens/second to 1,366 tokens/second for multi-prompt and 2,215 tokens/second for single-prompt scenarios, without any custom kernel writes or recompilation. This was achieved through agents that generate and tune GPU kernels, including fusing decode steps into persistent kernels to keep intermediates on-chip.

This article demonstrates that the bottleneck is often not the silicon, but the software. It provides a blueprint for dramatically improving inference performance on the hardware you already own.
