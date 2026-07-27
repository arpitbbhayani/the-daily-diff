---
authors:
- Phil Eaton
comments: https://news.ycombinator.com/item?id=49045474
date: '2026-07-25'
depth_score: 8
hn_id: '49045474'
image: /infographics/23-hn-49045474.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- catchup
- garbage-collection
- go-1.26
- green-tea-gc
- heap-allocation
- hn
- non-moving-collector
- sparse-pages
title: Go's Green Tea garbage collector struggles with sparse pages
url: https://theconsensus.dev/p/2026/07/19/observing-gos-garbage-collector-old-and-new.html
utility_score: 8
why_read: This article offers an in-depth look at Go's Green Tea garbage collector,
  detailing its cache-friendliness and how Go allocates memory. Readers will learn
  about the sparse-page problem that non-moving collectors encounter.
---

Go 1.26's new Green Tea garbage collector is a significant shift, and understanding its internals is key for optimizing Go applications. This article provides an exceptional deep dive into how it really works under the hood.

You will see how Green Tea handles cache-friendliness, visualize heap allocations, and learn about the specific challenges a non-moving collector faces with sparse pages. The analysis uses powerful tools like `perf` to give you a concrete view of GC behavior.

This is not a high-level overview; it is a granular exploration of runtime mechanics that will directly improve your ability to diagnose performance bottlenecks and make informed architectural decisions in Go-based systems. It helps you build more efficient software.