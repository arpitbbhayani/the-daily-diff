---
title: Layer streaming enables large LLM fine-tuning on laptop GPUs
source: github
url: https://github.com/MakazhanAlpamys/Soup
date: '2026-08-04'
tags:
- catchup
- declarative-configuration
- fine-tuning
- github
- gpu-optimization
- large-language-models
- layer-streaming
- low-resource-training
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49166984'
comments: https://news.ycombinator.com/item?id=49166984
why_read: This tool simplifies large language model fine-tuning with a single YAML
  configuration, demonstrating how layer streaming allows training 8B models on a
  4 GB laptop GPU.
authors:
- Makazhan Alpamys
---

Fine-tuning an 8B language model on a laptop with only 4GB of GPU memory sounds impossible, yet a new tool named Soup makes this a reality through an ingenious technique called layer streaming. This method keeps the frozen base model layers out of VRAM, feeding them to the GPU one decoder layer at a time.

This is a game-changer for democratizing LLM development and applied AI. Imagine the possibilities for experimentation and prototyping without requiring expensive cloud GPUs or high-end workstations.

The project reports successful fine-tuning of Llama-3.1-8B-Instruct with NF4 on an RTX 3050 Laptop, achieving 119.6 tokens per second. This demonstrates serious innovation in LLM infrastructure optimization.

Engineers building applied AI systems on a budget or with limited hardware will find this incredibly useful.
