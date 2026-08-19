---
title: Local LLM Inference Throughput Depends on Holistic System Fit
source: hn
url: https://piszczek.pl/blog/qwen38-27b-256k-50-tps-24gb-gpu
date: '2026-08-17'
tags:
- catchup
- gpu-inference
- hn
- llama.cpp
- quantization
- qwen3.8
- speculative-decoding
- throughput
- vram
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49331607'
comments: https://news.ycombinator.com/item?id=49331607
why_read: This article explains how to optimize local LLM inference for high throughput
  on limited GPU memory. Readers will learn that holistic system tuning and component
  fit are crucial for maximizing performance, rather than relying solely on individually
  'best' parts.
authors:
- "Micha\u0142 Piszczek"
---

You can achieve 50 tokens per second with Qwen3.8 27B on a consumer-grade 24 GB GPU, even with a massive 256K token context window. This blog post details an incredible feat of LLM inference optimization that goes beyond just better hardware.

The author shows how carefully combining a custom llama.cpp build, an MTP drafter for speculative decoding, specific quantization, and meticulous memory layout configuration yielded a 21.97 percent gain over a clean llama.cpp master. Against greedy decoding, the MTP drafter alone delivered a 2.81x throughput improvement.

What stands out is the nuanced approach: no single component won on its own. The best local inference setup arose from the synergy of all parts working together. Even with a genuinely occupied 256K cache, the system still produced 12.61 tokens per second without an out-of-memory error.

This is a masterclass in getting production-ready performance from large language models on limited resources. It proves that clever engineering and deep understanding of the inference stack can beat throwing more compute at the problem. Definitely a must-read for anyone optimizing LLM deployments.
