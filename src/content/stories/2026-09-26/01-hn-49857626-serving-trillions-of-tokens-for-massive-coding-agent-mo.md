---
title: Serving trillions of tokens for massive coding agent models
source: hn
url: https://modal.com/blog/trillion-tokens-trillion-parameters
date: '2026-09-26'
tags:
- catchup
- coding-agents
- distributed-systems
- hardware-utilization
- hn
- llm-inference
- tensor-cores
section: systems
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49857626'
comments: https://news.ycombinator.com/item?id=49857626
why_read: Understand the engineering principles and hardware constraints required
  to serve trillion-parameter coding models at massive token scale. You will learn
  how high-utilization inference systems are architected to make large agent workloads
  economically viable.
authors:
- Janelle Cai
- Charles Frye
- James Liu
- Timothy Feng
- Richard Gong
image: /infographics/01-hn-49857626.jpg
---

Serving trillion-parameter models for production coding agents pushes accelerator hardware to its absolute speed of light. Because coding agents generate continuous tool invocations and inspect wide repository contexts, inference systems cannot treat these requests like conventional chat completions.

Modal breaks down the infrastructure required to process trillions of tokens across petaFLOP-scale accelerator clusters. Achieving high hardware utilization requires aggressive memory tiering, custom kernel scheduling, and specialized request batching that amortizes parameter transfer latencies across continuous agent loops.

Designing infrastructure for agent workloads requires optimizing not just raw generation throughput, but also end-to-end token latency across deep context windows.
