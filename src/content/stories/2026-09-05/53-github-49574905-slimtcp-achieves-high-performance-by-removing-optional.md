---
title: SlimTCP achieves high performance by removing optional TCP features
source: github
url: https://github.com/CajuM/lib-ndpip
date: '2026-09-05'
tags:
- catchup
- dpdk
- github
- high-performance
- network-protocol
- slims-tcp
- tcp-ip-stack
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49574905'
comments: https://news.ycombinator.com/item?id=49574905
why_read: Read this to understand how removing optional TCP features can significantly
  boost performance for specialized network environments. You will learn about SlimTCP,
  a high-performance TCP/IP stack, and its architectural trade-offs.
authors:
- CajuM
---

Optimizing network performance in datacenters demands radical approaches. SlimTCP is a lightweight, high-performance TCP/IP stack that achieves impressive speeds – reportedly twice as fast as mTCP – by making a bold assumption: the underlying channel provides reliable, in-order packet delivery.

This design strips away traditional TCP features like Selective Acknowledgments, Timestamps, Congestion Control, and Re-order buffers. While unconventional for the internet, this specialized approach for environments like Ultra Ethernet's ROD profile highlights a critical paradigm for extreme performance.

Understanding these network stack trade-offs is essential for senior engineers designing truly scalable distributed systems. It reveals how targeted protocol simplification can unlock significant throughput gains where environment guarantees are high.
