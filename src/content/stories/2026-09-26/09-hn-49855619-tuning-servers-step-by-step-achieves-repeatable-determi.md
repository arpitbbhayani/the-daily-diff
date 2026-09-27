---
title: Tuning servers step by step achieves repeatable deterministic benchmarks
source: hn
url: https://david.alvarezrosa.com/posts/tuning-a-server-for-benchmarking/
date: '2026-09-26'
tags:
- benchmarking
- catchup
- hn
- noise-reduction
- repeatability
- system-tuning
section: engineering
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49855619'
comments: https://news.ycombinator.com/item?id=49855619
why_read: Learn how system-level tuning reduces measurement noise to produce reliable
  and repeatable software benchmarks.
authors:
- "David \xC1lvarez Rosa"
image: /infographics/09-hn-49855619.jpg
---

Optimizing low-latency software requires reliable measurements, but an untuned Linux machine easily introduces several percent of variance across runs. A minor two percent algorithmic gain is completely obscured when the baseline noise floor sits at five percent.

Achieving deterministic benchmarks requires addressing multiple hardware and operating system layers. Standard configurations like disabling CPU frequency scaling governors, pinning execution to dedicated isolated cores (isolcpus), and turning off turbo boost remove dynamic clock rate fluctuations that skew timing results.

Microbenchmarking workloads that run in bursts also suffer from deep sleep state wake latencies. Disabling C-states and configuring predictable memory alignment ensures that variance reflects real code performance rather than OS scheduling quirks.
