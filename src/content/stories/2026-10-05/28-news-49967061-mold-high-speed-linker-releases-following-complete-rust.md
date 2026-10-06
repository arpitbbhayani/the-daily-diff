---
title: Mold high-speed linker releases following complete Rust rewrite
source: news
url: https://www.phoronix.com/news/Mold-3.0-Released
date: '2026-10-05'
tags:
- build-systems
- catchup
- gnu-ld
- linkers
- mold-linker
- news
- rust
section: engineering
is_news: true
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49967061'
comments: https://news.ycombinator.com/item?id=49967061
why_read: Read this to understand how the Mold linker transitioned from C++ to Rust
  to improve safety and compatibility. You will learn about key changes in dependencies,
  build tools, and its trajectory toward becoming a default Linux linker.
authors:
- Michael Larabel
---

The Mold high-speed linker has officially reached version 3.0, marking a complete rewrite from C++ to Rust. It acts as a drop-in replacement for earlier releases while aiming to become the default system linker on Linux distributions.

Rewriting a high-throughput binary tool in Rust brings concrete operational improvements. The new architecture eliminates the external dependency on Intel oneTBB, swaps CMake for Cargo, and strengthens safety when parsing malformed or corrupted object files.

For systems engineers dealing with massive C++ or Rust binaries, linking remains one of the largest bottlenecks in developer feedback loops. Mold 3.0 closes crucial compatibility gaps with GNU LD script support while keeping linking latency down to fractions of a second.

Investing in modern toolchain components directly improves local build cycles and continuous integration throughput across large codebases.
