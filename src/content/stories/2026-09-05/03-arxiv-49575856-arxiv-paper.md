---
title: ArXiv Paper
source: arxiv
url: https://arxiv.org/abs/49575856
date: '2026-09-05'
tags:
- arxiv
- catchup
section: systems
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
arxiv_id: '49575856'
categories: ''
why_read: You will learn about a groundbreaking eBPF-based tool for diagnosing CPU
  contention in distributed systems, understanding how it uniquely identifies resource
  hogging cgroups on stock kernels, and how such low-level instrumentation can dramatically
  improve performance debugging.
---

Debugging CPU contention in containerized environments can feel like black magic. Traditional metrics only tell you that a container waited; they do not tell you who it waited for. Enter SchedBlame, a groundbreaking eBPF tracer.

SchedBlame flips the script. Instead of measuring how long a victim waited, it tracks the CPU time consumed by other cgroups while the victim was runnable but idle on the same CPU. This "inverted accounting" provides precise, culprit-attributed contention data directly from stock Linux kernels.

The mechanism involves clever use of per-CPU bitmaps and scheduler hooks, capturing vital context in a mere 16-byte record. This is a monumental leap for observability in distributed systems, offering a highly practical tool for identifying the true sources of performance bottlenecks.
