---
title: Streaming Experts From Disk Allows Massive MoE Models on Limited RAM
source: hn
url: https://github.com/JustVugg/colibri
date: '2026-07-09'
tags:
- catchup
- disk-streaming
- glm-5-2
- hn
- llm-inference
- low-resource
- memory-optimization
- mixture-of-experts
- pure-c
- quantization
score: 846
hn_id: '48842459'
comments: https://news.ycombinator.com/item?id=48842459
why_read: This document details a novel approach to run very large Mixture-of-Experts
  LLMs on consumer hardware with limited RAM. It explains how streaming model experts
  from disk enables efficient inference for immense models using a small engine written
  in C.
authors:
- JustVugg
author: JustVugg
---

Running a 744 billion parameter AI model on a consumer machine with just 25GB RAM? Yes, it is possible. Colibri streams Mixture-of-Experts (MoE) from disk, showing impressive efficiency.The core idea is clever: keep dense parameters resident and stream the 21,504 routed experts on demand. The engine is pure C, zero dependencies, a lean ~2,400 lines of code.This is a masterclass in pushing the performance-efficiency frontier for LLM deployment. It proves that immense models do not always require immense, dedicated hardware. Understand these techniques to optimize your own AI systems.
