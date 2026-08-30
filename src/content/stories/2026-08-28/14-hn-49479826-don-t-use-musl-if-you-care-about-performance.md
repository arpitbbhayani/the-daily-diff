---
title: Don't use musl if you care about performance
source: hn
url: https://blog.brokk.ai/dont-use-musl-if-you-care-about-performance/
date: '2026-08-28'
tags:
- allocator
- catchup
- containers
- glibc
- hn
- jemalloc
- mimalloc
- musl
- performance
- rust
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 6
hn_id: '49479826'
comments: https://news.ycombinator.com/item?id=49479826
why_read: This article explains why musl libc can lead to significant performance
  degradation, even with alternative allocators, and details specific areas of slowness
  beyond just the allocator. Readers will learn about musl's performance pitfalls
  compared to glibc and the limitations of simply swapping allocators.
authors:
- jbellis
---

If you are building performance-sensitive Rust applications or deploying them in containers, you need to be acutely aware of your `libc` choice. This article presents compelling evidence that `musl` can introduce significant performance penalties compared to `glibc`.

The author's benchmarks reveal `musl` can be substantially slower, not just in high-concurrency scenarios, but even on 4-core VMs. While some might point to `musl`'s allocator, the study shows that even with `mimalloc`, `musl` can still be 26 percent slower overall. This indicates that other common memory routines within `musl`, such as `memcpy` and `memset`, also contribute to the performance hit.

This is a crucial "footgun" for developers who might choose `musl` for its static linking benefits without understanding the underlying trade-offs. The takeaway is clear: while `musl` offers simplicity for smaller projects, for performance-critical backend systems, `glibc` or carefully chosen alternative allocators are paramount.

Do not let an innocent `libc` choice silently degrade your application's speed.
