---
authors:
- Peter Kelly
comments: https://news.ycombinator.com/item?id=49326852
date: '2026-08-17'
depth_score: 8
hn_id: '49326852'
image: /infographics/52-github-49326852.jpg
interest_score: 8
novelty_score: 8
section: systems
source: github
tags:
- blake3-hash
- catchup
- content-addressable-storage
- data-processing
- functional-programming
- github
- rex-programming-language
- scientific-computing
- statically-typed
- workflow-language
title: Rex is a pure functional workflow language for scientific computing
url: https://github.com/peterkelly/rex
utility_score: 7
why_read: This text introduces Rex, a pure functional workflow language for scientific
  computing and data processing. Readers will learn about its design principles, including
  immutable values and content-addressable storage.
---

Tired of stitching together complex scientific or data processing workflows with YAML, shell scripts, and ad-hoc code? Rex, a new pure functional language, aims to revolutionize this.

It treats workflows as pure transformations over immutable values, bringing consistency and reliability. Crucially, it employs content-addressable storage, identifying every input/output artifact by its BLAKE3 hash. This ensures reproducibility and simplifies caching in distributed systems.

This is a compelling example of how a well-designed language and runtime can fundamentally improve engineering practices for data-intensive tasks. It is not just about a new syntax, but a new paradigm for managing data flow and control.