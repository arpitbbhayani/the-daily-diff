---
title: Netkit specializes Linux packet delivery to accelerate container networking
source: hn
url: https://arxiv.org/abs/2609.18633
date: '2026-10-04'
tags:
- catchup
- cilium
- container-networking
- ebpf
- hn
- linux-kernel
- network-namespaces
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49958930'
comments: https://news.ycombinator.com/item?id=49958930
why_read: Read this paper to understand how Netkit leverages eBPF to eliminate redundant
  packet buffering and match native host networking performance across container namespaces.
authors:
- Daniel Borkmann
- Paul Chaignon
---

Container isolation comes with a well-known tax. Moving network packets across network namespaces on Linux forces the kernel through redundant backlog queues, burning CPU cycles and adding latency.

A new paper introduces netkit, an eBPF-based datapath developed for the Linux kernel and integrated with Cilium. Netkit bypasses unnecessary buffering by directly redirecting packets between namespaces while retaining the standard Linux network stack semantics.

Benchmarks show throughput improvements of up to 37 percent, effectively matching process-to-process communication speeds on the same host. This closes a long-standing performance gap in cloud-native microservices.
