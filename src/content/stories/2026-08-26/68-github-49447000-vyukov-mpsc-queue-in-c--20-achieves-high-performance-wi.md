---
title: Vyukov MPSC queue in C++20 achieves high performance with acquire release
source: github
url: https://github.com/nisgemML/mpsc-queue
date: '2026-08-26'
tags:
- acquire-release
- c++20
- catchup
- github
- lock-free
- memory-model
- mpsc-queue
section: engineering
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49447000'
comments: https://news.ycombinator.com/item?id=49447000
why_read: This project presents a high-performance C++20 MPSC queue with a formal
  memory-model proof. Readers will learn how memory_order_acquire and memory_order_release
  are sufficient for correctness, avoiding unnecessary seq_cst overhead.
authors:
- nisgem
---

Building high-performance concurrent systems demands meticulous attention to detail, especially when it comes to lock-free data structures. The Vyukov MPSC queue is a classic, but this C++20 implementation goes further by including a six-claim formal memory-model proof.

This is not just about writing fast code; it is about writing *correct* fast code. The proof clarifies why memory_order_acquire/release is sufficient, avoiding the gratuitous MFENCE overhead that seq_cst would introduce on x86, achieving 53M messages per second with four producers.

For senior engineers optimizing critical paths, understanding these low-level memory ordering guarantees is crucial. This project provides a practical blueprint and rigorous validation to inform your own high-concurrency designs.
