---
title: Causal profiling measures optimization potential in native code
source: github
url: https://github.com/plasma-umass/coz
date: '2026-10-07'
tags:
- catchup
- causal-profiling
- github
- latency
- native-code
- performance-optimization
- throughput
section: engineering
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49990364'
comments: https://news.ycombinator.com/item?id=49990364
why_read: Understand how causal profiling predicts the real-world impact of optimizing
  specific lines of code on overall throughput and latency. This tool helps engineers
  pinpoint high-leverage optimization targets that traditional profilers miss.
authors:
- Charlie Curtsinger
- Emery Berger
---

Traditional profilers mislead engineers by confusing where code spends time with where optimization will actually improve overall performance. In multithreaded systems, spending forty percent of runtime in a function does not mean speeding up that function will reduce end-to-end latency, especially when other worker threads dominate the critical path.

Coz solves this fundamental measurement gap through an elegant technique called causal profiling. Instead of attempting to artificially speed up target code, it pauses all concurrent threads slightly while the target code executes. This produces a virtual speedup that simulates what would happen if the target block ran faster.

By running these virtual speedup experiments continuously, the profiler generates a direct graph of optimization potential. It tells you the exact percentage improvement in system throughput you will achieve for every percentage optimization applied to a specific line.

Engineers no longer have to guess whether optimizing a lock, cache line, or hot loop will move the needle on system latency. You can measure the real causal impact before writing a single line of optimization code.
