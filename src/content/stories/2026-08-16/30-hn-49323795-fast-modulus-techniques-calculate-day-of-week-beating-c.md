---
title: Fast modulus techniques calculate day-of-week beating compiler output
source: hn
url: https://www.benjoffe.com/fast-day-of-week
date: '2026-08-16'
tags:
- assembly
- bit-manipulation
- catchup
- day-of-week-calculation
- hn
- modulus-arithmetic
- performance-optimization
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49323795'
comments: https://news.ycombinator.com/item?id=49323795
why_read: Read this to learn surprisingly complex low-level optimizations for calculating
  the day of the week. You will discover fast modulus techniques that significantly
  outperform existing solutions and understand the underlying assembly.
authors:
- gavide
---

Ever wonder how much faster you can make even the simplest calculations? This article explores mind-bending low-level optimizations for finding the day-of-the-week, pushing beyond what compilers typically achieve.

It dissects bit manipulation, specific assembly instructions, and clever modulus techniques, demonstrating how a few tweaked constants can yield a 3-instruction sequence that significantly reduces latency. The focus is on performance-critical areas like high-performance date libraries and database engines.

This is a masterclass in micro-optimization. You will gain a deeper appreciation for how foundational operations can be dramatically accelerated by understanding CPU architecture and instruction sets, providing insights applicable to any scenario where every clock cycle is scrutinized.
