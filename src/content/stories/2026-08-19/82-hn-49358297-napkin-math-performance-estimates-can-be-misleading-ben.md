---
authors:
- yosefk
comments: https://news.ycombinator.com/item?id=49358297
date: '2026-08-19'
depth_score: 8
hn_id: '49358297'
image: /infographics/82-hn-49358297.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- benchmarks
- catchup
- hn
- latency
- napkin-math
- performance-estimates
- throughput
title: Napkin Math performance estimates can be misleading benchmarks
url: https://danluu.com/exercise-7/
utility_score: 8
why_read: This text highlights potential issues with common performance benchmarks
  like 'napkin math' and provides detailed examples of various operation latencies
  and throughputs. Readers will learn to critically assess performance estimates used
  in technical evaluations.
---

Misinterpreting performance benchmarks can lead to flawed system designs and optimizations. This article dives into why many common performance "napkin math" estimates, like those found in popular guides, often present an incomplete or even misleading picture.

It is not enough to just know the numbers; understanding the context, the measurement methodology, and the typical workload assumptions behind them is paramount. For instance, a sequential SSD read might be fast, but how does random access at different block sizes compare, and what are the implications for a real-world database workload?

This piece helps you develop the critical lens necessary to evaluate performance claims, ensuring you make informed architectural decisions based on truly relevant data, not just headline figures.