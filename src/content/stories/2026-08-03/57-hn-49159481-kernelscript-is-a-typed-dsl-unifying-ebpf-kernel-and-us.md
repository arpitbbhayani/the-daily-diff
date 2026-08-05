---
title: KernelScript is a typed DSL unifying eBPF kernel and userspace programming
source: hn
url: https://arxiv.org/abs/2607.23900
date: '2026-08-03'
tags:
- catchup
- cross-boundary-bugs
- domain-specific-language
- ebpf
- hn
- kernel-programming
- type-system
- userspace-programming
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49159481'
comments: https://news.ycombinator.com/item?id=49159481
why_read: This paper introduces KernelScript, a DSL that unifies the fragmented eBPF
  programming model. Readers will learn how it prevents cross-boundary bugs at compile
  time and improves development efficiency for eBPF applications.
authors:
- Cong Wang
- Siyuan Sun
- Yusheng Zheng
---

eBPF development often feels like juggling three separate codebases: kernel, userspace, and shared maps. The real headache? Unchecked relationships across these boundaries that lead to silent data corruption or crashes, only to be found at runtime.

KernelScript offers a compelling solution. It is a domain-specific language that unifies type definitions for maps, program handles, and execution domains in one source. This allows it to reject cross-boundary bugs at compile time, issues that standard C and libbpf would happily build and load.

Imagine reducing cross-boundary change diffs by five times, all while maintaining compatibility with existing toolchains. This approach radically improves developer productivity and system reliability for critical eBPF applications.
