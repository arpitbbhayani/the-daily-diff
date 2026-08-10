---
title: mcpp is a self-hosted C++23 module-first build tool
source: github
url: https://github.com/mcpp-community/mcpp
date: '2026-08-08'
tags:
- build-tool
- c++23-modules
- catchup
- dependency-management
- github
- incremental-builds
- self-hosting
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49217761'
comments: https://news.ycombinator.com/item?id=49217761
why_read: This describes a modern C++ build tool, mcpp, which offers native C++23
  module support and integrated dependency management. Readers will learn how a self-hosted,
  module-first approach simplifies C++ project builds and management.
authors:
- sunrisepeak
---

C++ development is getting a major boost with mcpp, a modern C++23 module-first build tool. This is not just another build system; it is written in pure C++23 modules and is fully self-hosted, showcasing a truly native approach to modern C++.

mcpp offers native C++23 module support with automatic import std handling, file-level incremental builds, and automatic module dependency analysis. This means zero manual configuration for module dependencies, significantly streamlining complex C++ projects.

It also includes integrated dependency management with SemVer constraint resolution and cross-project BMI caching. This tool promises to improve developer productivity and build efficiency for anyone tackling large-scale C++ applications.
