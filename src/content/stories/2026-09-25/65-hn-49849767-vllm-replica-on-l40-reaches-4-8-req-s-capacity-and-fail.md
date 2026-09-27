---
title: vLLM replica on L40 reaches 4.8 req/s capacity and fails under stress
source: hn
url: https://percentes.ai/writing/2026/calibrating-one-l40-configuration/
date: '2026-09-25'
tags:
- catchup
- hn
- l40
- load-testing
- performance-failure
- replica-capacity
- request-deadlines
- vllm
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49849767'
comments: https://news.ycombinator.com/item?id=49849767
why_read: This article details an experiment measuring the capacity of a single vLLM
  replica on an NVIDIA L40 GPU and its failure modes when inheriting increased load
  from a lost partner. Readers will learn the observed capacity limits and specific
  failure characteristics under these conditions.
authors:
- Varun Mahadkar
---

Calibrating LLM serving infrastructure is notoriously difficult, but this analysis provides crucial empirical data. A single vLLM replica on an NVIDIA L40 GPU was found to hit a ceiling at 4.8 requests per second, with 182-134 requests missing a 14-second deadline just above that.

What is striking is that first-token deadlines were met, but end-to-end processing failed, indicating a backend bottleneck rather than initial response time. This detailed breakdown highlights specific failure modes that impact production reliability.

Engineers designing LLM serving systems will find this deep dive into vLLM performance and failure characteristics on an L40 invaluable for informed capacity planning and bottleneck identification. Stop guessing, start measuring.
