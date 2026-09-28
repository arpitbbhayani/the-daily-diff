---
title: Glyd enables lossless model compression directly inside GPU matrix multiplication
source: hn
url: https://getglyd.com/
date: '2026-09-27'
tags:
- bf16
- catchup
- gpu-memory
- hn
- lossless-compression
- tensor-cores
- weight-packing
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49868130'
comments: https://news.ycombinator.com/item?id=49868130
why_read: Learn how Glyd reduces open model GPU memory requirements by thirty-three
  percent without losing numerical precision. It shows how unpacking compressed weights
  directly during matrix multiplication saves hardware and speeds up inference.
authors:
- surya-koritala
---

Running large language models often hits an immediate memory wall where fitting a model like Qwen3-32B requires stepping up to multi-GPU nodes. Glyd introduces a lossless compression approach that packs standard bf16 model weights into roughly 11 bits instead of 16.

The compression happens bit for bit without altering weight precision. Decoding occurs directly inside the GPU tensor core matrix multiplication kernels, eliminating memory transfer bottlenecks while maintaining exact bf16 values.

Benchmarks show a 32 to 33 percent reduction in memory footprint across models ranging from SmolLM to large open-weight architectures. On single GPUs, this translates to fitting 32B parameter models into 48 GB cards with up to 28 percent lower GPU time per token under batched workloads.

In-kernel decompression shifts the bottleneck from memory bandwidth back to compute efficiency, changing the economics of single-node inference.
