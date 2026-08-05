---
authors:
- Anon84
comments: https://news.ycombinator.com/item?id=49154228
date: '2026-08-03'
depth_score: 8
hn_id: '49154228'
image: /infographics/08-github-49154228.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- airllm
- catchup
- expert-streaming
- github
- gpu
- inference
- large-language-models
- memory-reduction
- sparse-moe-models
title: AirLLM runs large language models on small GPUs via expert streaming
url: https://github.com/lyogavin/airllm
utility_score: 9
why_read: This text introduces AirLLM, a method for running massive language models
  on GPUs with limited VRAM. Readers will learn how it achieves this through per-expert
  streaming for sparse MoE models, avoiding quantization.
---

Imagine running a 70B LLM on a single 4GB GPU, or even a colossal 2.8T Kimi K3 model on less than 4GB of VRAM. AirLLM makes this astonishing feat possible without resorting to quantization, distillation, or pruning.

The magic happens through "per-expert streaming" for sparse Mixture-of-Experts (MoE) models. Instead of loading an entire layer into memory, AirLLM streams only the specific experts that a token routes to at any given time. This fundamentally changes the VRAM bottleneck.

This is a game-changer for deploying truly massive LLMs on consumer hardware or edge devices, dramatically lowering the entry barrier for advanced AI applications. It is a brilliant example of system-level optimization for LLM inference.

This innovative approach is essential knowledge for anyone building or deploying large language models.