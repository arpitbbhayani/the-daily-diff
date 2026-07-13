---
title: ZML/LLMD Inference Server Supports Diverse LLMs and Hardware
source: hn
url: https://zml.ai/posts/llmd/
date: '2026-07-08'
tags:
- catchup
- continuous-batching
- hn
- huggingface-integration
- llm-inference
- multi-architecture
- paged-attention
- prefix-caching
- speculative-decoding
- tensor-parallel-sharding
- tool-calling
- zero-copy-loading
- zml-llmd
score: 15
hn_id: '48829412'
comments: https://news.ycombinator.com/item?id=48829412
why_read: This post introduces ZML/LLMD, a self-contained inference server designed
  to run various LLMs efficiently across diverse hardware. Readers will learn how
  it consolidates advanced serving features and performance optimizations like speculative
  decoding into a single, highly compatible solution.
authors:
- steeve
author: steeve
---

Deploying LLMs effectively across a spectrum of hardware, from NVIDIA GPUs to Apple Metal, is a complex problem. ZML/LLMD alpha simplifies this with a self-contained inference server that brings advanced features to all platforms.Engineers often struggle with optimizing throughput and latency. This server offers modern serving capabilities such as continuous batching, paged attention, and tensor parallel sharding, which are crucial for high-performance LLM serving.A particularly compelling feature is DFlash speculative decoding, which can accelerate token generation by up to 10x on supported models. This translates directly to significant cost savings and faster user experiences.This solution eliminates the headache of custom integrations for different architectures and offers zero-copy loading from sources like HuggingFace and S3. Leverage these powerful features to optimize your LLM deployments.
