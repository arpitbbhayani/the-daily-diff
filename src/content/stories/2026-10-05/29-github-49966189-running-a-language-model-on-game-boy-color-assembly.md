---
title: Running a language model on Game Boy Color assembly
source: github
url: https://github.com/crashtheuniverse/chatgbc
date: '2026-10-05'
tags:
- catchup
- game-boy-color
- github
- language-models
- recurrent-core
- sm83-assembly
- ternary-weights
section: ai
is_news: false
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 9
hn_id: '49966189'
comments: https://news.ycombinator.com/item?id=49966189
why_read: Learn how to implement and optimize an extreme low-resource recurrent language
  model on Game Boy Color hardware using pure assembly.
authors:
- crashtheuniverse
---

Running a 370k parameter language model directly on a Game Boy Color demonstrates how far model architecture can be pushed under extreme hardware constraints. ChatGBC implements complete inference in pure SM83 assembly with zero floating-point hardware.

The system runs at 0.46 seconds per token using ternary weights (-1, 0, +1), which replaces runtime matrix multiplication with 27 precomputed sum lookups. It avoids attention mechanisms and KV caches entirely, relying instead on a recurrent state of only 192 bytes with four mixture-of-experts per layer.

Shrinking memory consumption down to a sub-kilobyte footprint shows the power of matching model architectures directly to target hardware limits.

Extreme quantization and non-transformer recurrent topologies continue to prove that intelligent text generation does not always require gigabytes of VRAM.
