---
title: Timestamp to Hour, Minute, Second conversion 50% faster with math tricks
source: hn
url: https://www.benjoffe.com/fast-time-of-day
date: '2026-09-07'
tags:
- bit-hacks
- catchup
- dependency-chain
- hn
- performance-optimization
- simd
- timestamp-conversion
section: engineering
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49596678'
comments: https://news.ycombinator.com/item?id=49596678
why_read: This article demonstrates how to convert a timestamp to hour, minute, and
  second up to 50% faster than traditional libraries. Readers will learn low-level
  optimization techniques including reordering calculations and math tricks like base-64
  clocks.
authors:
- benjoffe
---

Converting a timestamp to hours, minutes, and seconds usually involves a sequence of divisions and modulo operations, creating a slow dependency chain. This article demonstrates how rethinking the arithmetic can achieve a 50 percent speedup, often reducing the core calculation to just two multiplications.

The key is to eliminate sequential dependencies. Instead of calculating minutes, then seconds, then hours, you can use clever mathematical rearrangements. An optional "base-64 clock" trick further optimizes this for binary-friendly operations.

This is a brilliant example of how low-level optimization thinking, even for seemingly simple tasks, can yield substantial performance improvements and energy savings. It highlights the importance of understanding CPU-level operations.
