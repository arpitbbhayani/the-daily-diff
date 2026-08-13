---
title: MMIOTIC latency x-rays undocumented hardware for reverse engineering
source: github
url: https://github.com/xoreaxeaxeax/mmiotic
date: '2026-08-11'
tags:
- catchup
- github
- hardware-reverse-engineering
- latency-analysis
- mmio-timing
- mmiotic
- physical-memory-analysis
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49265900'
comments: https://news.ycombinator.com/item?id=49265900
why_read: This text introduces mmiotic, a tool for reverse-engineering undocumented
  hardware by analyzing Memory-Mapped I/O (MMIO) timing. Readers will understand how
  latency variations across physical addresses can reveal hardware structure and be
  used for advanced tasks like hypervisor fingerprinting and side-channel analysis.
authors:
- matt_d
---

Ever wished you had X-ray vision for your hardware's latency? A new tool, mmiotic, provides exactly that for Memory-Mapped I/O (MMIO), letting you time any physical address and dissect the underlying hardware behavior.

This is not about high-level benchmarks. This is about probing the raw timing of devices, a critical capability for tasks like hardware reverse-engineering, hypervisor fingerprinting, or even understanding side-channel vulnerabilities. The insights gained can be invaluable when optimizing performance-sensitive systems or designing robust distributed architectures.

Understanding how your system interacts at the deepest levels, from CPU caches to device registers, is fundamental to truly mastering system design. Mmiotic offers a novel approach to uncover those often-hidden hardware realities.
