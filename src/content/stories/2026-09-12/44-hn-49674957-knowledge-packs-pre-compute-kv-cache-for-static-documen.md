---
authors:
- sayyss
comments: https://news.ycombinator.com/item?id=49674957
date: '2026-09-12'
depth_score: 7
hn_id: '49674957'
image: /infographics/44-hn-49674957.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- catchup
- hn
- holon
- knowledge-packs
- kv-cache
- prefill
- static-documents
title: Knowledge packs pre-compute KV cache for static documents
url: https://twitter.com/sayyss1/status/2093051569055084862
utility_score: 9
why_read: This text introduces 'Knowledge packs,' a feature that pre-computes KV cache
  for static documents. It explains how this allows computation once, reuse across
  sessions, and entirely skips the prefill process, improving efficiency.
---

Optimizing LLM inference just got smarter, especially for static knowledge bases.

This is what "Knowledge packs" enable: pre-computing the Key-Value (KV) cache for static documents and attaching it to any new LLM session. You compute it once, and then reuse it endlessly.

This dramatically cuts down on token usage and latency, making RAG or similar applications significantly more efficient. It is a prime example of context engineering directly improving LLM system performance. This technique turns a common bottleneck into a one-time cost, with immense benefits for frequently referenced, stable information. It is a powerful way to make your LLM applications faster and more cost-effective.