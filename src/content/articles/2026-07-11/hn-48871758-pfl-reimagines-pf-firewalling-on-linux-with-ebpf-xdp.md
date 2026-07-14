---
title: PFL Reimagines pf Firewalling on Linux with eBPF/XDP
source: hn
url: https://blog.nfsensei.org/the-packet-filter-reborn.html
date: '2026-07-11'
tags:
- catchup
- dataplane
- ebpf
- firewalling
- hn
- kernel-architecture
- linux
- netfilter
- packet-processing
- pf
- xdp
score: 19
hn_id: '48871758'
comments: https://news.ycombinator.com/item?id=48871758
why_read: This text describes an experiment (PFL) to reimplement OpenBSD's pf firewall
  language and stateful semantics on Linux using eBPF/XDP. Readers will learn about
  the architectural challenges and design considerations for expressing complex firewalling
  logic within XDP's restrictive execution model.
authors:
- 882542F3884314B
author: 882542F3884314B
---

Reimplementing a stateful firewall like OpenBSD's pf with eBPF/XDP on Linux offers an order of magnitude performance boost.

Traditional Linux firewalls operate deep in the kernel. XDP pushes packet processing to the NIC driver, before even an sk_buff is allocated. This project, PFL, translates the rich pf configuration language into eBPF maps and XDP programs, evaluated as a tail-called pipeline.

It showcases how to achieve wire-speed packet processing by carefully navigating eBPF's restrictive execution model, including its 512-byte stack and bounded-execution requirements.

This shift represents a significant architectural leap for network security and performance.
