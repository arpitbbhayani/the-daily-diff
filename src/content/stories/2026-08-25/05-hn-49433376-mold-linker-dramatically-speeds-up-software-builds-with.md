---
title: mold linker dramatically speeds up software builds with data parallelism
source: hn
url: https://arxiv.org/abs/2608.23228
date: '2026-08-25'
tags:
- catchup
- data-parallelism
- hn
- linker-performance
- linking
- software-build
section: engineering
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 9
hn_id: '49433376'
comments: https://news.ycombinator.com/item?id=49433376
why_read: This paper introduces mold, a massively parallel linker that dramatically
  reduces software build times. Readers will learn how systematic data parallelism
  overcomes long-standing bottlenecks in linking, leading to significant performance
  improvements over existing linkers.
authors:
- Rui Ueyama
---

Build times for large C++ programs have been a bottleneck for decades, but Mold, a new Unix/Linux linker, is changing the game by introducing massively parallel linking. It is not just faster; it is a paradigm shift.

Mold achieves mind-blowing speedups-2.4 to 16.1 times faster than LLD and up to 112 times faster than GNU LD. The secret lies in systematically applying data parallelism across the entire linking pipeline, meticulously overcoming the architectural constraints that have plagued traditional linkers.

This is a masterclass in build system optimization and parallel computing, offering crucial insights into how rethinking fundamental tooling can dramatically boost developer productivity.
