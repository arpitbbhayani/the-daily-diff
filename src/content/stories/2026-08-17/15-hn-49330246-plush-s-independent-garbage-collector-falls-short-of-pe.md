---
title: Plush's independent garbage collector falls short of performance goals
source: hn
url: https://pointersgonewild.com/2026-08-17-speeding-up-the-plush-garbage-collector/
date: '2026-08-17'
tags:
- actor-model
- catchup
- copying-gc
- garbage-collection
- hn
- microbenchmark
- performance-optimization
- plush-language
- virtual-machine
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49330246'
comments: https://news.ycombinator.com/item?id=49330246
why_read: This text explains the performance shortcomings of Plush's independent garbage
  collector, highlighting the specific goal of collecting one million objects in under
  20 milliseconds. Readers will understand the challenges of achieving high-performance
  garbage collection in an actor-based virtual machine designed for game engine use.
authors:
- maxime_cb
---

Optimizing garbage collectors in concurrent systems is a notorious challenge, and this post dives deep into a practical example of speeding up a copying GC for an actor-based VM. The author aimed for a demanding goal: collecting one million live objects in under 20 milliseconds, all without a global VM lock.

The core problem identified was the overhead of eagerly copying entire object graphs, leading to 117ms collection times on a modern MacBook. The solution involved a clever strategy: initially, only the references to objects in the old generation are copied, leaving the actual objects in place. They are only moved if an actor needs to write to them.

This lazy copying significantly reduces the amount of data moved during a GC cycle, preventing unnecessary memory writes and improving cache locality. This approach transforms a resource-intensive operation into a much lighter touch, showcasing a powerful principle for managing state in concurrent environments.

This is invaluable for understanding runtime performance and designing high-throughput, low-latency systems.
