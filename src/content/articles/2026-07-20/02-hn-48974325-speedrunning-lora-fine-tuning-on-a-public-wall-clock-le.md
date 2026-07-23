---
authors:
- Saivineeth147
- stared
comments: https://news.ycombinator.com/item?id=48974325
date: '2026-07-20'
hn_id: '48974325'
image: /infographics/02-hn-48974325.jpg
interest_score: 9
section: ai
source: hn
tags:
- catchup
- gpu-performance
- gsm8k
- hn
- leaderboard
- lora-fine-tuning
- model-optimization
- qwen2.5-1.5b
- speedrun
title: Speedrunning LoRA fine-tuning on a public wall-clock leaderboard
url: https://github.com/Saivineeth147/lora-speedrun
why_read: This describes a competitive challenge to achieve the fastest LoRA fine-tuning
  of Qwen2.5-1.5B on GSM8K using an L40S GPU. Readers will learn about a unique approach
  to model optimization and benchmarking, including specific techniques used for record-breaking
  performance.
---

Optimizing LoRA fine-tuning on LLMs can be incredibly challenging, but a new public leaderboard, "LoRA Speedrun," is showing what is truly possible. It benchmarks wall-clock times for Qwen2.5-1.5B on GSM8K using a single L40S GPU, pushing the boundaries of efficiency.

The current record holder achieved 1 minute 44 seconds through a combination of techniques: aggressive learning rates, custom GPU-resident packed loops, and chunked completion-only cross-entropy loss. These are not just minor tweaks; they represent deep, low-level optimizations that senior engineers can learn from and adapt.

This project provides a unique opportunity to see, measure, and replicate practical LLM infrastructure optimizations. It is a fantastic resource for anyone looking to squeeze maximum performance out of their fine-tuning workflows and truly understand the engineering trade-offs.