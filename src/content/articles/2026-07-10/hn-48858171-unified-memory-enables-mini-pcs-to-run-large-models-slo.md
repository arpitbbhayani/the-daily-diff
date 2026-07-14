---
title: Unified Memory Enables Mini PCs to Run Large Models Slowly
source: hn
url: https://vettedconsumer.com/unified-memory-explained-why-mini-pcs-can-run-70b-models-a-big-gpu-cant-and-where-they-slow-down/
date: '2026-07-10'
tags:
- ai-inference
- catchup
- gpu
- hn
- large-language-models
- memory-architecture
- mini-pc
- unified-memory
- vram
score: 72
hn_id: '48858171'
comments: https://news.ycombinator.com/item?id=48858171
why_read: This text explains how unified memory allows mini PCs to run large language
  models that traditional GPUs cannot fit, despite being slower. It illuminates the
  trade-offs in memory architecture for local AI inference.
authors:
- ermantrout
author: ermantrout
---

Ever wonder why a $2000 mini PC can run a 70B language model, while a high-end $2000 RTX 5090 with 32GB VRAM cannot? The secret lies in unified memory.

Traditional desktops split CPU RAM and GPU VRAM, with data shuttling over PCIe. This means your 70B model, needing ~40GB (at 4-bit quant), simply cannot fit on a 32GB GPU, regardless of your system RAM.

Unified memory architectures-seen in Apple Silicon, AMD Strix Halo, and others-combine these pools. A 128GB unified memory mini PC effectively offers 128GB of "VRAM" for your model, allowing it to load. The trade-off is speed; it will run much slower than a discrete GPU, but it runs.

This is a critical architectural shift for local LLM inference, pushing the boundaries of what consumer hardware can achieve.
