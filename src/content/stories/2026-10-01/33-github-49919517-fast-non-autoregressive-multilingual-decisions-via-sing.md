---
title: Fast non-autoregressive multilingual decisions via single forward pass
source: github
url: https://github.com/NandhaKishorM/laya
date: '2026-10-01'
tags:
- catchup
- github
- non-autoregressive
- proper-scoring-rules
- reinforcement-learning
- system-1-decision-engine
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49919517'
comments: https://news.ycombinator.com/item?id=49919517
why_read: Read this to understand how non-autoregressive architectures can execute
  fast typed text decisions in a single forward pass using proper scoring rules.
authors:
- NandhaKishorM
---

Autoregressive generation is often massive overkill for structured routing and deterministic decision-making in agent loops. Laya provides an alternative by executing typed classification, scoring, and boolean decisions in a single non-autoregressive forward pass with latencies around 33 milliseconds.

Instead of generating text token by token and parsing brittle JSON schemas, this engine evaluates prompts across more than 100 languages simultaneously. It utilizes reinforcement learning against strictly proper scoring rules to produce calibrated probabilities and discrete choices without token drift.

An integrated request router selects the appropriate specialized checkpoint per task. This design eliminates substantial token latency and eliminates parse failure recovery routines from your orchestration pipelines.

When building multi-step agent architectures, separating fast deterministic decisions from generative reasoning keeps latency and infrastructure spend strictly under control.
