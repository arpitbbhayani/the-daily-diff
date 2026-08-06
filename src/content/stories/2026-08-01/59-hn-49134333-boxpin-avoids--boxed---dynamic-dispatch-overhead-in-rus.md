---
authors:
- ae2
comments: https://news.ycombinator.com/item?id=49134333
date: '2026-08-01'
depth_score: 8
hn_id: '49134333'
image: /infographics/59-hn-49134333.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- boxed
- boxpin
- catchup
- dynamic-dispatch
- ergonomics
- hn
- performance-optimization
- rust-async
- type-erasure
title: Boxpin avoids .boxed() dynamic dispatch overhead in Rust
url: https://ae2.rs/post/boxed-vs-box-pin
utility_score: 9
why_read: This article explains the hidden performance cost of .boxed() in Rust async
  programming due to type erasure and dynamic dispatch, and introduces boxpin as an
  ergonomic, zero-cost alternative.
---

You are likely using `.boxed()` in your Rust async code without realizing its hidden performance costs. This seemingly convenient suffix method, while ergonomic, introduces type erasure and dynamic dispatch, leading to a measurable runtime overhead.

Every `.poll()` operation through a `BoxFuture` results in a vtable lookup, preventing the compiler from inlining critical code paths. This means you are sacrificing potential optimizations for syntactic sugar, especially in performance-sensitive applications.

The good news is there is an ergonomic solution. A tiny crate called `boxpin` offers a `.pinned()` suffix method that performs exactly what `Box::pin(...)` does: it pins the future without type erasure or dynamic dispatch. You get the same compile-time optimizations and performance as `Box::pin`, but with the clean, chained syntax of `.boxed()`.

Understanding these subtleties of Rust's async ecosystem is crucial for writing truly high-performance, idiomatic code. Do not let hidden costs degrade your application's speed.