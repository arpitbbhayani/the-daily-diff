---
title: Parsing JSON objects directly without intermediate AST allocations
source: hn
url: https://arthi-chaud.github.io/posts/json-ir/
date: '2026-09-23'
tags:
- abstract-syntax-trees
- catchup
- haskell
- hn
- intermediate-representation
- json-parsing
- partially-initialised-data
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49816845'
comments: https://news.ycombinator.com/item?id=49816845
why_read: This article demonstrates how to eliminate intermediate AST allocations
  and improve performance by parsing JSON directly using partially-initialised data
  structures.
authors:
- Arthur Jamet
---

Most JSON parsing libraries build an intermediate AST before decoding into target domain types. This pattern creates massive allocation overhead and cache pressure when processing high-volume streams of structured data in backend systems.

By leveraging partially-initialized data structures and algebraic data types, you can decode incoming bytes directly into concrete structs without an intermediate tree representation. The parser validates fields and populates target memory layouts on the fly, skipping intermediate map lookups and heap allocations entirely.

Eliminating the AST abstraction layer yields dramatic performance wins for high-throughput serialization pipelines.
