---
title: Linus demands real users before hazard pointers land
source: hn
url: https://freenode.net/article/linus-demands-real-users-before-hazard-pointers-land
date: '2026-09-21'
tags:
- catchup
- concurrency
- hazard-pointers
- hn
- linux-kernel
- memory-reclamation
- rcu
- real-workloads
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49782505'
comments: https://news.ycombinator.com/item?id=49782505
why_read: Read this to understand Linus Torvalds' strict requirements for new features
  in the Linux kernel, emphasizing real-world usage and performance gains over theoretical
  benefits. It provides insight into the practical demands of kernel development.
authors:
- kexec
---

Linus Torvalds is setting an extremely high bar for introducing hazard pointers into the Linux kernel: no merge without real conversions of widely used subsystems and measurable performance gains on *actual* workloads. Microbenchmarks, he states, are "just garbage" and "actively misleading."

This is a critical lesson in engineering leadership and system evolution. It highlights that foundational changes, especially to core concurrency primitives, demand more than theoretical elegance or synthetic tests. They require demonstrable, production-grade value to justify the complexity and potential risks.

Proving value in the kernel requires showing the money, not just the theory.
