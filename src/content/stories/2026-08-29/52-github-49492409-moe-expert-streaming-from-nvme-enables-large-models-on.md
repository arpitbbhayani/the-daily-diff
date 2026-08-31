---
title: MoE expert streaming from NVMe enables large models on consumer PCs
source: github
url: https://github.com/tmxkzm1925-max/MoE-Direct
date: '2026-08-29'
tags:
- catchup
- github
- large-language-models
- memory-offloading
- mixture-of-experts
- nvme-streaming
- resource-constrained-ai
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49492409'
comments: https://news.ycombinator.com/item?id=49492409
why_read: This explains how to run large Mixture-of-Experts models on consumer PCs
  by streaming experts from NVMe, offering a solution for memory-constrained AI deployment.
authors:
- tmxkzm1925-max
---

Running massive Mixture-of-Experts (MoE) LLMs on consumer hardware often feels like a pipe dream, given their memory footprint. A new project, MoE-Direct, changes this by intelligently streaming experts from NVMe storage directly into memory, enabling models far larger than your RAM.

Consider a Qwen3.5-122B model (72.8GB) running on a machine with just 32GB of RAM and an RTX 5080. MoE-Direct makes this possible with byte-preserving accuracy and impressive decode speeds (5.59-5.69 tok/s), validated to be token-identical to traditional mmap loading.

This is not a hack involving re-quantization or routing changes. It is a fundamental architectural optimization for MoE models, treating NVMe as an extension of your memory for the expert layers. This opens significant possibilities for local AI development, experimentation, and even cost-effective inference.

Unlock immense LLM capabilities on your existing desktop.
