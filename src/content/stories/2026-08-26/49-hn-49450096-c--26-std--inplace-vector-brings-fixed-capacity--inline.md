---
title: C++26 std::inplace_vector brings fixed-capacity, inline-storage dynamic arrays
source: hn
url: https://www.sandordargo.com/blog/2026/08/26/cpp26-inplace-vector
date: '2026-08-26'
tags:
- c++26
- catchup
- containers
- fixed-capacity
- hn
- inline-storage
- std-inplace-vector
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49450096'
comments: https://news.ycombinator.com/item?id=49450096
why_read: This post introduces C++26's new `std::inplace_vector` container. Readers
  will learn how it addresses the need for dynamically-resizable arrays with compile-time
  fixed capacity and guaranteed inline storage, filling a gap left by `std::vector`
  and `std::array`.
authors:
- Sandor Dargo
---

C++26 is introducing `std::inplace_vector`, a new container that promises significant performance and memory benefits for systems engineers. This is not just another `std::vector` variant; it is a vector-like container with a fixed, compile-time capacity, storing all elements directly within the object itself.

The key advantage is eliminating heap allocations entirely for these specific use cases. If you are working on bare metal, embedded systems, or performance-critical code where allocation latency is a deal-breaker, this could be a game changer. It offers `std::vector`'s familiar API but with `std::array`'s memory characteristics.

This addition addresses a long-standing gap in the standard library for truly stack-allocated or object-internal dynamic arrays. You will gain fine-grained control over memory layout and potentially improve cache locality without giving up vector semantics.

This is a powerful tool for optimizing memory and performance in C++.
