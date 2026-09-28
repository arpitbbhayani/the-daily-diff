---
title: Scoring typed probabilistic decisions locally using next-token model distributions
source: github
url: https://github.com/bulyaki/Credence
date: '2026-09-27'
tags:
- catchup
- gguf
- github
- llama-cpp
- local-inference
- probabilistic-inference
- token-distribution
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49861867'
comments: https://news.ycombinator.com/item?id=49861867
why_read: Understand how Credence evaluates structured probabilistic decisions directly
  from next-token probabilities without expensive text generation. It offers a fast,
  framework-agnostic approach to extract calibrated boolean choices and uncertainty
  diagnostics from local language models.
authors:
- bulyaki
---

Most agentic architectures waste hundreds of milliseconds generating verbose JSON structures just to extract a single boolean routing decision. Credence takes an entirely different systems approach by turning local GGUF models into single-pass probabilistic classifiers without autoregressive decoding loops.

Instead of sampling output tokens across multiple iterations, the runtime scores the next-token probability distribution over a constrained set of permitted labels. A decision call costs exactly one prompt prefill step, returning the chosen boolean state alongside calibrated probability metrics and top-token uncertainty diagnostics.

Building on top of embedded llama.cpp primitives, this setup decouples deterministic agent routing from bulky agent frameworks. You can make low-latency branching decisions locally on CPU without paying the latency or memory footprint of conventional text generation pipelines.

Eliminating token generation loops transforms LLMs into deterministic routing primitives for high-throughput agent workflows.
