---
title: DS4 Project Integrates Qwen3.8 Flash Next with Metal Inference
source: github
url: https://github.com/antirez/ds4/pull/991
date: '2026-09-16'
tags:
- catchup
- ds4
- github
- gpu-optimization
- llm-inference
- metal-inference
- qwen3.8-flash-next
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49734319'
comments: https://news.ycombinator.com/item?id=49734319
why_read: This describes a significant update to the DS4 project, integrating the
  Qwen3.8 Flash Next model with Metal inference and optimized kernels. Readers will
  learn about enhanced LLM performance and new features available in this updated
  version.
authors:
- ivanfioravanti
---

Optimizing LLM inference requires deep hardware and software integration. A new pull request to antirez's 'ds4' project, a distributed storage system for neural networks, highlights how to integrate Qwen3.8 Flash Next with Metal inference.

This is not a trivial task. It involves developing optimized kernels and handling external PLE weights, along with implementing optional MTP decoding. The goal is maximum performance on specialized hardware, a non-negotiable for pushing model capabilities.

The work also includes rigorous correctness checks, extensive documentation, and benchmarks validating performance up to 262,000 tokens. This level of detail in an open-source contribution is invaluable for anyone working on high-performance LLM deployment.

This demonstrates the exacting engineering required to make cutting-edge LLMs practical and efficient on modern hardware. It showcases how to achieve significant performance gains by working at the metal layer.
