---
title: Moving cognitive state from prompts into deterministic runtimes
source: github
url: https://github.com/doctarock/Speck
date: '2026-10-06'
tags:
- catchup
- cognitive-runtime
- genesis-runtime
- github
- llm-agents
- persistent-state
- small-language-models
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49975933'
comments: https://news.ycombinator.com/item?id=49975933
why_read: Learn how decoupling cognitive architecture from language models makes small
  models significantly more capable. It explains how to implement memory, planning,
  and state management in persistent software rather than prompting.
authors:
- doctarock
---

Most autonomous agent frameworks fail because they dump cognitive orchestration straight into prompt context. Asking a model to simultaneously simulate attention, track evidence, resolve contradictions, and execute tools creates massive overhead and compounding failure modes.

Speck takes a completely different architectural approach by decoupling cognitive state from the model itself. The memory, planning state machines, and task progression live in a persistent, deterministic runtime. The underlying language model is treated as entirely disposable compute.

Because state is managed outside the prompt, a worker can unload its model, migrate execution across machines, or swap model architectures mid-task without losing state. For engineers building local agent systems, offloading state to deterministic software makes small open-weights models dramatically more reliable.
