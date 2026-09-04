---
title: Object pools alter use-after-free error types to memory aliasing
source: hn
url: https://matklad.github.io/2026/09/02/static-allocation-constant-work.html
date: '2026-09-02'
tags:
- catchup
- hn
- memory-aliasing
- memory-safety
- object-pools
- type-confusion
- use-after-free
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49539556'
comments: https://news.ycombinator.com/item?id=49539556
why_read: This text clarifies how object pools fundamentally change the nature of
  use-after-free vulnerabilities, transforming them from type confusion errors to
  memory aliasing issues. Readers will understand the distinct implications of these
  error types in different memory management contexts.
authors:
- surprisetalk
---

Memory safety bugs are nasty, but often we only think of them in terms of simple use-after-free. This article goes much deeper, dissecting how object pools and tagged unions introduce subtle, often overlooked, memory safety challenges.

It clarifies the crucial difference between a logical use-after-free and physical type confusion, showing how a bug in an object pool might not lead to arbitrary code execution directly, but rather to aliasing without type confusion.

Understanding these nuances is essential for writing robust code and designing safer systems, especially when dealing with high-performance C++ or Rust applications. It makes you reconsider what "safe" really means in practice.
