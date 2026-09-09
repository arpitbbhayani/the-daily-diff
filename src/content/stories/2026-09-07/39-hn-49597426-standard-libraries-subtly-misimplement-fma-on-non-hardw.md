---
title: Standard libraries subtly misimplement FMA on non-hardware platforms
source: hn
url: https://shnatsel.github.io/implementing-fma-finding-bugs-in-std/
date: '2026-09-07'
tags:
- catchup
- emulation
- floating-point-arithmetic
- fma
- hn
- musl-libc
- rust
- simd
section: engineering
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49597426'
comments: https://news.ycombinator.com/item?id=49597426
why_read: This article exposes subtle bugs in Rust and musl libc's FMA implementations
  when hardware support is absent. Readers will learn the complexities of accurate
  fused multiply-add emulation and its importance for reliable floating-point arithmetic.
authors:
- Sergey "Shnatsel" Davidoff
---

Implementing Fused Multiply-Add (FMA) correctly reveals how fragile high-precision numeric computations can be. One engineer's quest uncovered subtle bugs in both Rust and `musl libc` implementations, highlighting crucial differences between hardware and software FMA.

This article delves into the complexities of FMA emulation for CPUs without native support (like some Intel chips), leveraging formally proven algorithms to ensure correctness. It is a masterclass in deep systems engineering, showing how standard libraries can get fundamental math wrong and what it takes to build truly robust numerical foundations.

Understanding these low-level details is critical for anyone building performance-sensitive or numerically intensive applications. It teaches you that correctness often requires going far beyond basic library calls.
