---
title: Blink delivers fast typed decisions in a single forward pass
source: github
url: https://github.com/sqliteai/blink
date: '2026-09-24'
tags:
- c99-runtime
- catchup
- github
- single-forward-pass
- system-one-models
- typed-decisions
- webassembly
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49826889'
comments: https://news.ycombinator.com/item?id=49826889
why_read: Learn how Blink provides fast structured decision-making without token generation
  using a lightweight C and WebAssembly runtime.
authors:
- marcobambini
---

Most AI integrations pay a massive latency tax by passing structured routing decisions through full autoregressive LLM decoding loops. Parsing JSON outputs and handling generation retries adds unnecessary overhead to critical service paths.

Blink introduces a dedicated C99 runtime that executes structured decisions in a single forward pass without token generation. It takes a given state and predefined criteria, outputting direct probability distributions across declared options in roughly 33 microseconds.

The runtime relies solely on libc and libm with zero external dependencies, mapping weights read-only to prevent memory allocations. It compiles down to both native C binaries and WebAssembly modules.

Eliminating token decoding loops opens up predictable, microsecond-level AI decision logic for high-throughput distributed systems.
