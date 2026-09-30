---
title: Per-query read depth accelerates sparse decoding over offloaded caches
source: hn
url: https://arxiv.org/abs/2609.17652
date: '2026-09-29'
tags:
- bit-planes
- catchup
- hn
- kv-cache
- offloaded-memory
- quantization
- sparse-decoding
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49893944'
comments: https://news.ycombinator.com/item?id=49893944
why_read: Learn how dynamic per-query bit allocations over bit-plane key caches reduce
  memory bandwidth bottlenecks during long-context LLM decoding.
authors:
- Vivek Kalyanarangan
---

Serving long-context agentic sessions of up to one million tokens creates severe memory bus bottlenecks. When the key-value cache is offloaded to host memory, the scan required to rank keys for top-k selection often becomes the primary operation bounding decode latency.

Fathom solves this by rethinking key scans through dynamic bit allocation. Instead of fetching fixed-precision representations, the system stores the 4-bit key cache in a channel-major layout as bit planes. Each query dynamically decides how many bit planes to read per channel using reverse water-filling across variance-weighted channel importances.

On Qwen3-8B with a one-million token context, this approach yields a 1.67x GPU speedup over standard 136-bit scans while reading 18 percent fewer bytes than competitive sparse methods with lower attention error. Reaching high step agreement on real coding-agent sessions at only 92 bits per key proves that query-aware adaptive precision is a practical path to scaling offloaded agent memory.
