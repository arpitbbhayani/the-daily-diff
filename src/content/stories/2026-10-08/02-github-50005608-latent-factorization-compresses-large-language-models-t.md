---
title: Latent factorization compresses large language models to sub-one-bit regimes
source: github
url: https://github.com/SamsungLabs/LittleBit
date: '2026-10-08'
tags:
- catchup
- github
- joint-iterative-quantization
- latent-factorization
- quantization-aware-training
- sub-1-bit-quantization
section: ai
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '50005608'
comments: https://news.ycombinator.com/item?id=50005608
why_read: Read this to understand how factorizing dense weight matrices into low-rank
  binary factors enables extreme compression down to 0.1 bits per weight without altering
  the model architecture.
authors:
- Banseok Lee
- Dongkyu Kim
- Youngcheon You
- Youngmin Kim
image: /infographics/02-github-50005608.jpg
---

Compressing large language models below 1-bit per parameter usually destroys downstream reasoning capabilities. Samsung Labs open-sourced LittleBit and LittleBit-2, demonstrating effective sub-1-bit compression down to 0.1 bits per weight.

Rather than quantizing weights directly, the method factorizes dense matrices into low-rank latent representations, binarizes those latent factors, and recovers dynamic range using learned per-channel scale vectors. Inference preserves the original architecture without requiring bespoke execution kernels.

LittleBit-2 refines this pipeline by resolving latent geometry misalignment prior to quantization-aware training. By running Internal Latent Rotation with Joint Iterative Quantization, the algorithm aligns SVD-derived latent factors directly onto the binary hypercube.

This framework provides a mathematically rigorous blueprint for squeezing massive models onto edge hardware with minimal spectral energy loss.
