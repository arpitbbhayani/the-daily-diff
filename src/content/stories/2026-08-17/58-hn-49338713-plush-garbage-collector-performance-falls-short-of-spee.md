---
authors:
- matt_d
comments: https://news.ycombinator.com/item?id=49338713
date: '2026-08-17'
depth_score: 8
hn_id: '49338713'
image: /infographics/58-hn-49338713.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- actor-based-parallelism
- catchup
- copying-gc
- garbage-collection
- hn
- microbenchmarking
- performance-optimization
- plush-language
- virtual-machine
title: Plush Garbage Collector performance falls short of speed goals
url: https://pointersgonewild.com/2026-08-17-speeding-up-the-plush-garbage-collector/
utility_score: 8
why_read: This post explains the motivation behind optimizing the Plush language's
  unique actor-based garbage collector and the ambitious performance targets it aims
  to achieve.
---

Garbage collection pauses can be the bane of high-performance systems, but what if each actor in a concurrent system could manage its own without a global lock? This deep dive into the Plush garbage collector shows exactly how.

The author details the journey of optimizing a copying GC for a toy Lox-like language, aiming for a challenging target: collecting one million live objects in under 20 milliseconds. The key insight lies in an architecture where each actor has its own fully independent GC.

This approach eliminates global VM locks and avoids situations where the entire virtual machine must pause. It is a masterclass in designing concurrent runtimes that prioritize uninterrupted operation, critical for applications like 3D game engines or real-time data processing.

You will gain invaluable knowledge on advanced GC strategies and concurrent system design, directly applicable to building highly responsive and scalable software.