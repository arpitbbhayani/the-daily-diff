---
title: Making a Rust Filter 4x Faster by Removing an If
source: hn
url: https://www.greyblake.com/blog/branchless-rust/
date: '2026-08-03'
tags:
- branchless
- catchup
- hn
- optimization
- performance
- rust
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49151991'
comments: https://news.ycombinator.com/item?id=49151991
why_read: This article demonstrates how branchless programming can significantly improve
  filter performance in Rust. Readers will learn a technique for optimizing hot paths
  by eliminating conditional branches and gain insight into surprising benchmark results.
authors:
- Serhii Potapov
---

Optimizing a hot path? A common `filter` operation in Rust became 4x faster just by removing an `if` statement, leveraging branchless programming. This highlights how crucial CPU branch prediction is for performance.

The article dives deep into the puzzling benchmark results where filtering 50% of elements was slower than filtering 99%. The culprit was unpredictable branches that forced the CPU to guess incorrectly, flushing pipelines and wasting cycles.

You will see specific Rust code transformations, understand the underlying CPU mechanics, and gain actionable techniques for writing highly optimized, branchless code. This is essential for anyone working on data-intensive systems, from database engines to high-performance computing.
