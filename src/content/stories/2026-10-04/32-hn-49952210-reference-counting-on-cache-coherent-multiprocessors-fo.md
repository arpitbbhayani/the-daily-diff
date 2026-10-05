---
title: Reference counting on cache coherent multiprocessors forces the GIL
source: hn
url: https://harut8.github.io/system-design/python-mastery/24-the-gil/
date: '2026-10-04'
tags:
- cache-coherence
- catchup
- eval-loop
- gil
- hn
- multithreading
- pep-703
- reference-counting
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 7
hn_id: '49952210'
comments: https://news.ycombinator.com/item?id=49952210
why_read: Read this to build a deep mechanical model of why Python requires the Global
  Interpreter Lock from the hardware cache coherence layer up to the eval loop. You
  will understand how reference counting interacts with multicore systems and how
  free-threading changes that model.
authors:
- Har8
---

The Python Global Interpreter Lock is not an arbitrary design choice, but the physical consequence of naive reference counting on cache coherent multicore processors.

When multiple CPU cores continuously mutate reference counts on shared objects, the underlying hardware cache coherence protocol constantly invalidates cache lines across cores. This induces severe bus traffic and cache line bouncing, turning what looks like simple memory increments into heavy inter-core synchronization bottlenecks.

CPython avoids this constant hardware penalty by serializing execution inside the interpreter evaluation loop. While this design historically protected non-thread-safe C extensions and simplified memory management, modern free-threading implementations replace the global lock with biased reference counting and mimalloc-based immortal object strategies.

Understanding concurrency at the cache line level completely demystifies why interpreter locks exist and how modern runtimes finally eliminate them.
