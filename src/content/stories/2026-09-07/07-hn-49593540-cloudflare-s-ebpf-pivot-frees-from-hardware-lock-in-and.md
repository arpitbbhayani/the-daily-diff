---
title: Cloudflare's eBPF pivot frees from hardware lock-in and vendor dependency
source: hn
url: https://ebpf.io/blog/cloudflare-replatforming-1/
date: '2026-09-07'
tags:
- catchup
- ddos-mitigation
- ebpf
- hardware-lock-in
- hn
- kernel-bypass
- programmable-networking
- technical-debt
- vendor-dependency
- xdp
section: systems
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49593540'
comments: https://news.ycombinator.com/item?id=49593540
why_read: This post chronicles Cloudflare's strategic shift to eBPF, explaining how
  it enabled them to break free from hardware lock-in and build a highly programmable
  network. Readers will gain insights into the technical challenges, business rationale,
  and operational strategies for adopting eBPF.
authors:
- Cloudflare Engineering
---

Cloudflare's eight-year journey with eBPF is a masterclass in replatforming core infrastructure. They shifted from proprietary, hardware-locked DDoS mitigation to a fully programmable, vendor-agnostic network backbone. This is not just an upgrade; it is a strategic pivot.

The adoption of eBPF, particularly XDP (eXpress Data Path), enabled them to achieve extreme packet processing performance directly in the kernel, without the pitfalls of specific NIC vendor dependencies. This allowed them to diversify hardware and maintain high throughput, dropping millions of packets per second.

For senior engineers tackling system design and distributed systems at scale, this article offers a blueprint. It details the challenges, the architectural decisions, and the long-term benefits of embracing eBPF for critical network functions, including achieving a significant return on investment and reducing technical debt.
