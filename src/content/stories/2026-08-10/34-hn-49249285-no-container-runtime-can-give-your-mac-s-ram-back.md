---
authors:
- AprilNEA
comments: https://news.ycombinator.com/item?id=49249285
date: '2026-08-10'
depth_score: 8
hn_id: '49249285'
image: /infographics/34-hn-49249285.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- catchup
- container-runtime
- hn
- hypervisor
- linux-vm
- macos
- ram-management
- virtualization
title: No Container Runtime Can Give Your Mac's RAM Back
url: https://arcbox.dev/blog/macos-vm-memory-ratchet
utility_score: 8
why_read: This post explains why container runtimes on macOS slowly consume RAM and
  don't release it, revealing that a hidden Linux VM is the actual culprit. Readers
  will learn how macOS virtualization frameworks contribute to this behavior and why
  current solutions are insufficient.
---

If you use Docker or any container runtime on your Mac, you have likely noticed it gradually devours RAM, and quitting containers does not give that memory back. This is not the fault of the container runtime itself, but a fundamental limitation within Apple's Virtualization.framework.

Most Mac container runtimes operate by booting a hidden Linux virtual machine. This article rigorously demonstrates that Apple's VM framework has a core flaw: it does not return freed memory to the host operating system, rendering common techniques like ballooning ineffective. It explains this behavior by analyzing macOS hypervisor stacks and memory release primitives.

This insight is crucial for any senior engineer developing on macOS. It clarifies why memory management feels broken and helps you make informed decisions about your development environment, even leading serious runtimes to explore alternative virtualization stacks. Understand the real memory cost of your containers.