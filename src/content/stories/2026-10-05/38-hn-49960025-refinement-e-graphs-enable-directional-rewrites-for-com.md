---
title: Refinement e-graphs enable directional rewrites for compiler optimization
source: hn
url: https://www.philipzucker.com/refinement_egraph/
date: '2026-10-05'
tags:
- catchup
- compiler-optimization
- e-graphs
- equality-saturation
- hn
- program-refinement
section: engineering
is_news: false
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49960025'
comments: https://news.ycombinator.com/item?id=49960025
why_read: Learn how adding partial ordering relations to e-graphs allows compilers
  to model unidirectional optimizations and undefined behavior. It provides a concrete
  implementation and mental model for optimizing expressions with don't-care semantics.
authors:
- Philip Zucker
---

Traditional equality saturation using e-graphs assumes optimizations are bidirectional equivalence rewrites. However, many real compiler optimizations and query transforms represent unidirectional refinements from abstract specifications to concrete machine instructions.

Refinement e-graphs bake a directed inequality relation directly into the e-graph data structure alongside equivalence classes. This enables optimizers to model non-deterministic don't-care states, loose evaluation orders, and undefined behaviors without polluting symmetric equivalence classes with invalid reverse transforms.

For engineers working on query optimizers, DSL compilers, or formal verification pipelines, this technique provides a mathematically sound way to search optimization spaces where intermediate transformations are non-invertible.

Directional refinement fixes one of the core expressive limits of classic e-graphs.
