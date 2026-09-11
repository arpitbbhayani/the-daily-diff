---
title: Cloudflare leverages eBPF to extend Linux for massive network needs
source: hn
url: https://ebpf.io/blog/cloudflare-replatforming-2/
date: '2026-09-09'
tags:
- catchup
- ddos-mitigation
- ebpf
- hn
- linux-networking
- network-performance
- scalability
- xdp
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49623881'
comments: https://news.ycombinator.com/item?id=49623881
why_read: This article explains how Cloudflare utilized eBPF to extend Linux networking
  APIs, addressing critical performance and reliability gaps for massive-scale operations.
  It provides concrete examples like line-rate DDoS mitigation.
authors:
- Cloudflare Engineering
---

Cloudflare's multi-year eBPF journey reveals how they tackle extreme network challenges that standard Linux APIs simply cannot handle. This article, part two of their series, dives into specific gaps eBPF fills, demonstrating its critical role beyond just monitoring.

One standout example is their line-rate DDoS mitigation. Moving DDoS protection from iptables to XDP (eXpress Data Path) with eBPF dramatically reduced CPU overhead by "several times" while handling significantly more attack traffic. This is a testament to eBPF's ability to operate much earlier in the network stack, before sk_buff allocation, making it incredibly efficient.

The insights here are not merely theoretical; they showcase practical, battle-tested applications for building a programmable backbone for a global network. If you are involved in designing high-performance, resilient distributed systems, understanding how Cloudflare pushes the boundaries with eBPF offers invaluable lessons in kernel-level optimization and system extensibility.

This reveals how to engineer truly scalable and robust infrastructure by augmenting the operating system itself.
