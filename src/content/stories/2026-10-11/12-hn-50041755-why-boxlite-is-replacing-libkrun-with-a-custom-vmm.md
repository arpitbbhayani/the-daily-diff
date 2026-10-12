---
title: Why BoxLite is replacing libkrun with a custom VMM
source: hn
url: https://blog.boxlite.ai/building-a-vmm-from-scratch-0-why-boxlite-is-replacing-libkrun
date: '2026-10-11'
tags:
- catchup
- hn
- hypervisor-framework
- kvm
- libkrun
- micro-vm
- virtual-machine-monitor
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '50041755'
comments: https://news.ycombinator.com/item?id=50041755
why_read: Read this to understand the architectural limitations of libkrun that prompted
  BoxLite to build its own micro-VM monitor from scratch.
authors:
- dorianzheng
---

Off-the-shelf micro-VM runtimes quickly fall apart when you push them beyond simple sandboxing into production AI agent workloads. When teams embed runtimes like libkrun to provision one micro-VM per agent, they quickly hit low-level virtualization walls that break isolation.

The immediate issue is hardware abstraction limitations. In libkrun, loading guest kernels via shared libraries creates brittle host dependencies, while process terminations swallow error codes and return generic invalid argument errors. Mount more than two virtio directory volumes, and the VM crashes with interrupt request exhaustion because the virtual interrupt table is completely depleted.

Building a custom virtual machine monitor directly against Linux KVM and Apple Hypervisor framework solves these bottlenecks. A purpose-built hypervisor gives developers direct control over device layout, predictable error handling, and sub-millisecond turn resets for stateful agents.

Standard container abstractions often leak state, but purpose-built micro-VM monitors make secure multi-tenant execution practical.
