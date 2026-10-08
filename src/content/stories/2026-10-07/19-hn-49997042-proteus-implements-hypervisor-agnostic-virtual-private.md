---
title: Proteus implements hypervisor-agnostic virtual private cloud dataplanes at
  line rate
source: hn
url: https://tritoncloud.io/blog/proteus-a-hypervisor-agnostic-vpc-for-triton-cloud/
date: '2026-10-07'
tags:
- catchup
- dataplane
- freebsd
- geneve-encapsulation
- hn
- illumos
- virtual-networking
- vpc
section: systems
is_news: false
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49997042'
comments: https://news.ycombinator.com/item?id=49997042
why_read: Learn how Triton Cloud implements a high-performance host-kernel dataplane
  across different operating systems without requiring physical network changes. It
  provides a clear architectural breakdown of policy enforcement, encapsulation, and
  line-rate multi-tenant isolation.
authors:
- NexRebular
---

Virtual private clouds often suffer from painful compromises between physical switch complexity and host networking performance. Triton Cloud took a radical approach with Proteus: moving the entire VPC dataplane directly into the compute node kernel, sitting beneath the hypervisor layer.

Proteus handles NAT, routing, firewall state, and Geneve overlay encapsulation before packets ever touch the physical network. The underlying physical switches only route simple IPv6 between compute nodes and remain completely unaware of tenant boundaries. On illumos nodes paired across 2x10G LACP links, virtual-machine-to-virtual-machine traffic hits 19.4 Gbit/s, which represents line rate once encapsulation headers are accounted for.

Because the dataplane attaches beneath the hypervisor rather than inside a guest or user-space daemon, the exact same policy engine runs across both illumos and FreeBSD kernels with minimal driver glue.

Designing cloud networking around pure edge-host intelligence eliminates top-of-rack reconfigurations when spinning up dynamic subnets.
