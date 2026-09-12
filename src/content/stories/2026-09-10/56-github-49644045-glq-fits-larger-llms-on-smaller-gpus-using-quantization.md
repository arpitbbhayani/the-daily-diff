---
title: GLQ fits larger LLMs on smaller GPUs using quantization
source: github
url: https://github.com/cnygaard/glq
date: '2026-09-10'
tags:
- catchup
- github
- gpu-memory-optimization
- huggingface-transformers
- lattice-coded-quantization
- llm-quantization
- mixed-precision
- trellis-coded-quantization
- vllm
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49644045'
comments: https://news.ycombinator.com/item?id=49644045
why_read: Read this to understand how lattice and trellis-coded quantization can reduce
  LLM memory footprint, enabling larger models to run on more accessible GPUs. It
  details the performance benefits of trellis-coded quantization for efficient LLM
  inference.
authors:
- cnygaard
---

Deploying large language models on limited GPU memory is a constant challenge. GLQ offers a compelling solution with its lattice and trellis-coded post-training quantization, directly integrating as a vLLM plugin.

This project goes deep, supporting 2-8 bits per weight and leveraging fused CUDA tensor-core inference. The results are impressive: trellis-coded quantization achieved a PPL of 11.94 at 2 bits per weight on SmolLM3-3B, significantly outperforming a lattice path at 13.79 (bf16 baseline was 9.12).

It means you can run larger LLMs on GPUs like a 24 GB 3090 or A10G, achieving better efficiency without sacrificing too much quality. This is a game-changer for practical LLM deployment and cost optimization.
