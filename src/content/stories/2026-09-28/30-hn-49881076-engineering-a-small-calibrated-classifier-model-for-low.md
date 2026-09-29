---
title: Engineering a small calibrated classifier model for low latency
source: hn
url: https://brooker.co.za/blog/2026/09/28/engineering-system-one.html
date: '2026-09-28'
tags:
- agentic-ai
- calibrated-classifiers
- catchup
- hn
- low-latency
- model-building
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49881076'
comments: https://news.ycombinator.com/item?id=49881076
why_read: Learn the practical engineering tradeoffs in building small, highly calibrated
  classification models designed for low latency agent workflows.
authors:
- Marc Brooker
---

Marc Brooker explores the engineering trade-offs behind training a compact, two-billion parameter model optimized for calibration and ultra-low latency inference in agentic workflows. Instead of relying on giant foundation models for every step, agent systems can achieve substantial efficiency gains by using specialized small models for decision routing and classification.

When building agent loops, routing every sub-task through heavy reasoning models introduces severe latency bottlenecks and unpredictable cost spikes. Well-calibrated small models operating as fast System 1 components provide reliable confidence scores while executing concurrently across parallel execution branches.

Treating fast classifiers as foundational primitives fundamentally changes how we compose multi-agent pipelines.
