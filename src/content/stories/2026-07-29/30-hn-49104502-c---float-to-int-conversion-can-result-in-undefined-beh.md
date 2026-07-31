---
authors:
- Quentak
comments: https://news.ycombinator.com/item?id=49104502
date: '2026-07-29'
depth_score: 8
hn_id: '49104502'
image: /infographics/30-hn-49104502.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- catchup
- cpp
- floating-point-to-integer
- gsl
- hn
- type-conversion
- undefined-behavior
title: C++ float-to-int conversion can result in undefined behavior
url: https://kttnr.net/blog/cpp-float-to-int-conversion-undefined-behavior/
utility_score: 9
why_read: This article explains how C++ float-to-int conversions can silently cause
  undefined behavior when the value is out of range. Readers will learn to identify
  and avoid this common, unflagged bug, even in established libraries.
---

C++ float-to-int conversions are a subtle minefield, often leading to undefined behavior that compilers will not warn you about. This happens when the floating-point value, after truncation, simply cannot fit into the destination integer type.

Many assume standard casts like static_cast<int>(f) are safe for this, but they are not. Even robust libraries like Microsoft's Guidelines Support Library (GSL) have been found to mishandle these cases, leading to potential silent failures in production.

This is not merely academic. Understanding such language specifics is critical for writing robust, high-performance C++ code, especially in systems where precision and deterministic behavior are paramount. It changes how you approach seemingly simple type conversions.

Do not assume your float to int is safe until you explicitly handle overflow.