---
title: Why Homa should replace TCP for AI clusters
source: hn
url: https://www.youtube.com/watch?v=eZ8WWZzoaR0
date: '2026-09-26'
tags:
- ai-clusters
- catchup
- datacenter-networking
- hn
- homa-protocol
- tcp
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49856305'
comments: https://news.ycombinator.com/item?id=49856305
why_read: Understand why the Homa transport protocol is designed to replace TCP for
  high-throughput, low-latency communication in AI clusters.
authors:
- John Ousterhout
---

AI clusters push networking hardware to its limits, and standard TCP is increasingly showing its age. Because TCP relies on sender-managed congestion windows and stream-based delivery, packet drops trigger catastrophic tail latencies under bursty all-to-all communication patterns typical of distributed training and inference.

Homa replaces TCP by rethinking transport for modern datacenter workloads. Instead of trusting senders to back off, Homa lets receivers control packet pacing through dynamic grants and leverages hardware-level packet priorities in network switches. This virtually eliminates head-of-line blocking and in-network buffer bloat.

For distributed systems engineers building LLM infrastructure, transport-layer bottlenecks are often hidden behind GPU kernel runtimes. Understanding receiver-driven transport protocols like Homa provides a clear roadmap for cutting tail latency across massive compute clusters.
