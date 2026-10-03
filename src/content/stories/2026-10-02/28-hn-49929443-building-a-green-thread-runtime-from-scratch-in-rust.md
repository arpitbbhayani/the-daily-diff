---
title: Building a green thread runtime from scratch in Rust
source: hn
url: https://dzania.github.io/green-threads-from-scratch/
date: '2026-10-02'
tags:
- catchup
- context-switching
- cpu-registers
- green-threads
- hn
- rust
- systems-programming
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49929443'
comments: https://news.ycombinator.com/item?id=49929443
why_read: Read this to understand the fundamental mechanics of how user-space green
  threads manage stacks and registers without kernel intervention. You will gain a
  clear mental model of context switching and lightweight runtime internals.
authors:
- Dzania
---

Operating system threads carry substantial memory overhead, typically allocating around 2 MiB of stack space per thread. When building runtimes designed to handle tens of thousands of concurrent tasks, relying directly on kernel scheduling becomes a massive bottleneck.

A lightweight green thread runtime circumvents kernel transitions by handling context switching entirely in user space. At its core, an execution context boils down to two components: a dedicated contiguous stack and a snapshot of the CPU registers, including the stack pointer.

By writing less than one thousand lines of Rust and a tiny sliver of assembly, you can allocate fixed 32 KiB stacks per task and swap CPU register states directly. This hands-on implementation demystifies cooperative multitasking and reveals how engines like Go or async runtimes manage execution state under the hood.

Understanding register-level context switching transforms runtime schedulers from magical abstractions into clear, tractable systems engineering.
