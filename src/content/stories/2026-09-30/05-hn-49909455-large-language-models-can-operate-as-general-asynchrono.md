---
title: Large language models can operate as general asynchronous agents
source: hn
url: https://dvmazur.github.io/async_llm/
date: '2026-09-30'
tags:
- asynchronous-agents
- cache-views
- catchup
- concurrency
- hn
- inference-coroutines
- shared-memory-inference
section: ai
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
hn_id: '49909455'
comments: https://news.ycombinator.com/item?id=49909455
why_read: Learn how shared-memory inference coroutines allow standard LLMs to execute
  concurrent, asynchronous tasks without requiring specialized architectures or task-specific
  training.
authors:
- George Yakushev
- Denis Mazur
- Vladimir Bartenev
- Vyacheslav Zhdanovskiy
- Timofey Byzov
- Vladimir Kaurkin
- Vadim Pastushenko
image: /infographics/05-hn-49909455.jpg
---

Most autonomous LLM agents are constrained to a synchronous loop: read, think, generate actions, and wait for feedback before continuing. This sequential architecture fails in real-time environments where observations stream continuously.

A new framework called AsyncLLM demonstrates that standard open-weights models like Qwen 3.x can operate as concurrent, asynchronous agents without fine-tuning. The framework models agent tasks as concurrent coroutines communicating through shared KV cache blocks.

One coroutine can continuously process incoming video or game frames and write to its designated cache block, while a parallel reasoning coroutine consumes cache views to issue real-time actions. In demonstrations playing DOOM, this approach allowed agents to act and reason simultaneously without freezing during heavy generation steps.

Moving away from sequential prompt loops toward shared-memory inference unlocks entirely new paradigms for real-time agent system design.
