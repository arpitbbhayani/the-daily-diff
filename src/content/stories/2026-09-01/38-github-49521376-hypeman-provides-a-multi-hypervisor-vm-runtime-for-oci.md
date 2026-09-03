---
title: Hypeman provides a multi-hypervisor VM runtime for OCI images
source: github
url: https://github.com/kernel/hypeman
date: '2026-09-01'
tags:
- apple-virtualization
- catchup
- cloud-hypervisor
- firecracker
- github
- hypervisor
- oci-images
- qemu
- vm-runtime
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49521376'
comments: https://news.ycombinator.com/item?id=49521376
why_read: Read this to understand Hypeman, a project that unifies multiple hypervisor
  technologies to run virtual machines from OCI images. It offers insights into how
  different virtualization frameworks can be abstracted under a single runtime.
authors:
- tilt
---

Running OCI images with strong isolation usually means picking a hypervisor and sticking to its ecosystem. Hypeman changes that by offering a unified multi-hypervisor VM runtime that supports Cloud Hypervisor, Firecracker, QEMU, and Apple Virtualization.framework.

This abstraction layer is a game-changer for infrastructure engineers. It means you can deploy your containerized workloads with VM-level isolation across diverse underlying virtualization technologies, without rewriting your deployment logic for each.

This project provides a robust solution for standardized, isolated workload execution, offering flexibility and enhanced security for critical services.
