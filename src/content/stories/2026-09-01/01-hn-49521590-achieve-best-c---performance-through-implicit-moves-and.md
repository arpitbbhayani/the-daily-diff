---
authors:
- Andreas Fertig
comments: https://news.ycombinator.com/item?id=49521590
date: '2026-09-01'
depth_score: 9
hn_id: '49521590'
image: /infographics/01-hn-49521590.jpg
interest_score: 9
novelty_score: 8
section: engineering
source: hn
tags:
- c++
- catchup
- copy-elision
- hn
- implicit-move
- performance
- return-value-optimization
title: Achieve best C++ performance through implicit moves and copy elision
url: https://andreasfertig.com/blog/2026/09/move-in-cpp-without-a-stdmove/
utility_score: 9
why_read: This article explains how C++ achieves optimal performance through return
  value optimization and implicit moves. Readers will learn when `std::move` is unnecessary
  and how to rely on compiler optimizations for efficient code.
---

In C++, you might think `std::move` is always the answer for performance, but often, it is a sign you are fighting the compiler. This article illuminates how Return Value Optimization (RVO) and Named Return Value Optimization (NRVO) achieve optimal performance by completely eliding copies and moves.

Understanding when C++ implicitly handles moves or even eliminates copies entirely is crucial. By relying on these mechanisms, you can write cleaner, more performant code without explicit `std::move` calls that might actually prevent optimal compiler behavior in certain contexts. This approach ensures your code is fast by default.

This is a must-read for any senior C++ engineer looking to deepen their understanding of fundamental language performance characteristics and write truly optimized code.