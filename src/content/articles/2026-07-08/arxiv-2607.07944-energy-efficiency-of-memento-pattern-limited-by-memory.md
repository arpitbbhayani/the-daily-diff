---
title: Energy efficiency of Memento pattern limited by memory wall
source: arxiv
url: http://arxiv.org/abs/2607.07944v1
date: '2026-07-08'
tags:
- architectural-trade-offs
- arxiv
- catchup
- cs.CL
- cs.SE
- differential-strategy
- energy-efficiency
- gc-thrashing
- green-software-engineering
- memento-design-pattern
- memory-wall
- rapl-interface
arxiv_id: '2607.07944'
categories: cs.SE, cs.CL
why_read: This paper provides empirical insights into the energy dynamics of the Memento
  design pattern, highlighting the trade-offs between efficiency strategies and architectural
  limitations like the 'memory wall'.
authors:
- Imane Jriri
- Tarik Houichime
- Younes El Amrani
---

"Green Software Engineering" is more than a buzzword; energy efficiency is a critical non-functional requirement. But what is the hidden energy cost of our design choices?

This paper dives deep into the Memento design pattern, empirically measuring energy dissipation with the RAPL interface. It compares direct, full-snapshot, and delta-encoding strategies.

The "Differential" (delta-encoding) strategy initially reduces energy by 65.8% for mid-scale states by minimizing memory traffic. This is a significant win.

However, at a state volume of 200 MB, it hits a "memory wall." Algorithmic optimizations are completely neutralized by severe garbage collection thrashing and non-linear power spikes, making it less efficient than the simpler approaches.

Understanding these architectural trade-offs between design elegance and energy cost is crucial for building truly sustainable software.
