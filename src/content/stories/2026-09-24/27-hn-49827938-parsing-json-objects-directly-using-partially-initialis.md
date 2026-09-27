---
title: Parsing JSON objects directly using partially initialised data
source: hn
url: https://arthi-chaud.github.io/posts/json-ir/
date: '2026-09-24'
tags:
- abstract-syntax-tree
- algebraic-data-types
- catchup
- haskell
- hn
- intermediate-representation
- json-parsing
- partially-initialised-data
section: engineering
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 7
hn_id: '49827938'
comments: https://news.ycombinator.com/item?id=49827938
why_read: Understand how to eliminate the performance and allocation overhead of intermediate
  abstract syntax trees by streaming JSON directly into partially-initialised data
  types.
authors:
- Arthur Jamet
---

Traditional JSON deserializers follow a familiar two-step pattern: parse raw bytes into a generic intermediate AST, and then map that tree into your internal domain structs. This intermediate tree introduces substantial memory allocations and CPU overhead, which becomes a bottleneck in high-throughput data pipelines.

You can eliminate this middle layer entirely by populating partially-initialized data structures directly during the tokenization phase. By leveraging algebraic data types and staged meta-programming, the parser maps keys straight into target memory locations without building intermediate object maps.

For systems handling millions of payload operations per second, removing intermediary AST overhead provides immediate performance gains in both throughput and tail latency.
