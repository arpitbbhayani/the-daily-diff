---
authors:
- metrofun
comments: https://news.ycombinator.com/item?id=49575914
date: '2026-09-05'
depth_score: 8
hn_id: '49575914'
image: /infographics/39-hn-49575914.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- 64-bit-word
- catchup
- dynamically-typed-language
- hn
- interpreter-optimization
- plush-language
- rust-enum
title: Replacing a Rust Enum with a 64-bit Word Made My Interpreter Faster
url: https://pointersgonewild.com/2026-08-25-replacing-a-rust-enum-with-a-64-bit-word/
utility_score: 8
why_read: This post details how replacing a Rust enum with a 64-bit word for value
  representation in an interpreter led to a 17% speed improvement, offering insights
  into low-level optimization for dynamically-typed languages.
---

Optimizing language interpreters often comes down to fundamental data representation choices. One engineer drastically sped up their Rust-based interpreter by 17 percent, simply by ditching a traditional tagged enum for value types in favor of a compact 64-bit word.

This change is not just about avoiding enum overhead. It is a deep dive into how NaN-boxing or similar techniques exploit unused bit patterns in floating-point numbers to encode other types, reducing memory footprint and improving cache locality. The article details the specific Rust implementation and the measurable impact.

It is a brilliant case study in low-level system design and performance engineering. Understanding such optimizations is crucial for anyone building high-performance systems or working on language runtimes.