---
title: Open decision models provide fast multimodal classification locally
source: github
url: https://github.com/Xiaooolong/vev
date: '2026-10-06'
tags:
- catchup
- computer-vision
- decision-models
- github
- multimodal-ai
- qwen
- real-time-inference
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49978244'
comments: https://news.ycombinator.com/item?id=49978244
why_read: Learn how Vev executes low-latency multimodal decision-making and constrained
  classification directly on local GPUs.
authors:
- Xiaooolong
---

Running autoregressive text generation inside a real-time decision loop is often too slow and unpredictable. Vev takes a completely different architectural direction by offering open-weight decision models based on Qwen3.5 that output exact probabilities rather than generated text.

Because the model does not generate conversational text, inference latency drops to roughly 40 milliseconds. It evaluates arbitrary yes/no, multiple-choice, or graded questions directly across text inputs, JSON records, or raw screenshots. In one benchmark, a 4-billion parameter model plays Doom in real time by slicing the viewport into eight vertical segments and evaluating enemy presence per slice without slowing down the game engine.

This pattern eliminates standard output parsing overhead and hallucination risks when evaluating agent state. Backend engineers building visual agents or high-throughput decision systems can apply deterministic thresholds directly over open weights hosted on local GPUs.

Replacing generative decoders with discrete classification heads provides a compelling blueprint for deterministic, low-latency agent loops.
