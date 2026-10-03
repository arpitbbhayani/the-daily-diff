---
title: Querying compiled Android artifacts directly eliminates decompiler overhead
source: github
url: https://github.com/MG1937/ASC
date: '2026-09-23'
tags:
- android-decompilation
- apk-indexing
- catchup
- github
- r8-compiler
- reverse-engineering
section: engineering
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49818490'
comments: https://news.ycombinator.com/item?id=49818490
why_read: Learn how treating compiled Android artifacts as direct queryable structures
  eliminates massive memory bloat and lengthy indexing during decompilation.
authors:
- MG1937
---

Traditional decompilers like JADX consume gigabytes of memory and take tens of minutes building cross-reference indexes before you can run a single query. They treat decompilation as an exhaustive batch process, inflating entire codebases into memory just to answer point lookups.

Droid ASC flips this architecture on its head by treating compiled Android APKs as structured databases. Instead of preprocessing and caching massive dependency graphs, the engine queries the raw bytecode structures on demand.

By leveraging R8 compiler layout guarantees and direct binary offsets, it extracts classes, calls, and control flow in milliseconds. Benchmarks show a 41 to 269 times speedup over standard decompilers while keeping memory usage strictly bounded.

Treating static binary artifacts as queryable data structures eliminates the need for expensive upfront indexing.
