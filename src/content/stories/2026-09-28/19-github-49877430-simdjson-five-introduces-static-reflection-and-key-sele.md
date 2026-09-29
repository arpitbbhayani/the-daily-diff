---
title: Simdjson five introduces static reflection and key selectors
source: github
url: https://github.com/simdjson/simdjson/releases/tag/v5.0.0
date: '2026-09-28'
tags:
- catchup
- deserialization
- github
- json-parsing
- key-selectors
- simdjson
- static-reflection
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49877430'
comments: https://news.ycombinator.com/item?id=49877430
why_read: Learn how simdjson 5.0 leverages modern C++ reflection and compile-time
  key selectors to achieve faster single-pass JSON deserialization.
authors:
- Daniel Lemire
---

Extracting a handful of fields from a large JSON document usually forces parsers into a costly compromise. Developers either parse the full document object into memory or perform multiple linear key lookups across the raw payload.

The release of simdjson 5.0 tackles this overhead directly by introducing compile-time key selectors alongside official support for C++26 static reflection. Instead of traversing the document repeatedly for every struct member, the parser now reads the entire object in a single vectorized pass regardless of key ordering.

For backend workloads that deserialize gigabytes of JSON events or API payloads every second, single-pass SIMD filtering eliminates redundant allocations and branch mispredictions. The parser also tightens its numerical bounds handling, reporting overflowing 64-bit unsigned integers as explicit big numbers rather than silently corrupting data.

Vectorized parsing continues to prove that mechanical sympathy can unlock massive throughput gains in core backend infrastructure without rewriting existing protocols.
