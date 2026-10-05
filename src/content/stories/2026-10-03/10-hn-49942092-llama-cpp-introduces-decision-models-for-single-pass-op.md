---
title: Llama.cpp introduces decision models for single pass option scoring
source: news
url: https://huggingface.co/blog/ggml-org/decision-models-in-llamacpp
date: '2026-10-03'
tags:
- catchup
- classification
- decision-models
- hn
- inference-optimization
- llama-cpp
- system-one-api
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49942092'
comments: https://news.ycombinator.com/item?id=49942092
why_read: Understand how decision models evaluate choices in a single forward pass
  instead of generating text token-by-token. You will learn how to leverage the new
  llama.cpp endpoint for fast request routing, agent verification, and scoring.
authors:
- Xuan-Son Nguyen
- Victor Mustar
---

Standard chat models execute one forward pass per generated token and require fragile JSON schema enforcement to extract simple decisions. llama.cpp now natively supports decision models via a dedicated system endpoint, scoring pre-defined choices in a single forward pass.

Instead of generating text, the runtime accepts state context alongside typed questions and returns explicit probability distributions across options. Latency drops substantially: compact models like Julia-144M and ModernBERT-based Laya evaluate decisions in three to five milliseconds, while 4B parameter models complete evaluation in twelve milliseconds on workstation hardware.

This architectural shift is useful for multi-agent systems. Tasks like intent classification, guardrail validation, tool routing, and step verification no longer need expensive text generation pipelines or secondary output parsers.

Single-pass decision endpoints deliver the sub-twenty-millisecond latency guarantees that multi-agent control loops require.
