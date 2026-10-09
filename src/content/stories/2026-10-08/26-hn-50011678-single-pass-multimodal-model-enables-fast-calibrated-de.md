---
title: Single pass multimodal model enables fast calibrated decision making
source: hn
url: https://huggingface.co/LiquidAI/d1-3B
date: '2026-10-08'
tags:
- catchup
- decision-models
- hn
- low-latency-inference
- multimodal-learning
- vision-language-models
- zero-output-tokens
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '50011678'
comments: https://news.ycombinator.com/item?id=50011678
why_read: Read this to understand how a dedicated decision model executes calibrated
  classifications in a single forward pass without generating text. You will learn
  how zero-output-token architectures dramatically reduce latency in routing, moderation,
  and guardrail tasks.
authors:
- Liquid AI
---

Autoregressive generation is fundamentally excessive for simple binary classification, intent triage, or guardrail validation. Running a massive language model just to sample a single token introduces unneeded latency and resource overhead.

Liquid AI designed d1-3B specifically around this limitation. Instead of relying on auto-regressive token sampling, the 3.1 billion parameter model evaluates multimodal context and yields calibrated, structured answers in a single forward pass without generating output tokens.

This execution path yields inference speeds around 8 milliseconds on an RTX 4090 and 30 milliseconds on Apple Silicon. Despite its compact footprint, it achieves a 48.57 score on the Decision Index 0.2.1 benchmark, outperforming multiple 4B and 9B general models.

If you build pipelines requiring real-time agent routing, LLM-as-a-judge checks, or prompt guardrails, decoupling classification from generative inference is an architectural pattern worth adopting.
