---
title: HySparse2 optimizes agentic inference through hierarchical key-value sharing
source: hn
url: https://twitter.com/_LuoFuli/status/2102766365190901957
date: '2026-09-26'
tags:
- agentic-inference
- catchup
- hn
- hysparse2
- kv-cache
- long-context-retrieval
- prefill-cost
- sparse-attention
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49853136'
comments: https://news.ycombinator.com/item?id=49853136
why_read: Learn how the HySparse2 architecture slashes prefill compute and memory
  footprints in long-context agentic workloads through dual-level KV sharing.
authors:
- Fuli Luo
---

Agentic AI workloads break standard transformer inference assumptions because repeated tool observations cause context windows to balloon while requiring constant prefilling.

The new HySparse2 architecture targets this exact bottleneck by introducing two distinct levels of key-value cache sharing. Cross-decoder layers construct their keys and values directly from self-decoder states through KV bridging, allowing prefill computation to terminate early. Within each hybrid block, sparse attention layers reuse the key-value cache and routing indices of preceding full-attention layers.

Replacing block-level routing with token-level selection and merging sliding-window attention into a single shared cache delivers dramatic efficiency gains. At one million tokens, the architecture achieves a 5.02 times reduction in prefill FLOPs alongside a 4.5 times smaller key-value cache footprint, all while improving long-context retrieval scores.

Optimizing KV cache reuse at the architectural level is becoming the primary path to scalable agent systems.
