---
title: Asynchronous Kaczmarz stability requires tuning and favors inconsistent reads
source: arxiv
url: http://arxiv.org/abs/2607.08313v1
date: '2026-07-09'
tags:
- adaptive-row-selection
- arxiv
- asynchronous-execution
- catchup
- cs.DC
- inconsistent-reads
- math.NA
- numerical-stability
- randomized-kaczmarz
- shared-memory
- under-relaxation
arxiv_id: '2607.08313'
categories: cs.DC, math.NA
why_read: This study systematically investigates adaptive Kaczmarz methods in asynchronous,
  shared-memory environments, offering practical insights into stability tuning and
  revealing the surprising advantages of inconsistent reads for performance.
authors:
- Evan Coleman
---

Running adaptive numerical algorithms like Randomized Kaczmarz on shared-memory machines presents a dilemma: stale data from lock-free workers versus the cost of consistent reads.

This systematic study of asynchronous Kaczmarz found that stability is governed by a boundary between sampling aggressiveness and thread count. Crucially, threshold-greedy selection, a standard accelerated rule, is unstable at high thread counts.

Surprisingly, "inconsistent-snapshot reads" (stale data) never exhibited a rare, scheduling-dependent divergence seen with consistent reads and were also cheaper. This makes inconsistent reads the recommended default.

When deploying numerical methods in distributed contexts, sometimes the "less consistent" approach is the more robust and efficient one.
