---
title: Rust and musl libc FMA implementations contain subtle bugs
source: hn
url: https://shnatsel.github.io/implementing-fma-finding-bugs-in-std/
date: '2026-09-02'
tags:
- catchup
- floating-point-errors
- fused-multiply-add
- hn
- musl-libc
- numerical-accuracy
- rust-std
- simd-emulation
section: engineering
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49539006'
comments: https://news.ycombinator.com/item?id=49539006
why_read: This article details how subtle bugs were found in Rust and musl libc's
  fused multiply-add (FMA) implementations. Readers will learn about the complexities
  of accurately emulating FMA on hardware without native support and the importance
  of rigorous verification for numerical algorithms.
authors:
- Sergey "Shnatsel" Davidoff
---

Imagine trying to implement a seemingly simple math operation, a * b + c, only to find out it exposes fundamental correctness issues in highly optimized, widely used standard libraries like musl libc and Rust's std::simd. This happened when an engineer implemented Fused Multiply-Add (FMA).

FMA is crucial for precise numerical computations, like trigonometric functions, as it performs the entire operation with a single rounding error. The surprising catch? Not all CPUs have hardware FMA, particularly some Intel parts, forcing software emulation. This emulation, when not handled with extreme care, introduces subtle precision bugs.

The author's journey, using formal proofs to guide implementation, reveals that even core language libraries can harbor these elusive numerical errors. It is a powerful reminder that fundamental correctness in low-level code, especially around floating-point arithmetic, requires rigorous attention, impacting everything built on top.

This is not just about math; it is about the bedrock of robust software engineering.
