---
title: Goose achieves memory safety and speed without heap allocation
source: github
url: https://github.com/aardappel/goose/blob/master/README.md
date: '2026-10-07'
tags:
- catchup
- compiler-optimization
- github
- memory-management
- stack-allocation
- systems-programming
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '50000344'
comments: https://news.ycombinator.com/item?id=50000344
why_read: Learn how the Goose programming language achieves memory safety and outperforms
  C++ and Rust without relying on heap allocators, garbage collectors, or lifetime
  annotations. This text illustrates an alternative memory model based on statically
  assigned compiler data stacks.
authors:
- aardappel
image: /infographics/07-github-50000344.jpg
---

Dynamic heap allocation and complex borrow checkers are not the only paths to memory safety.

Goose is an experimental systems programming language that discards the heap, garbage collection, and lifetime annotations entirely. Instead of allocating memory dynamically on a general heap, every dynamic value lives inline on static data stacks managed strictly by the compiler. Growth simply advances a pointer, and deallocation occurs instantly when the enclosing scope terminates.

By avoiding traditional heap allocators and reference counting, Goose achieves notable performance gains. Across sixteen standard benchmarks, the compiler produces code that runs 3.3 times faster than idiomatic C++ and 1.12 times faster than safe Rust, while consuming between 20 and 45 percent less memory. Freeing a deeply nested structure with a million elements takes a single pointer store operation rather than recursive deallocation sweeps.

Furthermore, array growth preserves reference validity, which solves the common iterator invalidation dilemma without requiring runtime guards or integer index workarounds.

Treating memory as compiler-assigned contiguous stacks provides a compelling alternative to traditional systems resource management.
