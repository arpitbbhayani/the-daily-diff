---
title: Warming vLLM's Prefix Cache Boosts Local Agent Performance
source: hn
url: https://doug.sh/posts/vllm-kv-cache-agents/
date: '2026-09-18'
tags:
- catchup
- hn
- kv-cache
- latency-optimization
- llm-agent
- prefix-cache
- speculative-decoding
- tensor-parallelism
- vllm
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49758259'
comments: https://news.ycombinator.com/item?id=49758259
why_read: This article demonstrates how keeping vLLM's prefix cache warm significantly
  reduces latency for local coding agents. Readers will learn practical optimization
  techniques like tensor parallelism and speculative decoding to improve LLM performance.
authors:
- dougcalobrisi
---

Anyone running production AI agents on vLLM knows the pain of long prefill times between agent turns, especially with expansive contexts. This post offers a remarkably simple yet powerful solution: keeping vLLM's prefix cache warm.

The author demonstrates how a few configuration tweaks, particularly to `kv_transfer_config`, can slash average wait times before the first word from nearly 30 seconds down to 7.3 seconds. This is not just a minor improvement; it is a fundamental shift in agent responsiveness. The cache hit rate soared from 55 percent to 95 percent, highlighting the inefficiency of discarding valuable context.

For coding agents that resend the entire conversation on each turn, re-reading 120,000 tokens can take minutes. By maintaining the KV cache, only the new tokens need processing, cutting startup time to mere seconds. This is a critical optimization for anyone looking to build highly interactive and efficient LLM applications.

This is exactly the kind of practical LLM infrastructure insight that transforms agent performance.
