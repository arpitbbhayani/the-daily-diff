---
title: Parsing compressed JSON streams at forty gigabytes per second
source: hn
url: https://lemire.me/blog/2026/10/01/parsing-compressed-json-at-40-gb-s/
date: '2026-10-01'
tags:
- catchup
- data-compression
- high-throughput
- hn
- json-parsing
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49922086'
comments: https://news.ycombinator.com/item?id=49922086
why_read: Learn how specialized algorithmic optimizations enable parsing compressed
  JSON data at ultra-high throughput.
authors:
- mfiguiere
---

Parsing structured data at line rate remains one of the hardest performance bottlenecks in distributed data pipelines. Daniel Lemire outlines techniques capable of parsing compressed JSON at throughputs exceeding 40 GB per second on modern hardware.

The core breakthrough relies on combining vectorized SIMD instructions with streaming decompression pipelines. By executing structural index validation directly against compressed data blocks, the parser eliminates memory bandwidth bottlenecks and intermediate allocation overhead.

For systems engineers designing distributed query engines or high-ingestion logging pipelines, this demonstrates that serialization performance does not have to be the ceiling of your architecture.

Hardware vectorization can fundamentally redefine your serialization throughput.
