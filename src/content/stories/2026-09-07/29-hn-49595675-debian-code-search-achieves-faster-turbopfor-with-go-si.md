---
title: Debian Code Search achieves faster TurboPFor with Go SIMD
source: hn
url: https://michael.stapelberg.ch/posts/2026-09-06-dcs-fast-turbopfor-go-simd/
date: '2026-09-07'
tags:
- catchup
- debian-code-search
- go-simd
- hn
- integer-compression
- inverted-index
- turbopfor
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49595675'
comments: https://news.ycombinator.com/item?id=49595675
why_read: Read this to understand how Go's SIMD support enables more efficient integer
  compression with TurboPFor, leading to the removal of cgo dependencies and improved
  performance in Debian Code Search. You will learn about the role of fast integer
  codecs in search engines and the impact of AVX512.
authors:
- Michael Stapelberg
---

Optimizing a search engine's core components for speed often means wrestling with low-level details. The Debian Code Search team just delivered a masterclass by porting their TurboPFor integer compression to Go's new SIMD support, finally shedding their last Cgo dependency.

This move not only streamlined the codebase but also leveraged modern instruction sets like AVX512 to outperform the previous C-based implementation. It demonstrates that with the right tools, Go can now compete at the bare metal for raw processing power.

For engineers tackling high-throughput data processing or searching, this offers a concrete blueprint for achieving serious performance gains while maintaining a modern, safe codebase. It proves that smart engineering can beat a direct C/Cgo dependency.
