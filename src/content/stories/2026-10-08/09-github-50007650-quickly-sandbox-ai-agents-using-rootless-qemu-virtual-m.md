---
title: Quickly sandbox AI agents using rootless QEMU virtual machines
source: github
url: https://github.com/microsoft/quicksand
date: '2026-10-08'
tags:
- ai-agents
- async-python
- catchup
- github
- qemu
- sandboxing
- virtual-machines
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50007650'
comments: https://news.ycombinator.com/item?id=50007650
why_read: Learn how Quicksand enables fast and rootless QEMU virtual machine isolation
  for AI agents using an async Python API.
authors:
- tosh
image: /infographics/09-github-50007650.jpg
---

Running untrusted code from AI agents inside containers like Docker leaves host kernels vulnerable to container breakouts and privilege escalation.

Microsoft Quicksand offers a robust alternative by wrapping QEMU virtual machines in an asynchronous Python API. It allows engineers to spin up, control, and snapshot dedicated Alpine or Ubuntu virtual machines without requiring root privileges or external hypervisor daemons.

The library bundles cross-platform runtimes across ARM64 and x86_64, giving developers immediate programmatic access to ephemeral virtual machine instances. You can take memory snapshots, execute commands, and inspect filesystem state deterministically through clean async primitives.

True hardware-level isolation is becoming mandatory infrastructure for any production system running autonomous coding agents.
