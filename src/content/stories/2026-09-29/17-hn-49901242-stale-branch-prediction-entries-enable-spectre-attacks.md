---
title: Stale branch prediction entries enable Spectre attacks in JIT engines
source: hn
url: https://www.vusec.net/projects/btr/
date: '2026-09-29'
tags:
- branch-target-buffer
- branch-target-reuse
- catchup
- hn
- jit-compilers
- linux-cbpf
- spectre-v2
- speculative-execution
section: systems
interest_score: 8
depth_score: 9
utility_score: 6
novelty_score: 8
hn_id: '49901242'
comments: https://news.ycombinator.com/item?id=49901242
why_read: Learn how stale indirect branch prediction entries in JIT compilers enable
  Branch Target Reuse attacks to bypass modern hardware mitigations and hijack speculative
  control flow.
authors:
- matt_d
---

Modern central processing units enforce architectural memory coherence after runtime self-modification, but they often fail to flush stale branch prediction entries. A new class of Spectre-v2 attacks known as Branch Target Reuse demonstrates how this microarchitectural gap exposes just-in-time compilers to arbitrary speculative execution hijacking.

The attack targets the Branch Target Buffer in runtimes such as Linux cBPF, Oracle GraalVM, and SpiderMonkey. An attacker trains an indirect branch inside a freshly allocated memory chunk, triggers deallocation, and waits for the memory address to be reused by target code. Because the CPU retains the obsolete branch prediction entry, speculative execution jumps to the stale entry point at unaligned or invalid offsets before architectural checks roll it back.

This speculative execute-after-free primitive completely bypasses standard software mitigations and allows kernel memory disclosure. By manipulating code cache recycling patterns, researchers achieved end-to-end arbitrary memory reads across modern Intel hardware.

As language runtimes increasingly rely on in-process JIT compilation for performance and sandboxing, microarchitectural isolation boundaries require explicit invalidation barriers rather than trusting hardware coherence alone.
