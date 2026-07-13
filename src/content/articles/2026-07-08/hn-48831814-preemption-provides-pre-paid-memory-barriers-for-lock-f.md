---
title: Preemption Provides Pre-paid Memory Barriers for Lock-free Userspace Code
source: hn
url: https://pvk.ca/Blog/2019/01/09/preemption-is-gc-for-memory-reordering/
date: '2026-07-08'
tags:
- bounded-tso
- catchup
- hn
- interrupt-processing
- lock-free-programming
- memory-barriers
- memory-reordering
- preemption
- userspace
score: 36
hn_id: '48831814'
comments: https://news.ycombinator.com/item?id=48831814
why_read: This article makes a strong case for treating preemption as a valuable source
  of pre-paid memory barriers in lock-free userspace programming. It explains how
  interrupt processing can guarantee memory ordering, offering a novel approach for
  designing synchronization primitives.
authors:
- Paul Khuong
author: Paul Khuong
---

Many engineers find lock-free programming challenging, especially when dealing with memory reordering. This article presents a fascinating insight: preemption in operating systems can act as a "garbage collector" for memory reordering.
Interrupt processing, particularly on x86, provides implicit serialization. This means any userspace instruction either fully executes before an interrupt or is re-executed after. This behavior can be abused to guarantee ordering without explicit memory barriers.
This approach complements Bounded TSO, offering an alternative for ensuring liveness in lock-free primitives like event counts or hazard pointers. It is about leveraging what the OS already provides.
For senior software engineers, this offers a deeper understanding of concurrency mechanisms and how to exploit low-level system properties for robust, high-performance system design, especially within distributed contexts where shared memory semantics are crucial.
