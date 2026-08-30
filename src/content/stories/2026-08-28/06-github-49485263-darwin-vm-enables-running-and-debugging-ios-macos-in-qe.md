---
title: darwin-vm enables running and debugging iOS/macOS in Qemu
source: github
url: https://github.com/jprx/darwin-vm
date: '2026-08-28'
tags:
- apple-silicon
- catchup
- github
- ios-virtualization
- kernel-debugging
- macos-virtualization
- qemu
- root-shell
section: systems
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 9
hn_id: '49485263'
comments: https://news.ycombinator.com/item?id=49485263
why_read: Read this to understand how to virtualize and debug iOS and macOS systems
  using Qemu. It enables running custom programs and patching kernels on virtual iPhones
  and Macs without jailbreaking.
authors:
- jprx
---

Running modern iOS and macOS, even Apple Silicon, inside QEMU is now a reality with Darwin-VM. This open-source project provides unprecedented access, allowing engineers to debug the kernel, modify the root filesystem, and execute custom programs within a virtualized Apple environment.

This is a monumental feat of systems engineering. Achieving this level of emulation, especially with complex architectures like Apple Silicon, unlocks incredible opportunities for low-level development, security research, and in-depth operating system analysis. Imagine having a debuggable virtual iPhone that is not jailbroken.

For anyone pushing the boundaries of virtualization or delving into OS internals, Darwin-VM is a must-see. It represents a significant leap forward in understanding and interacting with closed-source systems, offering a robust platform for exploration and development.
