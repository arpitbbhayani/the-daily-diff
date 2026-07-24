---
authors:
- Ragnar Groot Koerkamp
comments: https://news.ycombinator.com/item?id=48951898
date: '2026-07-17'
hn_id: '48951898'
image: /infographics/01-hn-48951898.jpg
interest_score: 9
section: systems
source: hn
tags:
- assembly
- batching
- binary-search
- cache-lines
- catchup
- hn
- memory-layouts
- performance-optimization
- simd
- static-search-tree
title: Static search trees are 40x faster than binary search
url: https://curiouscoding.nl/posts/static-search-tree/
why_read: This post details advanced techniques for optimizing static search trees,
  achieving a 40x speedup over binary search. Readers will learn about assembly-level
  optimizations, batching, and memory layout strategies for high-throughput data searching.
---

Thinking your search is fast with binary search? Think again. A new deep dive into static search trees shows how to achieve an astounding 40x speedup over binary search for sorted data. This is not just a theoretical improvement, but a practical guide.

The secret lies in obsessively optimizing for modern CPU architectures: manual SIMD instructions, smart batching, aggressive prefetching, and meticulously crafted memory layouts to leverage cache lines. The post walks through assembly-level tweaks that shave off instructions and exploit hardware capabilities.

This article is a masterclass in low-level performance engineering. If you are building high-throughput systems or optimizing database query paths, the insights on data structure design and cache-aware programming are invaluable. It demonstrates that sometimes, the biggest gains come from understanding the hardware.

It is time to rethink how you search.