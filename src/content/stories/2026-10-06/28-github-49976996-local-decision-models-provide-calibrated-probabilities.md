---
title: Local decision models provide calibrated probabilities on CPU
source: github
url: https://github.com/kouhxp/gutsy
date: '2026-10-06'
tags:
- calibrated-probabilities
- catchup
- decision-models
- gguf
- github
- llama-cpp
- local-inference
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49976996'
comments: https://news.ycombinator.com/item?id=49976996
why_read: Learn how to use lightweight local models for fast, deterministic decision
  making with calibrated probabilities instead of expensive text generation APIs.
authors:
- kouhxp
---

Generative language models are frequently overpowered and slow when an agent only needs to select among discrete choices or evaluate deterministic branch conditions. Gutsy provides a lightweight alternative by serving a fine-tuned 0.8B model that directly outputs calibrated probability distributions over typed choices on standard CPU hardware.

Because the model bypasses token autoregression and network round-trips, inference runs deterministically with low resource overhead. It encodes the base state once and allows subsequent questions to evaluate against cached representations, maintaining stability across shuffled options with a validated calibration error of 0.022.

Deploying small, specialized decision models directly on local inference engines like llama.cpp significantly reduces latency and compute cost in agent workflows.
