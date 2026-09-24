---
title: Orphaned VMs allow uninterrupted execution during host kernel updates
source: hn
url: https://www.phoronix.com/news/Orphaned-VMs-Linux-Patches
date: '2026-09-22'
tags:
- catchup
- hn
- kvm
- linux-kernel
- live-update
- orphaned-vms
- virtualization
- zero-downtime
section: systems
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
hn_id: '49797668'
comments: https://news.ycombinator.com/item?id=49797668
why_read: This article introduces Google's experimental 'Orphaned VMs' project, designed
  to keep virtual machines running without interruption even when the host Linux kernel
  is offline for updates. Readers will learn about the mechanisms enabling zero-downtime
  host maintenance for cloud infrastructure.
authors:
- Michael Larabel
---

Cloud providers are pushing for truly zero-downtime infrastructure, and Google is pioneering a fascinating approach with "Orphaned VMs." This work allows virtual machines to continue running uninterrupted even as the host kernel performs updates or reboots.

This is not a simple workaround; it involves deeply technical Linux kernel patches that preserve vCPU state in RAM and utilize KVM Caretaker Core infrastructure. Imagine a world where host maintenance becomes truly invisible to your applications.

While still early, these experimental patches tested on Intel, AMD, and Arm server processors point to a future of unprecedented uptime and resilience in cloud computing. This shifts how we think about system design for continuous availability.
