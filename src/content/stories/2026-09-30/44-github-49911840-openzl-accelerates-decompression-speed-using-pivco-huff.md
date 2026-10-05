---
title: OpenZL accelerates decompression speed using PivCo Huffman decoding
source: github
url: https://github.com/facebook/openzl/releases/tag/v0.3.0
date: '2026-09-30'
tags:
- catchup
- compression-transformer
- decompression-speed
- github
- openzl
- pivco-huffman
- simd
section: news
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49911840'
comments: https://news.ycombinator.com/item?id=49911840
why_read: This release overview details how OpenZL v0.3.0 leverages PivCo Huffman
  entropy coding and SIMD acceleration to drastically boost decompression throughput.
authors:
- Cyan4973
---

Decompression throughput is frequently the hidden bottleneck in high-performance storage engines and network serialization layers. OpenZL v0.3.0 introduces a major redesign of its native LZ engine that pushes decompression speeds past 3000 MB/s at level 1 compression.

The core breakthrough comes from integrating PivCo Huffman, a novel entropy layout designed by Marcin Żukowski. By structuring the bitstream layout to maximize SIMD vectorization, the decoder achieves 144 percent faster decompression than Zstandard at equivalent compression ratios.

The release also introduces the Compression Transformer, which dynamically constructs neural numeric compression graphs on the fly based on incoming data shapes.

For engineers building analytical databases, query engines, or distributed storage systems, these low-level entropy advances offer immediate architectural gains.
