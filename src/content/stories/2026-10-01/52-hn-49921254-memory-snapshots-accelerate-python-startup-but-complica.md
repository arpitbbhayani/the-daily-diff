---
title: Memory snapshots accelerate Python startup but complicate hash randomization
source: hn
url: https://blog.python.org/2026/09/language-summit-2026-memory-snapshots/
date: '2026-10-01'
tags:
- catchup
- cpython
- hash-randomization
- hn
- interpreter-startup
- memory-snapshots
- pyodide
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49921254'
comments: https://news.ycombinator.com/item?id=49921254
why_read: Understand how memory snapshotting can dramatically reduce Python interpreter
  bootstrapping time, alongside the critical security challenges it poses for hash
  randomization.
authors:
- Hood Chatham
---

Starting a new runtime interpreter from scratch every time incurs massive initialization overhead. At the Python Language Summit, Hood Chatham demonstrated that restoring CPython from a post-initialization memory snapshot cut execution time for a basic program by four times, dropping cold startup from 1.406 seconds down to 0.353 seconds in Pyodide.

However, snapshotting arbitrary interpreter state resurrects a classic vulnerability: algorithmic complexity attacks via hash collisions. Python randomizes hash salts at boot time to prevent denial-of-service exploits against core data structures like dictionaries and sets. If every restored process shares the exact same pre-computed memory layout, that critical entropy is lost.

V8 and Node.js previously grappled with this exact trade-off before disabling certain snapshot features. Solving it requires isolating deterministic VM startup structures from dynamic security primitives before writing the memory image to disk.

Fast cold starts should never come at the expense of runtime isolation.
