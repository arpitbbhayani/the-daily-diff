---
title: Test all four billion floats to prevent subtle math bugs
source: hn
url: https://randomascii.wordpress.com/2014/01/27/theres-only-four-billion-floatsso-test-them-all/
date: '2026-08-02'
tags:
- bugs
- catchup
- floating-point-math
- hn
- software-testing
- vector-math
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49144160'
comments: https://news.ycombinator.com/item?id=49144160
why_read: This post highlights the prevalence of bugs in floating-point math functions
  and demonstrates why comprehensive testing of all four billion float bit-patterns
  is both easy and essential for correctness.
authors:
- Bruce Dawson
---

Floating-point math has a notorious reputation for producing unexpected results, and many engineering teams shy away from exhaustive testing due to perceived complexity. Yet, for single-precision floats, there are only four billion possible bit patterns.

This article from 2014 makes a compelling case: you can test every single one of those four billion floats for functions like floor, ceil, or round in about ninety seconds. Many standard library implementations or highly optimized vector math functions have shipped with subtle bugs for years, simply because testing was not exhaustive.

This approach provides a powerful lesson in engineering rigor. For critical numerical components, do not rely on sampling or intuition. Design tests that cover the entire input domain, especially when that domain is finite and manageable. It is a fundamental practice that prevents insidious, hard-to-debug issues from ever reaching production.
