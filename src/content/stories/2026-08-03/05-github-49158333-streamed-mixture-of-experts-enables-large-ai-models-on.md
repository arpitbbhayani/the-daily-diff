---
title: Streamed Mixture-of-Experts enables large AI models on iPhones
source: github
url: https://github.com/leonickson1/Swiftlet
date: '2026-08-03'
tags:
- catchup
- github
- iphone
- large-language-models
- metal
- mixture-of-experts
- on-device-ai
- streaming-weights
- swiftlet
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49158333'
comments: https://news.ycombinator.com/item?id=49158333
why_read: Read this to understand how large Mixture-of-Experts language models can
  run on resource-constrained Apple devices, including iPhones, by streaming model
  weights. It demonstrates a practical approach for enabling sophisticated on-device
  AI applications.
authors:
- leonickson1
---

Running 80B LLMs on a MacBook with just 4.3GB of RAM or a 35B model on an iPhone is no longer a pipe dream. Swiftlet achieves this impressive feat by streaming Mixture-of-Experts (MoE) weights from storage on demand, keeping only the small dense core of the model resident in memory.

This approach is a game-changer for on-device and edge AI, showing how smart system design can overcome memory bottlenecks without relying solely on quantization or distillation. It is a concrete example of optimizing LLM inference by rethinking how large models interact with limited hardware resources.

The project leverages Swift and Metal, focusing on kernel speed to ensure that even with the streaming overhead, decode speeds remain usable (4.5-5 tok/s for 80B). This is not just a proof of concept; it is an open runtime pushing the boundaries of what is possible for local LLM deployment.

This is a deep dive into practical, high-impact LLM infrastructure optimization.
