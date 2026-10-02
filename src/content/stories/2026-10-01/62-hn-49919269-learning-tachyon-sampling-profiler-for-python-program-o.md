---
title: Learning Tachyon sampling profiler for Python program observation
source: hn
url: https://grahamdumpleton.me/posts/2026/10/getting-to-know-tachyon/
date: '2026-10-01'
tags:
- catchup
- hn
- profiling-sampling
- python-3-15
- sampling-profiler
- tachyon
- wrapture
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49919269'
comments: https://news.ycombinator.com/item?id=49919269
why_read: Read this to understand how Tachyon operates as a sampling profiler in Python
  3.15 and how it compares to in-process function wrapping. You will learn practical
  insights into inspecting program behavior without code instrumentation.
authors:
- Graham Dumpleton
---

Python 3.15 introduces Tachyon, a sampling profiler located in the standard profiling.sampling module, moving beyond traditional deterministic tracing like cProfile.

Tracing profilers intercept every function entry and exit, adding substantial overhead and skewing performance characteristics under realistic loads. In contrast, Tachyon samples the execution state at defined intervals without modifying running call sites.

This architecture makes it viable to inspect live execution paths beneath function wrappers and decorators without rewriting instrumented code or introducing severe runtime penalties.

Low-overhead sampling profilers provide the accurate runtime visibility needed to diagnose production latency bottlenecks.
