---
title: Replacing the JVM garbage collector enables generalized weak references
source: hn
url: https://comonad.com/reader/2026/stretching-the-storage-manager-on-the-jvm/
date: '2026-10-07'
tags:
- catchup
- garbage-collection
- generalized-weak-pointers
- hn
- hotspot-gc-interface
- mark-and-compact
- reachability
section: systems
is_news: false
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49990477'
comments: https://news.ycombinator.com/item?id=49990477
why_read: Learn how swapping out the JVM garbage collector via HotSpot's GC interface
  solves complex reachability and weak finalization semantics for hosted languages.
  It explains the mechanics of cycle-breaking associations that standard Java references
  cannot handle.
authors:
- internet_points
---

Replacing HotSpot's internal garbage collector is usually considered untouchable territory. Edward Kmett managed to implement a custom SIMD multithreaded mark-and-compact collector in C++ and wired it directly into patched builds of OpenJDK and GraalVM.

The core driver was getting Haskell-style generalized weak pointers and finalizers to run on the JVM without introducing a redundant heap reachability traversal. Standard Java WeakReference constructs break when values hold back-references to their keys, causing cycles that keep objects alive or discard associations prematurely.

By building an engine named Jam that implements HotSpot GC SPI, the JVM host heap can directly understand asymmetric ephemeron semantics. The collector natively tracks key-value pairings and safe resurrection paths while sharing the heap between native Java objects and runtime closures.

Treating the runtime memory manager as a replaceable substrate reveals how deeply object lifetime semantics depend on collector design.
