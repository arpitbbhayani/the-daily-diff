---
title: Blink executes one-pass typed decisions via an embeddable C runtime
source: github
url: https://github.com/sqliteai/blink
date: '2026-09-23'
tags:
- c99
- catchup
- github
- inference-runtime
- system-one-models
- typed-decisions
- webassembly
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49814732'
comments: https://news.ycombinator.com/item?id=49814732
why_read: Learn how Blink enables fast, structured classification decisions without
  token generation or decoding loops. It demonstrates how to run lightweight, single-pass
  model inference via an embeddable C runtime.
authors:
- marcobambini
---

Running generative language models simply to make structured, discrete decisions is often massive overkill. Most agent routing and classification tasks do not need an autoregressive decoding loop, token generation, or complex JSON validation schemas.

Blink introduces an embeddable C99 runtime and WebAssembly target for fast, one-pass typed decisions. Instead of paying latency and compute penalties for token generation, the engine executes a single forward pass over input state and candidate options to output exact probabilities.

The runtime has zero external dependencies beyond standard libc, maps weights directly into read-only memory without copies, and executes in predictable single-digit millisecond timeframes. This architecture makes it practical to embed deterministic decision logic directly inside edge daemons, proxies, or high-throughput backend services.

Eliminating generative overhead transforms model routing from an expensive external network call into a cheap local function evaluation.
