---
title: Local decision models provide calibrated probabilities on CPU
source: github
url: https://github.com/kouhxp/gutsy
date: '2026-10-05'
tags:
- calibrated-probabilities
- catchup
- decision-models
- gguf
- github
- llama-cpp
- qwen
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49961971'
comments: https://news.ycombinator.com/item?id=49961971
why_read: Learn how to run lightweight, deterministic decision models locally on CPU
  to obtain well-calibrated probabilities without text generation overhead.
authors:
- kouhxp
---

Routing decisions inside agent pipelines often do not require full text generation. Spinning up external API calls just to decide which branch a workflow should take adds latency, nondeterminism, and unpredictable per-token cost.

Gutsy introduces a specialized 0.8B quantized decision model designed to run on ordinary CPUs via llama.cpp. Instead of generating tokens, it encodes state once and returns well-calibrated probabilities for multiple-choice or scoring questions with an expected calibration error around 0.022.

The framework is deterministic and robust against option shuffling, retaining the same answer across 97 percent of permutations. Because the state context is preserved, evaluating additional follow-up conditions incurs only token-level evaluation cost rather than re-encoding the entire prompt.

Using small, deterministic decision heads is significantly faster and cheaper than delegating branching logic to giant foundational models.
