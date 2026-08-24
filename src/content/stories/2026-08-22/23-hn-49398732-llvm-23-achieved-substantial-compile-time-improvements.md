---
title: LLVM 23 achieved substantial compile-time improvements through key optimizations
source: hn
url: https://aengelke.net/llvm23-ct.html
date: '2026-08-22'
tags:
- catchup
- compile-time
- hash-tables
- hn
- linear-probing
- llvm
- smallvector
- tail-call-optimization
- xxh3
section: engineering
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 7
hn_id: '49398732'
comments: https://news.ycombinator.com/item?id=49398732
why_read: This article offers a detailed look into the specific technical optimizations
  implemented in LLVM 23 that led to substantial compile-time improvements. Readers
  will gain insight into how targeted changes in data structures and algorithms can
  significantly boost compiler efficiency.
authors:
- fanf2
---

LLVM 23 has delivered substantial compile-time improvements, with -6.75% overall and over -10% for projects like sqlite3, achieved through a series of meticulous, non-obvious optimizations.

This speedup comes from a deep dive into core data structures and allocation strategies. Key changes include moving from quadratically probed hash tables to linear probing for DenseMap, implementing a compact bit array for occupancy tracking, and switching to the faster xxh3 hash function. These adjustments, while seemingly minor, collectively reduce cache misses and improve instruction efficiency.

Further gains came from optimizing SmallVector's push_back grow path to permit tail call optimization and refining BumpAllocator behavior. These are not grand algorithmic breakthroughs, but rather the result of principal-level engineering: understanding the low-level impact of every byte and instruction on performance in highly optimized codebases. It is a masterclass in how incremental gains compound into significant wins.

Real performance comes from relentless attention to detail, even in the most fundamental code.
