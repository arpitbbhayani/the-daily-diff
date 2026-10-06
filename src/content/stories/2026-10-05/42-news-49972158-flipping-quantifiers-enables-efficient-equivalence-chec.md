---
title: Flipping quantifiers enables efficient equivalence checking for tensor programs
source: news
url: https://arxiv.org/abs/2609.19611
date: '2026-10-05'
tags:
- catchup
- cuda-kernels
- differential-testing
- equivalence-checking
- news
- symbolic-execution
- tensor-programs
section: systems
is_news: true
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49972158'
comments: https://news.ycombinator.com/item?id=49972158
why_read: Read this to discover how checking single output locations across all inputs
  provides an effective symbolic execution strategy for finding bugs in optimized
  tensor programs. You will learn why traditional differential testing fails on massive
  input spaces and how this inverted approach catches subtle bugs in minutes.
authors:
- Paul Biberstein
- Joseph Devietti
- Mayur Naik
---

Differential testing with random inputs is the standard way engineers verify tensor programs, but it regularly misses silent data corruption in optimized GPU kernels.

Testing massive tensor spaces with random samples rarely hits the exact edge conditions required to expose subtle arithmetic or indexing bugs. A new formal verification tool named Dirigo resolves this problem by flipping the quantifiers entirely. Instead of picking a single input tensor and checking all output coordinates, Dirigo selects a single output tensor coordinate and checks whether equivalence holds across all possible inputs using symbolic execution.

When evaluated on a dataset of 6,988 AI-generated CUDA kernels that had already passed standard differential testing, Dirigo uncovered 600 buggy kernels. Crucially, the system detected 97.3 percent of those hidden defects in under two minutes per kernel.

Flipping the verification space turns hard-to-reach GPU corner cases into tractable symbolic proofs.
