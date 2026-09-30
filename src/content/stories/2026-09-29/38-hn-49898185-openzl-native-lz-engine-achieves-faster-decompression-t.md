---
title: OpenZL native LZ engine achieves faster decompression than Zstandard
source: hn
url: https://openzl.org/blog/2026-09-29-lz-in-openzl/
date: '2026-09-29'
tags:
- catchup
- entropy-compression
- hn
- lz-compression
- lz4
- openzl
- pivco-huffman
- wire-format
- zstandard
section: engineering
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49898185'
comments: https://news.ycombinator.com/item?id=49898185
why_read: Learn how OpenZL's native LZ implementation achieves over twice the decompression
  speed of Zstandard through flexible wire format redesign and modular graph-based
  compression.
authors:
- terrelln
---

Optimizing legacy compression algorithms like Zstandard and LZ4 eventually hits a wall imposed by backward-compatible wire format specifications. By abandoning rigid wire constraints, OpenZL achieves more than double the decompression throughput of Zstandard at comparable compression ratios.

The architecture relies on a modular graph-based compression pipeline. It decouples high-order structure extraction from backend entropy encoders, integrating modern techniques like PivCo Huffman to maximize memory throughput.

Using an automated trainer, engineers can construct a custom Pareto frontier of compressors tailored to specific telemetry or column payloads. This flexible graph model allows swapping backend encoders based on exact CPU and bandwidth budgets.
