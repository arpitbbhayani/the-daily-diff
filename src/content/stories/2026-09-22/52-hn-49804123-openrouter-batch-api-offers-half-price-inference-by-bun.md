---
title: OpenRouter Batch API offers half-price inference by bundling requests
source: hn
url: https://openrouter.ai/blog/announcements/batch-api/
date: '2026-09-22'
tags:
- api-bundling
- asynchronous-processing
- batch-api
- catchup
- cost-reduction
- hn
- inference
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49804123'
comments: https://news.ycombinator.com/item?id=49804123
why_read: Read this to learn how OpenRouter's new Batch API can significantly reduce
  AI inference costs by bundling requests. It explains how to leverage asynchronous
  processing for large, non-urgent workloads, offering a median completion time of
  just 7 minutes.
authors:
- Brian Thomas
---

Slash your LLM inference costs in half! OpenRouter just rolled out their new Batch API, and it is a game-changer for any non-real-time AI workloads.

By bundling requests, you can get 50% (or more) off the per-token price. While providers have a 24-hour window, the real-world performance is impressive: median completion times are just 7 minutes, with 90 percent finishing within an hour.

This is huge for tasks like back-filling embeddings, summarizing large corpuses, or scoring eval sets. It is a smart trade-off of latency for substantial cost savings in your LLM infrastructure.
