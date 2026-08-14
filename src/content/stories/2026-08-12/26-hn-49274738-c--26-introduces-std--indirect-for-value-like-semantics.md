---
title: C++26 introduces std::indirect for value-like semantics and const propagation
source: hn
url: https://www.sandordargo.com/blog/2026/08/12/cpp26-indirect
date: '2026-08-12'
tags:
- c++26
- catchup
- const-propagation
- hn
- std-indirect
- std-unique-ptr
- value-semantics
section: engineering
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49274738'
comments: https://news.ycombinator.com/item?id=49274738
why_read: This post explains C++26's new `std::indirect` type, detailing its purpose
  in providing value-like semantics for dynamically allocated objects. Readers will
  understand how it addresses `const` propagation issues present with `std::unique_ptr`
  and improves memory management patterns.
authors:
- Sandor Dargo
---

C++ developers often grapple with `std::unique_ptr`'s behavior, particularly its inability to propagate `const` correctness to indirectly stored members. This can lead to subtle bugs and compromise the integrity of immutable objects.

The upcoming C++26 standard introduces `std::indirect`, a new vocabulary type designed to solve this fundamental issue. `std::indirect` confers true value-like semantics on dynamically-allocated objects, ensuring that copying the indirect object copies the contained object.

Crucially, `std::indirect` correctly propagates `const`ness. When accessed via a `const` path, the owned object itself also becomes `const`, preventing unintended mutations. This enhancement greatly improves type safety and design clarity for modern C++ applications.

This new type provides a powerful, standardized way to manage ownership and immutability for dynamically allocated resources, making your code more robust and easier to reason about. It represents a thoughtful evolution in C++'s approach to smart pointers and value semantics.

Understanding and adopting `std::indirect` will be essential for any senior C++ engineer aiming to write cleaner, safer, and more idiomatic code in the C++26 era.

Embrace stronger `const` correctness with C++26.
