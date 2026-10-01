---
title: Native LZ engine in OpenZL outperforms standard compression algorithms
source: hn
url: https://openzl.org/blog/2026-09-29-lz-in-openzl/
date: '2026-09-30'
tags:
- catchup
- entropy-encoding
- hn
- lz-compression
- lz4
- openzl
- pivco-huffman
- wire-format
- zstandard
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49910112'
comments: https://news.ycombinator.com/item?id=49910112
why_read: Learn how OpenZL achieves twice the decompression speed of Zstandard by
  decoupling wire format constraints and introducing modular backend entropy compressors.
authors:
- terrelln
---

Compression libraries like Zstandard and LZ4 have reached a plateau where further speedups are impossible without breaking backward compatibility of their wire formats. OpenZL solves this bottleneck in version 0.2.0 by introducing a native, unconstrained LZ engine that decouples format constraints from compression algorithms.

By escaping legacy wire formats, OpenZL incorporates modern compression research such as PivCo Huffman coding. This architectural change allows the engine to double decompression throughput compared to Zstandard while preserving equivalent compression ratios.

The core design operates on a modular compression graph. Instead of hardcoding entropy encoding steps, backend engines can be swapped or disabled entirely based on data profiles. Turning off entropy coding matches raw LZ4 performance, while fine-tuned configurations span Zstandard levels 1 through 7.

This graph-based design enables automated Pareto frontier tuning tailored specifically to custom backend workloads.

Revisiting wire formats yields massive performance wins that incremental code optimizations cannot touch.
