---
title: Decision model d1 matches frontier models on structured tasks
source: news
url: https://www.liquid.ai/blog/d1-decision-model
date: '2026-10-05'
tags:
- catchup
- decision-models
- multimodal-ai
- news
- probability-estimation
- visual-inspection
section: ai
is_news: true
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49967491'
comments: https://news.ycombinator.com/item?id=49967491
why_read: Read this to understand how non-generative decision models evaluate text
  and image inputs with high accuracy and substantially lower latency and cost.
authors:
- pember
---

Most backend architectures currently route structured classification tasks through expensive, slow autoregressive language models. Liquid AI just introduced d1, a decision model that replaces generative token decoding with a direct probability distribution computed in a single forward pass.

Instead of generating string outputs that require parsing and structured JSON schemas, d1 evaluates unstructured text and image inputs in 200 to 300 milliseconds. It outputs exact probability scores for binary flags, discrete choice labels, or weighted numeric ratings, operating at roughly one-twentieth to one-two-hundredth the cost of leading frontier models.

For systems engineers building real-time triage pipelines, content filtering, or visual verification, bypassing token generation avoids harness complexity and latency bottlenecks completely.

Deterministic probability outputs provide a cleaner, significantly cheaper interface for high-throughput decision systems.
