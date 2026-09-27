---
title: GLiNER2.5-Decide enables multi-task operational classification in a single
  pass
source: hn
url: https://huggingface.co/fastino/GLiNER2.5-Decide
date: '2026-09-24'
tags:
- catchup
- hn
- intent-routing
- multi-label-classification
- single-forward-pass
- text-classification
- zero-shot-classification
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49835745'
comments: https://news.ycombinator.com/item?id=49835745
why_read: Understand how a compact 340M model executes multi-head operational classification
  across dynamic label sets without prompt templates or token generation. This provides
  a practical blueprint for high-throughput routing, sentiment analysis, and operational
  decision-making.
authors:
- fastino
---

Routing agent workflows with full generative large language models wastes compute and introduces significant latency overhead.

GLiNER2.5-Decide offers an alternative approach: a 340M parameter specialist model designed specifically for operational routing and zero-shot classification. It accepts arbitrary dynamic label sets at call time and outputs multi-label predictions across multiple heads in a single forward pass, completely bypassing prompt engineering and autoregressive token generation.

On the Fast Decisions benchmark across seventeen operational domains, this 340M model scores over 60 percent exact match accuracy, outperforming several multi-billion parameter autoregressive models. You can execute customer intent routing, policy checks, and agent handoffs locally with millisecond latencies.

Small non-generative encoders remain vastly superior to heavy foundation models for high-throughput decision boundaries.
