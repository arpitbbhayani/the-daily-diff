---
title: Hyperlight 0.17.0 now supports macOS with new SandboxBuilder API
source: hn
url: https://hyperlight.org/blog/hyperlight-0170/
date: '2026-08-31'
tags:
- apple-silicon
- catchup
- embedded-vmm
- hn
- hyperlight
- macos-support
- sandbox-builder-api
- untrusted-code
- virtual-machine-manager
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49510243'
comments: https://news.ycombinator.com/item?id=49510243
why_read: This announcement details the 0.17.0 release of Hyperlight, introducing
  macOS support for Apple Silicon and an improved SandboxBuilder API. Readers will
  learn about Hyperlight's expanded platform compatibility and more ergonomic sandbox
  construction.
authors:
- yoshuaw
---

Building applications that safely execute untrusted code often requires robust sandboxing. Hyperlight is a lightweight Virtual Machine Manager (VMM) designed to be embedded directly into applications.

Its 0.17.0 release brings macOS support, leveraging Apple's Hypervisor.framework for M1/M2/M3 chips. While current macOS performance prioritizes compatibility over parallelism, future optimizations are planned.

This project provides a powerful, cross-platform tool for system architects and engineers needing low-latency, secure isolation within their applications. It is a prime example of deep systems engineering for critical use cases.
