---
title: A Complete Floating-Point to_chars in 18 kB
source: hn
url: https://vitaut.net/posts/2026/complete-to-chars/
date: '2026-08-18'
tags:
- binary-size
- c++17
- catchup
- correctly-rounded
- floating-point-formatting
- hn
- performance
- std::to_chars
section: engineering
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49345182'
comments: https://news.ycombinator.com/item?id=49345182
why_read: This post compares a compact, high-performance implementation of `std::to_chars`
  with the standard library's version. Readers will learn how a complete floating-point
  formatting function can be significantly smaller and faster than commonly implemented.
authors:
- vitaut
---

Standard C++ `std::to_chars` for floating-point numbers can add a hefty 256 kB to your statically linked binaries. Imagine achieving the exact same, complete functionality, correctly rounded across all formats, in just 18 kB.

The Żmij library does precisely that, not only drastically cutting down binary size but also formatting shortest doubles about seven times faster. This is not a minor tweak; it is a principal-level feat of engineering, demonstrating meticulous optimization in a critical, low-level component.

For C++ engineers targeting high performance, embedded systems, or simply seeking to understand the deep art of library design, this is a masterclass. It reveals the often-hidden complexities of floating-point formatting and the impressive gains possible through rigorous, thoughtful implementation.
