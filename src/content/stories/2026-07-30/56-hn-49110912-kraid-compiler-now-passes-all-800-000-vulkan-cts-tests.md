---
authors:
- Faith Ekstrand
comments: https://news.ycombinator.com/item?id=49110912
date: '2026-07-30'
depth_score: 9
hn_id: '49110912'
image: /infographics/56-hn-49110912.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- catchup
- compute-shaders
- hn
- kraid-compiler
- panfrost-driver
- register-allocation
- ssa-based
- vulkan-cts-tests
title: Kraid compiler now passes all 800,000 Vulkan CTS tests
url: https://www.collabora.com/news-and-blog/news-and-events/kraid-is-a-now-a-real-compiler.html
utility_score: 7
why_read: This update details the significant milestone of the Kraid compiler for
  the Panfrost driver, now successfully passing all Vulkan CTS tests for compute shaders.
  Readers will gain insight into the compiler's architectural components, strategic
  development choices, and ongoing work for future functionality.
---

A new compiler, Kraid, built for the open-source Panfrost GPU driver, has achieved a monumental milestone: passing all 800,000 Vulkan CTS tests for compute shaders. This is a massive feat in compiler engineering.

The article provides a deep dive into its SSA-based register allocator, the sophisticated spiller design, and its ability to handle complex operations like 64-bit and swizzles. It demonstrates how strategic choices in compiler design, even initially leading to "poor quality" code, help in ferreting out bugs and building robust systems.

This is not just about GPUs; it is a masterclass in low-level system design and compiler theory, offering valuable lessons for anyone building complex, high-performance software. The journey from a single passing test to 800,000 is truly impressive.