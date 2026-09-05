---
title: PicoLM delivers faster SIMD GPU inference for Llama 2-family models
source: github
url: https://github.com/whoreson/picolm/
date: '2026-09-03'
tags:
- catchup
- flashattention-2
- gguf
- github
- gpt-2
- gpu-inference
- kv-cache
- llama-2
- rocm-cuda
- simd
- tensor-cores
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 9
hn_id: '49547323'
comments: https://news.ycombinator.com/item?id=49547323
why_read: This project description introduces PicoLM, a C-based inference engine that
  aims to be faster and simpler than llama.cpp for various large language models.
  Readers will learn about its advanced GPU optimization features like Tensor Core
  kernels and FlashAttention-2.
authors:
- whoreson
---

PicoLM v1.0-rc1 has arrived, aiming to be a faster and simpler pure C inference engine for Llama 2, GPT-2, Gemma-3n, and Qwen 3.x GGUF files. This project is not just an incremental improvement; it boasts a complete GPU architecture rewrite, leveraging device-native pipelines over older CPU-to-GPU data transfers.

Expect significant performance gains from innovations like IMMA Tensor Core kernels across various quant types, FlashAttention-2 prefill kernels, and shared-memory staged IMMA W16 Split-K decode attention. It even moves KV cache and many elementwise operations to be GPU-resident. The focus here is on cutting-edge, low-level optimization for LLM inference.

This is a crucial development for anyone focused on optimizing LLM inference on consumer hardware, potentially offering a new benchmark for local model deployment.
