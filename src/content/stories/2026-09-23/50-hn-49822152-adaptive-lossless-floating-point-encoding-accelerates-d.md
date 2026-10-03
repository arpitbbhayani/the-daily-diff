---
title: Adaptive lossless floating-point encoding accelerates decimal decompression
  in Parquet
source: hn
url: https://parquet.apache.org/blog/2026/09/22/alp-adaptive-lossless-floating-point-encoding-in-apache-parquet/
date: '2026-09-23'
tags:
- alp-encoding
- apache-parquet
- catchup
- decimal-data
- floating-point-compression
- hn
- lossless-encoding
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49822152'
comments: https://news.ycombinator.com/item?id=49822152
why_read: Read this to understand how adaptive lossless floating-point encoding optimizes
  compression and query performance for decimal values stored as floating-point types
  in Apache Parquet.
authors:
- Kosta Tarasov
- Andrew Lamb
- Prateek Gaur
---

Encoding floating-point values in columnar file formats has traditionally required a painful trade-off between slow decompression and poor compression ratios. While standard decimal types enforce a rigid schema up front, tools like pandas or JavaScript runtime engines frequently dump decimal values directly into standard float or double types.

Apache Parquet has integrated Adaptive Lossless Floating-Point encoding, known as ALP. ALP delivers compression ratios comparable to Zstandard while retaining SIMD-friendly decoding and fast random access.

The algorithm is specifically tailored for decimal data stored as floats, such as monetary figures, geographic coordinates, and sensor metrics. Unlike general-purpose compressors, it avoids catastrophic context drift and decompression bottlenecks during columnar scans.

For engineers managing high-throughput analytical query engines or massive data lakes, this new encoding substantially lowers scan latency without sacrificing disk footprint.
