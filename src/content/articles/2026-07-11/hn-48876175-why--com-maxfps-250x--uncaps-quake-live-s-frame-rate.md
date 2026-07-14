---
title: Why 'com_maxfps 250x' Uncaps Quake Live's Frame Rate
source: hn
url: https://marco-nett.de/blog/why-com_maxfps-250x-uncaps-quake-lives-frame-rate/
date: '2026-07-11'
tags:
- catchup
- com-maxfps
- frame-rate
- game-engine
- hn
- quake-live
- reverse-engineering
score: 9
hn_id: '48876175'
comments: https://news.ycombinator.com/item?id=48876175
why_read: This article provides a deep dive into the Quake Live engine, explaining
  how a specific command bypasses its intended frame rate cap. Readers will learn
  the mechanistic details of how the game's frame limiter works and how it can be
  exploited.
authors:
- Marco Nett
author: Marco Nett
---

Ever wondered how a seemingly simple game command can completely bypass an engine's intended limitations? In Quake Live, setting `com_maxfps` to `250x` inexplicably uncaps the frame rate, letting it soar to nearly 1000 FPS, far beyond the client's internal 250 limit.

The mystery lies in the engine's parsing logic. While `com_maxfps` is strictly clamped client-side to 250, the core `Com_Frame` function checks an integer value. The "x" in "250x" causes the parsing to default the integer to zero, effectively disabling the frame rate cap entirely.

This fascinating bug is a masterclass in how subtle implementation details can lead to powerful, unintended consequences. It is a testament to the importance of understanding the underlying code, rather than just the surface-level behavior.

This demonstrates how a deep dive into binary analysis using tools like Ghidra can uncover hidden system behaviors and optimizations. It offers a practical illustration of reverse engineering applied to real-world software.
