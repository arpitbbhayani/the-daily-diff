---
authors:
- Savannah Ostrowski
- Ken Jin
- Brandt Bucher
comments: https://news.ycombinator.com/item?id=49109443
date: '2026-07-30'
depth_score: 9
hn_id: '49109443'
image: /infographics/106-hn-49109443-a-path-to-a-supported-jit-compiler-for-cpython-is-propo.jpg
interest_score: 8
novelty_score: 8
section: engineering
source: hn
tags:
- catchup
- cpython
- hn
- jit-compiler
- memory-footprint
- pep-836
- python-performance
title: A path to a supported JIT compiler for CPython is proposed
url: https://peps.python.org/pep-0836/
utility_score: 8
why_read: This document proposes the integration of a JIT compiler into CPython, detailing
  its current state, performance improvements, and the future path to a fully supported
  and optimized Python interpreter.
---

CPython is getting a supported JIT compiler, and PEP 836 details the monumental shift. This is not just an incremental speedup; it is a re-architecture that delivers tangible performance gains and positions Python for even greater efficiency.

The experimental JIT, already part of Python 3.13, has been significantly matured. Python 3.15 now shows a measurable, reproducible 4-12% geometric mean performance improvement across Tier 1 platforms. This PEP lays out the long-term vision, including crucial aspects like free-threading support and a better distribution story.

For any senior engineer working with Python at scale, understanding these compiler internals and the future performance trajectory of the language is essential for designing high-performance applications and optimizing existing codebases.