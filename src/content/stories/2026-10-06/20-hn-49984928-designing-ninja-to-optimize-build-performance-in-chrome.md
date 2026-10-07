---
title: Designing Ninja to optimize build performance in Chrome
source: hn
url: https://aosabook.org/en/posa/ninja.html
date: '2026-10-06'
tags:
- build-systems
- catchup
- compilation-speed
- google-chrome
- hn
- ninja-build
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49984928'
comments: https://news.ycombinator.com/item?id=49984928
why_read: Learn how Ninja was engineered to minimize build startup latency and accelerate
  the compilation workflow of massive codebases like Chrome.
authors:
- Evan Martin
---

Most build systems waste the majority of their execution time before a single compiler process even launches. When building a codebase as massive as Google Chrome with over 40,000 C++ files, the front-end phase of reading manifests and checking file modification times becomes the primary performance bottleneck.

Ninja was designed with a single goal: absolute speed during this critical graph traversal window. Unlike Make or CMake, Ninja deliberately strips away complex configuration logic, loops, and string manipulation from its input files, treating them strictly as low-level assembly language for builds.

By outsourcing configuration to external generators and optimizing data structures for file stat caches and dependency trees, Ninja minimizes startup overhead down to milliseconds. It treats build files as machine-generated artifacts rather than human-authored scripts.

Designing developer tools with a minimal, specialized scope often yields vastly superior performance compared to monolithic, feature-heavy alternatives.
