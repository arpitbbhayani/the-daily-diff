---
title: Running frontier MoE models locally with asymmetric quantization
source: hn
url: https://dwarfstar.sh/
date: '2026-10-02'
tags:
- asymmetric-quantization
- catchup
- hn
- kv-cache-persistence
- local-inference
- mixture-of-experts
- prompt-caching
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49936575'
comments: https://news.ycombinator.com/item?id=49936575
why_read: Learn how DwarfStar 4 enables local execution of massive mixture-of-experts
  models through asymmetric quantization and disk-persisted KV caching. This provides
  a clear architectural model for running frontier models efficiently on consumer
  hardware.
authors:
- fibo
image: /infographics/04-hn-49936575.jpg
---

Salvatore Sanfilippo has released DwarfStar 4, a minimalist C inference engine engineered to run massive frontier mixture-of-experts models locally on consumer workstations.

Instead of uniform weight reduction across billions of parameters, ds4 applies asymmetric two-bit quantization specifically to the routed experts while preserving full precision on critical shared paths. This architecture allows models like DeepSeek V4 Flash to fit within high-memory machines without crippling reasoning fidelity.

The KV cache architecture is equally pragmatic. Prompts are hashed via SHA1 and cached directly to disk, turning prefix computation into a fast SSD lookup that survives server restarts. A single resident binary exposes a CLI, HTTP endpoints, and persistent coding agent harnesses over the shared state.

High-throughput local inference does not require massive distributed clusters when you optimize memory layouts at the metal.
