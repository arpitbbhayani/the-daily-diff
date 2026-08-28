---
title: Axera AX8850 NPU Supports Direct GGUF Model Execution
source: github
url: https://github.com/woolcoxm/LLMTest
date: '2026-08-26'
tags:
- axera-ax8850
- catchup
- gguf
- github
- llama.cpp
- model-quantization
- npu
- qwen3-0.6b
- raspberry-pi-5
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49447090'
comments: https://news.ycombinator.com/item?id=49447090
why_read: This document details how a custom llama.cpp backend enables direct GGUF
  model execution on the Axera AX8850 NPU, eliminating conversion steps. Readers will
  understand its performance for various quantization modes on a Raspberry Pi 5.
authors:
- woolcoxm
---

Deploying LLMs efficiently on edge hardware is a significant challenge, but this project demonstrates a highly effective solution. It features a custom `llama.cpp` backend, `ggml-axcl`, that runs Qwen3-0.6B models directly from GGUF files on an Axera AX8850 NPU accelerator card, all hosted on a Raspberry Pi 5.

The core innovation is patching GGUF weights into pre-compiled, whole-layer NPU engines at load time, entirely bypassing the need for per-model conversion or compilation steps. This streamlines deployment for both Q8_0 and Q4_K_M quantizations, providing impressive performance metrics for various modes like GGUF-int8.

This project offers a deep dive into practical LLM inference optimization, complete with concrete numbers on token generation rates and memory usage. If you are exploring how to get serious LLM performance out of compact, low-power systems, this repository provides an excellent blueprint and performance data.

It is a concrete example of pushing LLMs to the edge.
