---
title: Custom Wasm memory pool significantly reduces terminal memory
source: github
url: https://github.com/ghostty-org/ghostty/pull/13865
date: '2026-08-17'
tags:
- catchup
- ghostty
- github
- memory-management
- memory-pool
- terminal
- wasm
section: engineering
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49332669'
comments: https://news.ycombinator.com/item?id=49332669
why_read: This explains how a custom memory pool for WebAssembly can drastically reduce
  memory usage in applications like Ghostty. You will learn about the inefficiencies
  of standard memory allocators in Wasm and a practical solution for more efficient
  memory management.
authors:
- mitchellh
---

WebAssembly's memory model has unique characteristics that can trip up even experienced systems engineers. A recent `libghostty` pull request highlights a critical lesson: using standard heap allocators like `std.heap.MemoryPool` can lead to massive, permanent linear memory growth.

The problem stems from `std.heap.MemoryPool`'s 1.5x growth factor combined with Wasm's `BrkAllocator` growing by power-of-two big-allocation slots. This interaction results in disproportionate memory consumption compared to native targets, where virtual memory mappings do not cost physical memory in the same way.

By implementing a custom memory pool that grows by exactly one item size and sharing it across the entire Wasm module (instead of per-terminal), they achieved a remarkable 75 percent reduction in terminal memory. This is a masterclass in understanding platform-specific internals for significant performance gains.
