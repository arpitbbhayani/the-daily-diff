---
title: Kernel-level preemption provides deterministic containment for rogue agentic
  execution
source: github
url: https://github.com/joseluispino/hardstop
date: '2026-09-24'
tags:
- agentic-ai
- catchup
- ebpf
- epistemic-andon-cord
- github
- kernel-level-preemption
- supervisory-control
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49830567'
comments: https://news.ycombinator.com/item?id=49830567
why_read: Read this to understand how out-of-band kernel supervisory mechanisms can
  deterministically freeze and contain rogue AI agents before unsafe system calls
  occur. It demonstrates why stochastic models cannot act as their own safety arbiters
  and provides a concrete systems-level architecture for deterministic preemption.
authors:
- joseluispino
---

Relying on an LLM to evaluate its own safety inside an autonomous execution loop creates an unavoidable epistemic failure mode. Stochastic language models cannot serve as their own deterministic safety arbiters.

Hard Stop tackles this vulnerability by introducing an out-of-band supervisory control plane that decouples safety enforcement from model execution. Using discrete event system supervision and Synchronous Reactive sentinels, the architecture enables sub-millisecond POSIX and eBPF process preemption.

This design freezes rogue execution loops in under 0.154 milliseconds, intercepting unauthorized socket traffic and system calls before they ever cross hypervisor boundaries.

Real safety guarantees for autonomous agents must come from the OS kernel, not prompt engineering.
