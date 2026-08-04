---
title: AirLLM Reduces GPU Memory for Large Language Model Inference
source: github
url: https://github.com/lyogavin/airllm
date: '2026-08-02'
tags:
- catchup
- github
- gpu-memory-reduction
- large-language-models
- model-inference
- per-expert-streaming
- sparse-moe
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49142538'
comments: https://news.ycombinator.com/item?id=49142538
why_read: Read this to understand how AirLLM enables large language models to run
  on single, low-memory GPUs. You will learn about the technique of per-expert streaming
  for efficient inference with sparse MoE models.
authors:
- lyogavin
---

Running multi-trillion parameter LLMs on consumer GPUs felt like a distant dream, but AirLLM is making it a reality. This project demonstrates how to run Kimi K3 (2.8T parameters) on a single 4GB GPU, bypassing quantization, distillation, or pruning.

The secret lies in optimizing sparse Mixture-of-Experts (MoE) models. Instead of loading an entire layer, AirLLM leverages per-expert streaming, loading only the experts a token actually routes to. This drastically cuts down VRAM requirements.

This is a game-changer for anyone struggling with LLM deployment costs and hardware constraints. It proves that clever memory management can unlock capabilities previously reserved for high-end data centers.
