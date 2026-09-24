---
title: Go System One optimizes Gemma 4 12B inferences with native Go
source: github
url: https://github.com/rcarmo/go-system-one
date: '2026-09-22'
tags:
- catchup
- gemma-model
- github
- go-system-one
- inference-optimization
- jevbench
- low-latency
- native-go
- nvidia-driver-api
- performance
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49804080'
comments: https://news.ycombinator.com/item?id=49804080
why_read: This project details how to optimize Gemma 4 12B model inference for low-latency
  decisions using a native Go runtime and direct NVIDIA driver API interaction. Readers
  will learn about a practical approach to achieving high performance in AI model
  deployment.
authors:
- rcarmo
---

Building a custom LLM inference engine in pure Go, ditching CGo, llama.cpp, and CUDA toolkit, and directly integrating hand-tuned NVIDIA PTX kernels? This project shows it is not only possible but can lead to dramatic performance gains.

The team achieved a latency reduction on an RTX 3060 from 521ms down to a median of 72.80ms for Gemma 4 12B. This is not just incremental; it is an order of magnitude improvement by going bare metal, taking control of the entire inference stack.

This effort highlights the power of deep vertical integration and understanding the underlying hardware. It is a masterclass in optimizing LLM infrastructure for specific deployment scenarios.
