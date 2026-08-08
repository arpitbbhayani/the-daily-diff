---
title: HTTP/3 is not always faster than HTTP/2 on fast links
source: hn
url: https://www.iankduncan.com/engineering/2026-02-10-http3-not-always-faster/
date: '2026-08-06'
tags:
- catchup
- congestion-control
- head-of-line-blocking
- hn
- http2
- http3
- network-performance
- network-protocols
- quic
- tcp
- userspace-networking
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49194311'
comments: https://news.ycombinator.com/item?id=49194311
why_read: This article challenges the common assumption that HTTP/3 is universally
  faster, explaining why it can be significantly slower than HTTP/2 on high-bandwidth
  links. Readers will learn about the performance implications of QUIC's userspace
  implementation versus TCP's kernel optimizations.
authors:
- Ian Duncan
---

Do you assume newer network protocols are always faster? Think again. HTTP/3, while brilliant for lossy and high-latency connections, can actually be significantly slower than HTTP/2 on high-bandwidth, low-latency links. This is a crucial detail for system architects.

The core reason lies in QUIC, HTTP/3's underlying transport. It moves congestion control and reliability from the highly optimized kernel-space TCP stack into userspace. This means losing decades of kernel optimizations like hardware offloading and sophisticated delayed ACKs.

A key insight from research cited shows kernel's UDP stack for QUIC generated 15 times more `netif_receive_skb` calls than HTTP/2, each crossing the user-kernel boundary. This overhead can lead to up to 45.2 percent data rate reductions on fast networks.

Understanding these trade-offs is essential for designing truly performant distributed systems. Do not just blindly upgrade; benchmark for your specific conditions.
