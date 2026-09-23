---
title: Qwen3.8-Flash-Next on M2 Ultra completes messy coding task
source: hn
url: https://b1tank.github.io/writing/my-real-world-qwen38-flash-next-agent-run/
date: '2026-09-21'
tags:
- catchup
- hn
- local-llm
- long-context-recovery
- m2-ultra
- macos
- qwen3.8-flash-next
- tool-calling
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49790271'
comments: https://news.ycombinator.com/item?id=49790271
why_read: This article demonstrates the practical viability of running Qwen3.8-Flash-Next
  on a 64 GB M2 Ultra for complex, real-world coding tasks. Readers will gain insight
  into its performance, including tool-calling and long-context handling, for sustained
  local LLM use.
authors:
- b1tank
---

Running large language model agents locally for real work is becoming increasingly viable, as shown by a recent 66-minute coding session using Qwen3.8-Flash-Next on a 64 GB M2 Ultra. This test was not a simple benchmark; it was a sustained, complex task involving 106 tool calls.

The model averaged 35.5 tokens per second during generation and successfully managed a 128K context window through automatic compaction at 114,950 tokens. Even with a significant 137 GB model file, only 41.72 GB of weights were resident, with BF16 n-grams streamed from SSD, proving efficient memory usage.

While long-context recovery introduced noticeable pauses, the overall experience was productive and responsive. This demonstrates that for senior engineers, powerful local setups can genuinely handle complex AI agent workflows, pushing the boundaries of what is achievable outside the cloud.
