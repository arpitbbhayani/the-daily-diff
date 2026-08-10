---
title: Wireblast generates 100Gbs packets in Go with AF_XDP
source: hn
url: https://toonk.io/index.html
date: '2026-08-08'
tags:
- af_xdp
- catchup
- go
- high-performance-networking
- hn
- packet-generator
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49223105'
comments: https://news.ycombinator.com/item?id=49223105
why_read: This article introduces Wireblast, a new Go tool for generating 100Gbs packets
  using AF_XDP, demonstrating how to achieve high packet processing speeds in software.
authors:
- Andree Toonk
---

Pushing networks to 100 Gbps with software means bypassing traditional kernels. Wireblast, a new packet generator in Go, uses AF_XDP to achieve exactly this, demonstrating serious low-level optimization for high-throughput networking. This is not for the faint of heart.

The project highlights how Go, often praised for its concurrency, can also be a beast for raw network performance when paired with kernel bypass mechanisms like AF_XDP. It shows the practicalities of moving data directly between network hardware and user space applications.

This deep dive into performance engineering offers concrete lessons for architects building latency-sensitive or high-bandwidth distributed systems. If you need to benchmark extreme network conditions or build next-generation network functions, understanding this approach is invaluable.
