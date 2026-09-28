---
title: Polyxor achieves extreme hashing throughput with proven collision bounds
source: github
url: https://github.com/orlp/polyxor
date: '2026-09-27'
tags:
- carryless-multiplication
- catchup
- data-integrity
- formal-verification
- github
- rust
- universal-hashing
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49866268'
comments: https://news.ycombinator.com/item?id=49866268
why_read: Understand the design and formal Lean verification behind PolyXOR128, a
  high-throughput hash function offering cryptographic-strength collision resistance
  using hardware-accelerated carryless multiplication.
authors:
- orlp
---

Most data integrity checks in storage systems and distributed networks face an uncomfortable trade-off between cryptographic security and raw CPU throughput. PolyXOR128 changes this equation by delivering provable 128-bit universal hashing at speeds exceeding 130 GB/s on modern server CPUs.

Written in Rust, PolyXOR128 uses hardware-accelerated carryless multiplication to process large byte streams. When initialized with a random key, the collision probability between two inputs of n bytes is mathematically bounded to at most (n/4096 + 3) / 2^128. This mathematical bound is formally verified in Lean, eliminating reliance on empirical heuristics.

For distributed storage engines, write-ahead logs, and memory caches, this performance outpaces most 64-bit non-cryptographic hashes while providing mathematically sound defense against adversarial collisions. If your platform supports modern carryless multiplication instructions, it offers a compelling primitive for data integrity layers.

Formal verification paired with hardware vectorization represents the gold standard for modern infrastructure algorithms.
