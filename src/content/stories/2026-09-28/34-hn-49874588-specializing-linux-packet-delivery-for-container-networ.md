---
title: Specializing Linux packet delivery for container networks with netkit
source: hn
url: https://pchaigno.github.io/ebpf/2026/09/22/netkit-paper.html
date: '2026-09-28'
tags:
- bpf-redirect-peer
- catchup
- ebpf
- hn
- netkit
- network-namespaces
- veth
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49874588'
comments: https://news.ycombinator.com/item?id=49874588
why_read: Read this to understand why network namespace transitions introduce latency
  in container networking and how netkit optimizes the Linux datapath.
authors:
- pchaigno
- Daniel
---

Switching between network namespaces should theoretically be free because namespaces are purely logical boundaries. In practice, traditional container networking with virtual Ethernet (veth) devices incurs a 26 to 31 percent throughput penalty compared to running processes directly in the host network namespace.

The root cause lies in how the Linux kernel processes ingress traffic. When packets arrive across a standard veth pair, they are forced through a per-CPU backlog queue and processed via software interrupts (softirq). This introduces scheduling latency and memory buffering overhead that physical interfaces using Receive Side Scaling bypass entirely.

The netkit device architecture, combined with the bpf_redirect_peer helper, solves this problem. It allows eBPF programs to bypass the backlog queue and directly switch the networking context from one namespace to another in a single execution path.

For high-density microservices and throughput-sensitive workloads, replacing legacy veth devices with netkit delivers immediate datapath improvements without sacrificing container isolation.
