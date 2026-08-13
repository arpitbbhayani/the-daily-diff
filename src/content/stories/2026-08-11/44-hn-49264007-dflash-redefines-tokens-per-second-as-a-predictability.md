---
title: DFlash redefines tokens per second as a predictability benchmark
source: hn
url: https://piszczek.pl/blog/dflash-changes-what-tokens-per-second-means
date: '2026-08-11'
tags:
- ai-infrastructure
- catchup
- dflash
- hn
- llama.cpp
- local-llm
- speculative-decoding
- tokens-per-second
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49264007'
comments: https://news.ycombinator.com/item?id=49264007
why_read: This article explains how DFlash fundamentally changes the measurement of
  LLM throughput from a pure hardware metric to a predictability benchmark. Readers
  will learn how this enables deploying powerful models like Glimmer 30B on resource-constrained
  GPUs by optimizing for system utility rather than raw speed.
authors:
- "Micha\u0142 Piszczek"
---

Speculative decoding has fundamentally changed how we should measure LLM throughput. "Tokens per second" is no longer just a hardware benchmark; it is now a predictability benchmark.

Tests with DFlash, a speculative decoding drafter, show that the *same* 30B model on the *same* 24GB GPU can yield 84.64 tokens/second on coding tasks, drop to 38.34 on mixed tasks, and further plummet to 21.56 with a full KV cache. This is a dramatic 4x difference.

This variability means optimizing LLM inference is far more complex than raw hardware speed. You need to consider context, task type, and the drafter's efficiency. The new challenge is not just speed, but predictable performance under varying loads.
