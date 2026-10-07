---
title: Comparing four open-source semantic layers with runnable verification probes
source: hn
url: https://motley.ai/blog-posts/four-open-source-semantic-layers-54-capabilities/
date: '2026-10-06'
tags:
- catchup
- cube-core
- hn
- malloy
- metricflow
- query-semantics
- semantic-layer
- slayer
section: databases
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49975888'
comments: https://news.ycombinator.com/item?id=49975888
why_read: Read this to understand how four major open-source semantic layers stack
  up across 54 distinct features verified by executable test probes.
authors:
- Egor Kraev
---

Semantic layers are becoming a foundational bridge between data warehouses and AI agents, yet evaluating their actual query expressiveness has historically been murky. Most documentation relies on high-level feature checklists rather than rigorous query verification.

A recent benchmark evaluated four major open-source semantic layers - Cube, Malloy, MetricFlow, and SLayer - across 54 distinct capabilities. Rather than relying on vendor claims, the test ran a single unified dataset through all four engines and validated generated outputs directly against hand-written SQL test probes.

The results highlight substantial architectural divergence in query-time expressiveness. While traditional frameworks excel at pre-aggregated dimensional reporting, newer architectures prioritize dynamic join resolution and composable calculation graphs that autonomous agents require.

Choosing the right semantic abstraction requires looking past marketing promises and verifying how each engine handles complex metric dependencies in code.
