---
title: Async/await behavior varies unexpectedly across programming languages
source: hn
url: https://cel.cs.brown.edu/blog/design-space-async-await/
date: '2026-09-09'
tags:
- async-await
- catchup
- concurrency
- hn
- programming-languages
- runtime-behavior
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49635963'
comments: https://news.ycombinator.com/item?id=49635963
why_read: Read this to understand the surprising divergence in async/await semantics
  across various programming languages. It reveals that simple concurrent programs
  can yield drastically different outputs depending on the runtime.
authors:
- Gavin Gray
---

You might think you understand `async/await`, but the truth is, its semantics diverge dramatically across modern languages. A recent exploration reveals that a simple program involving background tasks can yield four different outputs across seven popular runtimes. 

This is not just academic; these subtle differences impact how you design and debug concurrent systems. Understanding whether your `async` calls are "cold" or "hot" could be the key to unlocking true parallelism or chasing down elusive race conditions. It challenges common assumptions about modern concurrency paradigms. 

Do not just assume your language handles it the way you expect. Dive deep and understand the runtime behaviors that truly define your system's concurrency.
