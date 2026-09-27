---
title: Using single forward pass inference for fast typed semantic routing
source: github
url: https://github.com/neurono-ml/typed-lm
date: '2026-09-26'
tags:
- candle
- catchup
- github
- llm-inference
- lora
- rust
- semantic-routing
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49855980'
comments: https://news.ycombinator.com/item?id=49855980
why_read: Learn how typed-lm converts dense decoder models into fast, deterministic
  typed decision APIs in a single forward pass without text generation.
authors:
- neurono-ml
---

Running autoregressive text generation simply to extract a structured boolean or enum decision from a large language model introduces massive latency and token waste. Most agent routing workflows do not need multi-token completion; they only need logit-level classification over a discrete set of choices.

The typed-lm project provides an open-source Rust library built on Candle that turns dense decoder models like Qwen, Mistral, and Gemma into typed semantic routers. Instead of decoding tokens sequentially and parsing output with regular expressions, it evaluates all target questions against a shared prefix in a single forward pass.

On a modest workstation GPU, batched semantic routing completes in tens of milliseconds rather than full seconds. The framework also supports LoRA and QLoRA adapter training alongside FP8 and FP4 quantization, making lightweight local classification practical inside latency-sensitive agent pipelines.

Deterministic agent branching should be handled at the logit level instead of generating throwaway tokens.
