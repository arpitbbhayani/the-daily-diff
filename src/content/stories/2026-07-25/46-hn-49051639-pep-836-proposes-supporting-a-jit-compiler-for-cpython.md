---
authors:
- Savannah Ostrowski
- Ken Jin
- Brandt Bucher
comments: https://news.ycombinator.com/item?id=49051639
date: '2026-07-25'
depth_score: 8
hn_id: '49051639'
image: /infographics/46-hn-49051639.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- catchup
- cpython
- hn
- jit-compiler
- memory-footprint
- performance-improvement
- python-3.15
title: PEP 836 proposes supporting a JIT compiler for CPython
url: https://peps.python.org/pep-0836/
utility_score: 8
why_read: This document outlines the design and rationale for integrating a supported
  Just-in-Time (JIT) compiler into CPython, detailing its performance benefits and
  architectural changes. Readers will understand the current state and future plans
  for CPython's JIT, including its impact on speed and memory.
---

A supported JIT compiler is coming to CPython, detailed in the latest PEP 836. This is not just a theoretical improvement; the experimental JIT has already delivered 4-12% geometric mean performance gains in Python 3.15, and the proposal outlines a path to official adoption.This represents a significant architectural shift for CPython, addressing challenges like free-threading support and a better JIT distribution story. Engineers working with Python at scale or on performance-critical systems should pay close attention.You will gain insights into the complexities of integrating a JIT into a mature language runtime and the strategic decisions being made for Python's future performance.