---
authors:
- Daroc Alden
comments: https://news.ycombinator.com/item?id=49231315
date: '2026-08-09'
depth_score: 9
hn_id: '49231315'
image: /infographics/28-hn-49231315.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- bpf-type-format
- catchup
- debugging
- hn
- inlined-functions
- kernel-tracing
- kprobes
title: Adding inlined function data to BTF enables better kernel tracing
url: https://lwn.net/Articles/1083985/
utility_score: 7
why_read: This article details the current limitations of tracing inlined kernel functions
  using BPF Type Format (BTF) and proposes a solution to incorporate inlining information,
  enhancing kernel debugging capabilities.
---

Debugging inlined functions in the Linux kernel has always been a nuanced challenge, especially when relying on BPF and BTF (BPF Type Format) information. The problem? Inlined functions do not have a single, traceable address, making it impossible for BPF programs to see all invocations.

An LWN.net article details the ongoing effort to enhance BTF with inlining information, similar to what DWARF offers but in a more streamlined, BPF-friendly format. This will finally allow comprehensive tracing of kernel functions, regardless of whether they are inlined or not.

This improvement is crucial for anyone building advanced observability tools or working on kernel modules. It closes a significant gap in kernel debugging infrastructure, promising more reliable and complete trace data for low-level performance analysis and issue resolution.