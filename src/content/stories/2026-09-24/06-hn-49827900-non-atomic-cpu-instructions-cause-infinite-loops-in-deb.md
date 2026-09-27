---
title: Non-atomic CPU instructions cause infinite loops in Debian packaging
source: hn
url: https://jia.je/hardware/2026/09/24/loongson-cpu-erratum-en/
date: '2026-09-24'
tags:
- atomic-instructions
- catchup
- cpu-errata
- debian
- hn
- la664
- loongarch
- openmp
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49827900'
comments: https://news.ycombinator.com/item?id=49827900
why_read: Read this to see how a subtle hardware erratum in LoongArch atomic instructions
  broke OpenMP reduction loops and how the bug was tracked down.
authors:
- jiegec
image: /infographics/06-hn-49827900.jpg
---

Tracking down a concurrency bug is difficult enough when your software logic is flawed, but it reaches an entirely different level when the hardware instruction itself fails to maintain atomicity.

A team porting Debian packages to Loongson LA664 hardware ran into an OpenMP accumulation loop that hung indefinitely because accumulated values repeatedly fell short of expected totals. Using directed test minimization, they isolated the root cause down to the silicon: the atomic add instruction on the CPU occasionally dropped updates under contention.

Loongson confirmed the CPU erratum and released a microcode firmware patch with virtually zero performance penalty. It is a striking reminder that high-level abstractions like atomic pragmas ultimately rely on microarchitectural guarantees that can fail.
