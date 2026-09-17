---
title: Measuring Apple's On-Device Model for Deforget App Across iOS Updates
source: hn
url: https://www.deforget.app/blog/apple-on-device-model-measured
date: '2026-09-15'
tags:
- apple-on-device-model
- catchup
- evaluation-harness
- foundation-model
- hn
- ios-updates
- model-versioning
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49710030'
comments: https://news.ycombinator.com/item?id=49710030
why_read: This article details how the Deforget app rigorously measures Apple's on-device
  AI model performance across iOS updates. Readers will learn about the challenges
  of unversionable models and the importance of an independent evaluation harness.
authors:
- Kaloyan Lachezarov
---

Building production apps on Apple's on-device LLM? You are at the mercy of OS updates. One developer built a rigorous evaluation harness for their app, Deforget, to track model performance across iOS beta cycles.

They discovered the model changes significantly with OS updates, even in minor builds. This means you cannot "pin" your model version. Their solution: an internal evaluation system that reruns a fixed corpus against every beta, measuring raw model output and the result after a deterministic repair layer.

This is not just about LLMs; it is about engineering resilience. When critical dependencies are beyond your control, robust measurement and adaptive architecture become paramount. Forget "vibes" and build instruments.
