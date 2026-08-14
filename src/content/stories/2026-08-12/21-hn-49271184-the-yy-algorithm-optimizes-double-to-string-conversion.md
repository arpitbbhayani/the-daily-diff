---
title: The yy Algorithm Optimizes Double-to-String Conversion
source: hn
url: https://vitaut.net/posts/2026/yy-dtoa/
date: '2026-08-12'
tags:
- catchup
- double-to-string
- fixed-width-arithmetic
- floating-point-conversion
- hn
- schubfach-family
- yy-algorithm
section: engineering
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49271184'
comments: https://news.ycombinator.com/item?id=49271184
why_read: This post provides a deep dive into the yy algorithm, one of the fastest
  double-to-string conversion methods. Readers will gain an understanding of its efficient
  fixed-width integer arithmetic approach and its placement within the Schubfach family.
authors:
- Vitaut
---

You have likely optimized your code to death, but have you ever considered the underlying numerical conversion algorithms? Most double-to-string (dtoa) implementations use well-known methods, but a specific, obscure algorithm from yyjson, known only as 'yy', consistently outperforms them.

This algorithm runs on fixed-width integer arithmetic and needs only one multiplication by a precomputed power of 10, compared to two or three for classic Schubfach. It achieves significant speedups by carefully intersecting a float's rounding interval with decimal grids, but does so with unparalleled arithmetic efficiency.

Understanding how 'yy' achieves such high performance offers valuable lessons for any engineer working on performance-critical systems, such as database serialization layers or high-throughput JSON parsers. It is not about minor tweaks, but about a fundamentally more efficient approach to a common problem.
