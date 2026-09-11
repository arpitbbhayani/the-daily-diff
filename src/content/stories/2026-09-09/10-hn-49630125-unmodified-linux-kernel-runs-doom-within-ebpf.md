---
title: Unmodified Linux kernel runs DOOM within eBPF
source: hn
url: https://ayles.github.io/doom-in-kernel/
date: '2026-09-09'
tags:
- bpf-capsule
- bpf-verifier
- catchup
- ebpf
- hn
- linux-kernel
- virtual-machine
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 9
hn_id: '49630125'
comments: https://news.ycombinator.com/item?id=49630125
why_read: This describes how the BPF Capsule project enables running complex C programs
  like DOOM inside the Linux kernel's eBPF environment. Readers will learn how severe
  eBPF limitations can be overcome without modifying the kernel or using a separate
  userspace VM.
authors:
- ayles
---

Running DOOM in the Linux kernel using eBPF? It sounds like a joke, but this project actually pulls it off, providing deep insights into pushing eBPF's formidable boundaries without any kernel patches.

This is not merely a fun hack; it is a serious exploration of eBPF's potential. The project introduces a custom compiler and runtime, BPF Capsule, which enables complex C programs and even a novel concept of "fibers" to manage control flow within the kernel's strictly verifiable environment. This approach bypasses typical eBPF limitations such as tiny stack, limited registers, and forbidden recursion.

The techniques developed here are highly practical. Think about secure, high-performance observability tools, advanced network processing, or innovative kernel-level sandboxing. This work offers a powerful blueprint for solving real-world infrastructure bottlenecks, proving that you can achieve remarkable complexity within severe constraints. This changes how you think about low-level systems programming.
