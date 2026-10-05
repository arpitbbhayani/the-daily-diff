---
title: Llama.cpp adds single forward pass decision model scoring
source: hn
url: https://huggingface.co/blog/ggml-org/decision-models-in-llamacpp
date: '2026-10-02'
tags:
- catchup
- classification
- decision-models
- hn
- inference-speed
- llama-cpp
- single-forward-pass
section: news
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49934323'
comments: https://news.ycombinator.com/item?id=49934323
why_read: Understand how decision models in llama.cpp score predefined options in
  a single forward pass without autoregressive token generation. This enables significantly
  faster and more reliable routing, moderation, and agent action selection.
authors:
- Xuan-Son Nguyen
- Victor Mustar
image: /infographics/12-hn-49934323.jpg
---

Generative chat models are frequently the wrong tool for agent decision loops. When an agent only needs to route a request, verify a task outcome, or select its next tool, generating text token-by-token and parsing JSON output introduces unnecessary latency and parse failures.

llama.cpp now natively supports decision models through a dedicated endpoint. Instead of auto-regressively generating tokens, a decision model accepts your input state alongside typed candidate options and scores the choices in a single forward pass.

The latency differences are significant. Benchmarks show evaluation times dropping to 3 milliseconds for 144M models and under 15 milliseconds for 4B parameter models on modern hardware. This architecture provides deterministic classification probabilities without output parsing errors.

For engineers building multi-agent harnesses, replacing generative calls with single-pass decision models significantly stabilizes control flow while slashing inference latency.
