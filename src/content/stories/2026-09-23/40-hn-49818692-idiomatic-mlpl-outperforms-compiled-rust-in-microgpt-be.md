---
title: Idiomatic MLPL outperforms compiled Rust in microgpt benchmarks
source: hn
url: https://softwarewrighter.github.io/microgpt-mlpl/
date: '2026-09-23'
tags:
- autograd
- benchmarking
- catchup
- dsl
- hn
- microgpt
- mlpl
- rust
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49818692'
comments: https://news.ycombinator.com/item?id=49818692
why_read: This text compares five implementations of a microgpt algorithm across Python,
  Rust, and MLPL variants. Read it to see how high-level DSL primitives can achieve
  conciseness while outperforming low-level compiled Rust code in execution time.
authors:
- softwarewright
---

Porting minimal transformer implementations to systems languages reveals the exact mechanical cost of scalar autograd and dynamic tensor graphs. A port of microgpt to standalone Rust without external crates dropped execution time from 64.4 seconds in CPython to 0.589 seconds for 1,000 training steps on an M1 Max.

The Rust implementation relies on a tape-based scalar autograd engine across 390 lines of code, matching the 4,192 parameter architecture byte-for-byte. Expressing the same network in an idiomatic array DSL dropped code size to 48 lines while beating compiled Rust runtime at 0.468 seconds.

Implementing basic attention and backward passes from scratch is one of the clearest ways to master KV caching mechanics and autograd memory overhead.
