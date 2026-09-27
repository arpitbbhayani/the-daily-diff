---
title: Extracting calibrated typed decisions from a single encoder pass
source: github
url: https://github.com/tomek7667/cbjev
date: '2026-09-24'
tags:
- benchmarking
- calibration
- catchup
- encoder-pass
- github
- inference-latency
- typed-decisions
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49830413'
comments: https://news.ycombinator.com/item?id=49830413
why_read: Learn how cbjev achieves faster, better-calibrated structured text decisions
  by sharing a single encoder pass across multiple queries.
authors:
- tomek7667
---

Running structured classifications on LLM outputs usually means paying high token latency penalties for every distinct field. Cbjev takes a different architectural route by extracting multiple typed decisions (choice, score, boolean) from a single encoder pass.

Because every query in a call shares one underlying encoding of the target text or JSON state, query latency drops to 3 ms for one question and 11 ms for ten questions over a 500-token document on a single RTX 4090.

Crucially, it drastically reduces label instability. The framework shows only 0.2 percent answer flips when options are reordered compared to over 7 percent on baseline checkpoints, while maintaining strong calibration across standard benchmarks.

For high-throughput extraction pipelines, reusing intermediate encoder representations beats multi-turn conversational prompting every single time.
