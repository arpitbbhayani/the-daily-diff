---
title: KV Cache and Prompt Cache optimize LLM performance
source: hn
url: https://jaketao.com/language/en/kv-cache-vs-prompt-cache/
date: '2026-08-07'
tags:
- catchup
- decode
- hn
- kv-cache
- llm-inference
- prefill
- prompt-cache
- token-generation
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49215675'
comments: https://news.ycombinator.com/item?id=49215675
why_read: This article clarifies the distinction between KV Cache and Prompt Cache,
  explaining how they optimize large language model performance by reusing pre-computed
  results during token generation and across multiple requests. Readers will understand
  the underlying mechanisms that reduce latency and computational costs in LLM operations.
authors:
- taojing10
---

Understanding the core optimizations behind Large Language Models is crucial for anyone building AI agents. The concepts of KV Cache and Prompt Cache are often conflated, but they serve distinct purposes in accelerating inference.

KV Cache primarily optimizes the 'decode' stage, preventing re-computation of historical token K/V pairs as the model generates new tokens. Prompt Cache, on the other hand, allows subsequent requests to reuse pre-computed 'prefill' results for common prefixes, like system prompts or tool definitions.

This article provides a clear, practical breakdown of these mechanisms without deep math, offering insights into how to significantly reduce latency and computational costs in your AI applications. It is not just about using bigger models; it is about smarter inference.
