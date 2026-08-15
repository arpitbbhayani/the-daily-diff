---
title: Unsafely downcast Arc<dyn MyTrait> to a concrete type
source: hn
url: https://ashdnazg.github.io/articles/26/Downcasting-Arcs-in-Rust
date: '2026-08-13'
tags:
- arc-type
- catchup
- downcasting
- hn
- raw-pointers
- rust
- unsafe-code
section: engineering
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 6
hn_id: '49290159'
comments: https://news.ycombinator.com/item?id=49290159
why_read: This article explains how to unsafely downcast an Arc<dyn MyTrait> back
  to its original concrete type in Rust, particularly when MyTrait is not Any. Readers
  will learn a creative solution using raw pointer conversions to enable operations
  like `into_inner`.
authors:
- Eshed Schacham
---

Navigating `Arc<dyn MyTrait>` in Rust can be tricky, especially when you need to downcast it back to a concrete type. The `as` keyword will not work, and `Any` is not always an option. This article tackles the challenge head-on.

It explores the nuances of `unsafe` Rust to implement custom downcasting for trait objects that do not derive from `Any`. This involves understanding raw pointers and the precise guarantees needed to maintain memory safety and avoid undefined behavior.

For senior Rust engineers building high-performance libraries or complex system components, this level of detail is essential. It provides a blueprint for safely managing type conversions in scenarios where runtime type information is critical but standard mechanisms fall short.
