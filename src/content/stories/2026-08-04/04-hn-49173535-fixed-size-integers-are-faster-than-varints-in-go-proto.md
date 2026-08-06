---
title: Fixed-size integers are faster than varints in Go Protobuf
source: hn
url: https://kmcd.dev/posts/protobuf-varint-vs-fixed/
date: '2026-08-04'
tags:
- catchup
- cpu-overhead
- fixed-size-integers
- go
- hn
- performance
- protobuf
- varint
section: systems
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 7
hn_id: '49173535'
comments: https://news.ycombinator.com/item?id=49173535
why_read: This article benchmarks Protobuf varints against fixed-size integers in
  Go, showing that fixed-size integers can be up to 4.5x faster for high-throughput
  services, particularly with large or negative values.
authors:
- ingve
---

Did you know Protobuf varints could be slowing down your Go services? This deep dive benchmarks the CPU cost, revealing that fixed-size integers can be up to 4.5x faster for packed 64-bit arrays.

The overhead comes from varints needing byte-by-byte processing for continuation bits, a dramatically more complex CPU path than fixed-size integers. For high-throughput services where CPU cycles are precious, this optimization is not just a nice-to-have, it is a game-changer.

Understanding these low-level serialization differences can be critical for optimizing backend performance. This is the kind of detail that separates good system design from great system design.
