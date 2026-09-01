---
title: On-device AI models drift silently with OS updates
source: hn
url: https://umer9538.github.io/underfoot/
date: '2026-08-30'
tags:
- ai-determinism
- catchup
- hn
- model-drift
- on-device-ai
- os-updates
- structured-output
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49503958'
comments: https://news.ycombinator.com/item?id=49503958
why_read: Read this to understand the silent, unlogged drift of on-device AI models
  with OS updates and how tools can observe their behavioral changes. It reveals the
  implications for application development and the challenges of ensuring consistent
  model behavior.
authors:
- Umer2521
---

Have you considered how often the on-device AI models under your applications change without notice? A new observatory, 'Underfoot,' is tracking these silent shifts across OS updates from Apple and Google.

Surprisingly, even on-device models can exhibit perfect determinism for specific prompts, making any changes immediately measurable. Yet, the findings show significant behavioral drift, including unexpected format changes like models wrapping JSON in markdown, or critical refusals appearing silently.

This project highlights a significant challenge for applied AI: the 'model under your feet' can change at any time, breaking downstream applications. It underscores the critical need for continuous evaluation and robust handling of model updates in any AI-driven system.
