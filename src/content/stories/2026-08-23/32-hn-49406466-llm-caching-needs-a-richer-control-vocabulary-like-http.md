---
title: LLM caching needs a richer control vocabulary like HTTP Cache-Control
source: hn
url: https://www.gojiberries.io/cache-control-for-llms/
date: '2026-08-23'
tags:
- cache-control
- catchup
- hn
- http-caching
- kv-state
- llm-caching
- optimization
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49406466'
comments: https://news.ycombinator.com/item?id=49406466
why_read: This text explains the current limitations of LLM caching mechanisms, highlighting
  the lack of a rich, portable control vocabulary. Readers will learn how a standardized
  contract, similar to HTTP's Cache-Control, ETag, and Vary, could significantly improve
  LLM caching efficiency and policy management.
authors:
- neehao
---

Current LLM caching is rudimentary, often leading to unnecessary token costs and performance bottlenecks. This article proposes a game-changing 'Cache-Control' vocabulary for LLMs, mirroring the effective HTTP standard.

Imagine explicit directives for prompt segments: marking system prompts as immutable, user inputs as non-cacheable, or specific contextual data with short lifespans. This level of granularity, currently missing, would empower developers to significantly optimize LLM inference, moving beyond basic time-based expiries or manual prefix replaying.

The proposal integrates with low-level KV cache mechanisms like LMCache, SGLang, and vLLM, offering a portable contract above these implementations. This could lead to substantial cost reductions and faster response times, fundamentally changing how we build and deploy LLM-powered applications.
