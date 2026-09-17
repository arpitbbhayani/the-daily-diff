---
title: A sub-millisecond drop-in OpenAI-compatible LLM gateway
source: github
url: https://github.com/kottos-ai/llmbridge
date: '2026-09-15'
tags:
- api-translation
- c++
- catchup
- github
- llm-gateway
- low-latency
- openai-compatibility
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49712158'
comments: https://news.ycombinator.com/item?id=49712158
why_read: This describes llmbridge, a high-performance LLM gateway built in C++. Readers
  will learn how it achieves sub-millisecond latency for translating OpenAI API requests
  to various model providers.
authors:
- lluisantoni
---

Achieving sub-millisecond latency for LLM API calls is a game-changer for real-time AI applications, and Llmbridge delivers exactly that. This C++ LLM gateway is engineered to HFT (High Frequency Trading) standards, offering p99 latency below 1 ms at 1,000 requests per second.

It acts as a transparent, drop-in OpenAI-compatible proxy, translating requests to various upstream providers like Anthropic or Gemini. The core innovation here is not just compatibility, but the relentless focus on performance, adding only microseconds of overhead to each transaction.

If you are building latency-sensitive AI systems or managing complex LLM infrastructure, understanding the design principles behind such high-performance gateways can provide critical insights into optimizing your own systems.
