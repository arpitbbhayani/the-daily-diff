---
title: Explaining divergent benchmark results for Wild and Mold linkers
source: hn
url: https://davidlattimore.github.io/posts/2026/09/18/benchmarking-wild-vs-mold.html
date: '2026-09-19'
tags:
- benchmark-configuration
- catchup
- ext4
- filesystem-performance
- hn
- linker-benchmarking
- mold-linker
- tmpfs
- wild-linker
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49764655'
comments: https://news.ycombinator.com/item?id=49764655
why_read: This post clarifies the reasons behind conflicting performance benchmarks
  for the Wild and Mold linkers. It details key configuration differences, such as
  filesystem choice and output file handling, that significantly impact linker performance
  measurements.
authors:
- David Lattimore
---

Benchmarking is tricky, and subtle details can entirely skew results. This article dives deep into the performance discrepancies between the Wild and Mold linkers, revealing that the devil truly is in the details of the test setup. 

The post explains how factors such as whether the output file already exists, the choice of filesystem (tmpfs versus ext4), and specific linker flags like `--no-fork` can dramatically alter benchmark outcomes. For instance, testing on tmpfs, while reducing noise, does not reflect real-world usage on ext4. 

This is a masterclass in robust performance engineering. It teaches critical lessons on how to conduct fair and representative benchmarks for system tools, ensuring that comparisons are valid and not just artifacts of the testing environment. Every engineer involved in performance evaluation should read this.
