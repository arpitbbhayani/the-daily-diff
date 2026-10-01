---
title: Radsort enables parallel radix sorting with sublinear memory overhead
source: hn
url: https://arxiv.org/abs/2607.05302
date: '2026-09-30'
tags:
- catchup
- hn
- lsd-radix-sort
- memory-overhead
- parallel-algorithms
- radix-sort
- sorting-algorithms
section: databases
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49909677'
comments: https://news.ycombinator.com/item?id=49909677
why_read: Read this paper to discover Radsort, an easily parallelisable and stable
  LSD radix sort variant that requires only O(sqrt(n)) space. You will learn how reducing
  memory overhead allows it to outperform traditional out-of-place sorting on arrays
  larger than 2 MiB.
authors:
- Robert Clausecker
- Florian Schintke
---

Traditional out-of-place LSD radix sort implementations often face a hard memory trade-off: they require O(n) auxiliary space, which strains cache hierarchies when sorting large datasets.

A new paper introduces Radsort, a parallelized Least Significant Digit (LSD) radix sort that shrinks auxiliary memory overhead down to O(sqrt n) while remaining strictly stable. For arrays larger than roughly 2 MiB, this reduction in memory footprint allows the algorithm to outperform conventional out-of-place radix sorts due to improved cache locality and lower memory traffic.

For database engine developers and systems engineers designing query sorting operators, this provides a practical algorithmic pattern to handle in-memory sorting efficiently under tight RAM budgets.

Better memory efficiency often beats raw compute cycles when working at cache boundaries.
