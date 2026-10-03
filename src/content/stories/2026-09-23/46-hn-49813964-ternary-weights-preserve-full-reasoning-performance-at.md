---
title: Ternary weights preserve full reasoning performance at extreme compression
source: hn
url: https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf
date: '2026-09-23'
tags:
- catchup
- gguf
- hn
- hybrid-attention
- llama-cpp
- llm-quantization
- sub-4-bit
- ternary-weights
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49813964'
comments: https://news.ycombinator.com/item?id=49813964
why_read: Learn how end-to-end ternary quantization retains 98.2% of baseline reasoning
  intelligence within a 5.9 GB footprint. It details how custom low-bit kernels enable
  practical on-device deployment of 27B-class reasoning models without catastrophic
  degradation.
authors:
- Prism ML
---

Running a 27-billion parameter reasoning model locally has historically required high-end server hardware or multiple GPUs. A new open source ternary quantization release, Bonsai 2 27B, shrinks the full model footprint from 54 gigabytes down to under 6 gigabytes.

The model achieves this reduction by utilizing an end-to-end ternary weight representation averaging 1.72 bits per weight across embeddings, attention projections, and feed-forward layers. Unlike earlier low-bit quantization approaches that collapse during multi-step logic, this ternary implementation retains over 98 percent of baseline 16-bit performance across complex thinking and coding benchmarks.

By pairing a hybrid-attention architecture with custom inference kernels in llama.cpp, the model sustains generation speeds near 47 tokens per second on consumer hardware while supporting a 262 thousand token context window.

This shift proves that radical weight compression can preserve deep reasoning capabilities without relying on expensive cloud infrastructure.
