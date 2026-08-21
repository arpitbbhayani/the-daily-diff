---
title: 7.5x faster encryption in Go with new simd packages
source: hn
url: https://kerkour.com/golang-chacha20-encryption-simd-archsimd
date: '2026-08-19'
tags:
- catchup
- encryption
- go
- hn
- simd
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49362187'
comments: https://news.ycombinator.com/item?id=49362187
why_read: This text highlights significant performance improvements in Go encryption.
  Readers will learn about the new simd and simd/archsimd packages and how they achieve
  7.5x faster encryption.
authors:
- cold_pizz4
---

You can unlock incredible performance gains in Go by leveraging SIMD instructions, especially for cryptographic operations. New `simd` and `simd/archsimd` packages provide direct access to these CPU capabilities, making your applications dramatically faster.

One real-world example demonstrates a 7.5x speedup for ChaCha20 encryption. This is not about minor tweaks; it is about tapping into the hardware's full potential for computations that are typically CPU-bound.

Understanding and applying these low-level optimizations is a critical skill for any senior engineer tackling high-performance systems. This shows how to push Go to its limits where it truly matters.
