---
title: Ternary Consensus Mesh Achieves Line-Rate Post-Quantum Byzantine Consensus
source: github
url: https://github.com/leadpiperl1/ternary-consensus-mesh
date: '2026-09-20'
tags:
- catchup
- ebpf-xdp
- github
- l1d-cache
- post-quantum-byzantine-consensus
- ternary-consensus
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 9
hn_id: '49772147'
comments: https://news.ycombinator.com/item?id=49772147
why_read: This repository describes a novel approach to achieving line-rate post-quantum
  Byzantine consensus using balanced ternary microarchitectures. Readers will learn
  about specific technical highlights like L1D cache-resident frames, deterministic
  wire latency, and state-crypt separation.
authors:
- leadpiperl1
---

Achieving line-rate post-quantum Byzantine consensus sounds like a distant future, but this project dives deep into making it a reality. It presents a 'Ternary Consensus Mesh' that compresses a 128-node consensus vote bitmask to just 26 bytes, fitting an entire synchronous descriptor within a single 64-byte L1D cache line.

This incredible optimization enables deterministic wire latency, validated via eBPF XDP at 100GbE line-rate. The system boasts median latencies of 40.0 ns and 99.9th percentile latencies of 60.0 ns, comfortably below the 80.5 ns frame budget. It is a masterclass in low-level systems engineering.

Furthermore, the design intelligently separates state and cryptography. The 64-byte synchronous consensus frame is decoupled from asynchronous ML-DSA-44 signature verification, which is offloaded over lock-free SPSC rings utilizing 2MB hugepages. This is not just theoretical; it offers a blueprint for building high-performance, secure distributed systems. This work redefines what is possible for high-throughput, low-latency consensus.
