---
title: Preallocating stack sizes reduces CPU overhead in Go runtimes
source: hn
url: https://www.uber.com/in/en/blog/zero-growth-stack/
date: '2026-09-30'
tags:
- catchup
- cpu-optimization
- go-runtime
- goroutines
- hn
- stack-allocation
- stack-expansion
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49905767'
comments: https://news.ycombinator.com/item?id=49905767
why_read: Understand how dynamic goroutine stack growth incurs CPU overhead and learn
  how preallocating stack memory optimizes runtime performance at scale.
authors:
- Cristian Velazquez
---

Goroutines start with an initial stack size of only two kilobytes to maximize concurrency without consuming massive memory. However, when a goroutine exceeds this limit, the Go runtime allocates a new stack twice the size, copies all existing stack frames, and rewrites pointers.

At large scale, these repeated stack growth cycles introduce significant CPU overhead through runtime checks and memory copies. Uber discovered that tuning goroutine stack preallocation in high-throughput Go microservices recovered ten percent in overall CPU utilization.

Optimizing runtime memory mechanics often yields far greater efficiency than micro-optimizing application business logic.
