---
title: Local decision models provide calibrated probabilities on ordinary CPUs
source: github
url: https://github.com/kouhxp/gutsy
date: '2026-10-01'
tags:
- calibrated-probabilities
- catchup
- decision-models
- gguf
- github
- llama-cpp
- local-inference
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49923223'
comments: https://news.ycombinator.com/item?id=49923223
why_read: Read this to learn how Gutsy evaluates structured decision questions using
  lightweight, calibrated models on a local CPU runtime.
authors:
- kouhxp
image: /infographics/11-github-49923223.jpg
---

Using a massive generative model just to make discrete binary decisions or route agent workflows introduces unnecessary latency, cost, and non-determinism. Most agent orchestration pipelines do not actually need multi-token generative text; they need calibrated probabilities over a small set of structured choices.

Gutsy takes a compact 0.8B base model (Qwen3.5-0.8B) and fine-tunes it strictly as a decision engine served via llama.cpp on a standard CPU. Instead of generating arbitrary text responses, it consumes state and typed questions to output well-calibrated probabilities for every candidate option. Because it is trained using proper scoring rules (cross-entropy combined with Brier loss), the validation calibration error remains at 0.021 before scaling, ensuring that a predicted score of 0.8 reliably corresponds to an 80 percent confidence level.

The entire model ships as a 775 MB Q8_0 GGUF binary, removing network calls and token costs from tight decision loops. Running deterministic, locally hosted decision logic at the edge fundamentally simplifies how backend services execute low-latency routing without GPU infrastructure.

Treating agent routing as a pure probability estimation problem instead of text generation is a massive performance win.
