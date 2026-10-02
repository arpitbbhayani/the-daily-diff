---
title: Avoiding heap allocations by parsing byte slices in place
source: hn
url: https://blog.sebastiansastre.co/posts/eight-bytes-are-already-a-number/
date: '2026-10-01'
tags:
- byte-parsing
- catchup
- heap-allocation
- hn
- memory-management
- rust
- zero-copy
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49921543'
comments: https://news.ycombinator.com/item?id=49921543
why_read: Understand how copying byte slices into heap-allocated vectors introduces
  unnecessary runtime overhead and syscalls. You will learn the mechanics of zero-copy
  parsing for primitive numbers in Rust to write leaner, higher-performance systems
  code.
authors:
- sebastianconcpt
---

Allocating on the heap to parse primitive numbers is one of the most common hidden performance drains in high-throughput network services.

A typical naive parser often clones bytes from a slice into a dynamic vector before converting it into an integer. In languages like Rust, every vector allocation incurs heap overhead and risks OS syscalls when the memory allocator exhausts its free lists under load.

Eight contiguous bytes in memory already represent an unsigned 64-bit integer. By utilizing zero-copy reference slicing and fixed-size array casting via primitives such as TryInto and from_le_bytes, you eliminate intermediate allocations entirely.

Treating memory buffers as in-place structures rather than copying them simplifies code paths and prevents allocator contention in low-latency systems.
