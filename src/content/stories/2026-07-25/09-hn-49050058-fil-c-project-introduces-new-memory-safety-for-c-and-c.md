---
authors:
- Piotr Sarnacki
comments: https://news.ycombinator.com/item?id=49050058
date: '2026-07-25'
depth_score: 8
hn_id: '49050058'
image: /infographics/09-hn-49050058.jpg
interest_score: 8
novelty_score: 8
section: engineering
source: hn
tags:
- c
- c++
- catchup
- fil-c
- garbage-collection
- hn
- memory-safety
- rust
- systems-programming
- zig
title: Fil-C project introduces new memory safety for C and C++
url: https://itsallaboutthebit.com/memory-safety-absolutists/
utility_score: 7
why_read: This text explores the evolving landscape of memory safety in systems programming,
  particularly introducing Fil-C as a novel approach to achieve memory safety in C,
  C++, and potentially Zig, offering an alternative to Rust's compile-time guarantees.
---

The debate around memory safety in systems programming often boils down to Rust versus the rest. However, a new project, Fil-C, is changing the game for C and C++ by introducing robust memory safety at compile time, causing programs to panic on invalid access.

This is a significant shift. Imagine C/C++ code with the same crash-on-error behavior as a garbage-collected language, achieved through a combination of GC and InvisiCaps. Zig is even exploring a similar compilation mode, inspired by Fil-C.

This article provides a compelling look at how fundamental language properties and engineering practices are evolving. It challenges existing notions of memory safety and could lead to more robust systems built with traditional languages.