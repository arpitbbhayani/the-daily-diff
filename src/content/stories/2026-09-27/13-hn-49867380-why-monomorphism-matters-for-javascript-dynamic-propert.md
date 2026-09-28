---
title: Why monomorphism matters for JavaScript dynamic property lookup performance
source: hn
url: https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html
date: '2026-09-27'
tags:
- call-site-polymorphism
- catchup
- dynamic-lookup
- hn
- javascript-performance
- monomorphism
- property-access
section: engineering
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 6
hn_id: '49867380'
comments: https://news.ycombinator.com/item?id=49867380
why_read: Read this to build a clear mental model of call-site polymorphism and understand
  the mechanics behind monomorphic optimizations in JavaScript engines.
authors:
- Frotag
---

Dynamic property access in high-performance runtimes relies heavily on call site monomorphism. When an engine encounters a property access, executing a full hash lookup or prototype traversal on every iteration destroys execution speed.

Modern just-in-time compilers optimize this by using inline caches that record the hidden class or shape observed at a specific call site. If the call site remains monomorphic by consistently encountering the exact same object shape, the runtime replaces the dynamic lookup with a direct offset fetch and an inexpensive type guard.

When code passes multiple different object shapes through the same call site, the cache degrades to polymorphic or megamorphic states. Megamorphic lookups trigger stubs that bypass inline caching altogether, increasing CPU branch mispredictions and preventing function inlining.

Writing predictable backend code in dynamic languages requires structuring objects to maintain stable hidden classes across critical execution paths.
