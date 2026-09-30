---
title: Tuning a server eliminates measurement noise in benchmarks
source: hn
url: https://david.alvarezrosa.com/posts/tuning-a-server-for-benchmarking/
date: '2026-09-29'
tags:
- benchmarking
- catchup
- cpu-performance
- hn
- measurement-noise
- system-tuning
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49900117'
comments: https://news.ycombinator.com/item?id=49900117
why_read: Learn how systematic server tuning removes hardware noise to make microbenchmark
  measurements repeatable and deterministic.
authors:
- "David \xC1lvarez Rosa"
---

Optimizing software starts with measurement, but measurement is useless if run-to-run noise masks your performance delta. On an untuned server, the exact same binary can easily vary by five percent or more across runs because of CPU frequency governors, background scheduler interruptions, and idle power-saving transitions.

Tuning a machine for benchmarking requires the opposite mindset of tuning for maximum production throughput. Instead of maximizing peak burst performance, your goal is strict determinism and repeatability. Isolating CPU cores via cpuset, locking CPU clocks to fixed frequencies, and disabling dynamic boost algorithms eliminates thermal throttling artifacts.

Controlling for sleep states and CPU wake-up latency ensures microbenchmarks reflect raw execution costs rather than hardware transition delays. Clean baselines make micro-optimizations measurable.
