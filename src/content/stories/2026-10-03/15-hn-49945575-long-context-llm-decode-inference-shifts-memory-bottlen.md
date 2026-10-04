---
title: Long-context LLM decode inference shifts memory bottlenecks to KV cache
source: hn
url: https://jaehun.me/en/posts/paper-2609-30854v1/
date: '2026-10-03'
tags:
- arithmetic-intensity
- catchup
- hn
- kv-cache
- llm-inference
- memory-wall
- quantization
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49945575'
comments: https://news.ycombinator.com/item?id=49945575
why_read: Read this to understand the exact crossover points where KV cache bandwidth
  overtakes model weights during LLM generation. It establishes a unified analytical
  framework for evaluating long-context optimization strategies across modern hardware.
authors:
- Tejinder Singh
---

Long-context large language model inference is constrained by memory bandwidth rather than arithmetic compute. During single-batch autoregressive decode, the arithmetic intensity of 16-bit weights is merely one FLOP per byte, which represents less than one percent of the ridge point on modern hardware like the NVIDIA H100.

As input sequence lengths grow, the primary memory bottleneck transitions abruptly from model weights to the key-value cache. This crossover point depends directly on batch size, decreasing hyperbolically as concurrency increases. Once past this threshold, memory bandwidth pressure is dominated entirely by moving cached key-value tensors rather than loading model parameters.

Understanding this structural shift clarifies why optimizations like two-bit quantization behave unpredictably across workloads. That same quantization kernel yields a modest 1.25x speedup at batch size one, but achieves 4.82x acceleration at batch size 32 because the serving engine operates in an entirely different operational regime.

Hardware efficiency in modern inference engines is fundamentally determined by managing key-value memory bandwidth rather than raw compute FLOPS.
