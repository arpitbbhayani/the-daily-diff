---
title: Linux kernel SMP rework reduces real-time latency by allowing preemption
source: hn
url: https://www.phoronix.com/news/Linux-7.3-SMP
date: '2026-08-17'
tags:
- catchup
- hn
- ipi
- latency-reduction
- linux-kernel
- preemption
- real-time-performance
- smp
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49333815'
comments: https://news.ycombinator.com/item?id=49333815
why_read: This article explains how Bytedance engineers reworked Linux kernel SMP
  code to allow preemption during IPI completion, dramatically reducing latency for
  real-time workloads like DPDK. You will learn about a specific optimization technique
  and its significant impact on system responsiveness.
authors:
- Michael Larabel
---

Linux 7.3 is landing with a significant performance boost for latency-sensitive workloads. Bytedance engineers spearheaded crucial SMP improvements, reworking `smp_call_function*()` to allow preemption during IPI completion waiting.

This might sound like deep kernel esoterica, but the impact is tangible: they achieved a 90 percent reduction in P99 latency when tested with demanding applications like DPDK. Previously, blocking until remote CPUs completed IPI function execution could dramatically increase scheduling latency, especially with many cores.

Understanding these low-level operating system optimizations is critical for any senior engineer working on high-performance or real-time distributed systems. It highlights how core kernel design choices directly translate into application-level responsiveness and scalability.

This is a prime example of impactful engineering at the deepest layer of the stack.
