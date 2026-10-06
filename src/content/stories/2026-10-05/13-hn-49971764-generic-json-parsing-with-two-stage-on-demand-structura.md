---
title: Generic JSON parsing with two-stage on-demand structural indexing
source: hn
url: https://nihilai-collective.net/generic-parsing
date: '2026-10-05'
tags:
- catchup
- generic-json-parsing
- hn
- jsonifier
- structural-tape
- two-stage-architecture
section: engineering
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49971764'
comments: https://news.ycombinator.com/item?id=49971764
why_read: Learn how Jsonifier implements a two-stage on-demand architecture using
  structural tapes for schema-free generic parsing. Understand the architectural trade-offs
  behind high-performance JSON processing.
authors:
- Nihilai Collective
image: /infographics/13-hn-49971764.jpg
---

Parsing arbitrary JSON payloads without a rigid schema usually forces engines into slow, generic tree allocations. Standard on-demand parsers avoid tree allocations by scanning forward, but they degrade sharply when fields appear out of order or when traversing backwards.

The Jsonifier engine tackles this by combining SIMD structural indexing with lazy tape construction. Instead of scanning linearly or building full intermediate DOM trees, it creates a lightweight vector-indexed structural tape on the fly. This allows schema-free, out-of-order field access at SIMD throughput.

When optimizing data ingestion pipelines, matching parser memory access patterns to CPU vector lanes can yield massive latency reductions on unpredictable workloads.
