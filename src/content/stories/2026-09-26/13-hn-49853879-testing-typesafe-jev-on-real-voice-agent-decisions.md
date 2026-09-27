---
title: Testing TypeSafe Jev on real voice agent decisions
source: hn
url: https://www.bolna.ai/blog/testing-jev-on-real-phone-calls
date: '2026-09-26'
tags:
- calibrated-probabilities
- catchup
- hn
- jev
- system-one-models
- typesafe
- voice-agents
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49853879'
comments: https://news.ycombinator.com/item?id=49853879
why_read: Read this to understand how TypeSafe's Jev model handles real-world decision
  workloads in production voice agents. You will learn how fast, non-generative classification
  models perform compared to traditional LLMs on latency-sensitive tasks.
authors:
- xan_ps007
---

Autoregressive LLMs are often the wrong abstraction for deterministic agent routing and guardrails. Running an LLM just to produce structured JSON routing decisions introduces unnecessary latency, variance, and token generation costs into latency-sensitive voice pipelines.

Evaluation on real telephone voice agents shows that typed System One architectures evaluate parallel state queries without text generation at a fraction of the cost, reaching four cents per million input tokens with zero output cost. However, while they guarantee schema correctness, they still require strict calibration against domain-specific edge cases.

Separating fast classification decisions from generative generation lets you build far lower-latency agent state machines.
