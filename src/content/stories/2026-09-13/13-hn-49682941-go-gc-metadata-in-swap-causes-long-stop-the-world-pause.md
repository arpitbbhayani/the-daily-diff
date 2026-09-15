---
title: Go GC metadata in swap causes long stop-the-world pauses
source: hn
url: https://frn.sh/go-gc/
date: '2026-09-13'
tags:
- catchup
- go-gc
- hn
- memory-performance
- page-faults
- stop-the-world
- swap
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49682941'
comments: https://news.ycombinator.com/item?id=49682941
why_read: This article explains how Go's garbage collector metadata being in swap
  can cause significant stop-the-world pauses due to page faults. Readers will learn
  about a critical performance pitfall when using swap with Go applications.
authors:
- "Fernando Sim\xF5es"
---

Ever chased down a mysterious Go application performance hiccup only to hit a wall? This article reveals a critical finding: 40ms Go garbage collector stop-the-world pauses were traced back to GC metadata being swapped out to disk.

The author brilliantly used bpf scripts to count page faults *during* the stop-the-world phase, pinpointing that 39 of the 40 milliseconds were spent on 228 page faults within the GC's internal bookkeeping. This is a subtle interaction between the Go runtime and the operating system's memory management, often overlooked.

It highlights that even well-intentioned optimizations, like enabling swap to absorb memory spikes, can introduce severe, non-obvious performance regressions. Understanding these low-level interactions is crucial for senior engineers aiming to build truly high-performance, resilient systems.

This detailed breakdown provides not just a solution, but a powerful diagnostic methodology for similar deep system performance challenges.
