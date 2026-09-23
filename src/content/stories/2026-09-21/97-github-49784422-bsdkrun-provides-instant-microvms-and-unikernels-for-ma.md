---
title: bsdkrun provides instant microVMs and unikernels for macOS and Linux
source: github
url: https://github.com/tsirysndr/bsdkrun
date: '2026-09-21'
tags:
- catchup
- firecracker
- github
- libkrun
- linux
- macos
- microvm
- unikernel
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49784422'
comments: https://news.ycombinator.com/item?id=49784422
why_read: This text introduces bsdkrun, a Firecracker-style microVM launcher for macOS
  and Linux. Readers will understand its core functionality, supported guest types,
  and diverse booting mechanisms, including OCI images and direct kernel boots.
authors:
- tsirysndr
---

Imagine replacing heavy virtual machines with near-instant MicroVMs, leveraging Firecracker's efficiency on both macOS and Linux. Bsdkrun does exactly that, built on libkrun.

This project allows you to boot BSD, Linux, and even unikernel guests from UEFI, direct kernels, or even OCI images, effectively treating containers as minimal VMs. It offers a new paradigm for isolating workloads with significantly reduced overhead, appealing to engineers building high-density, serverless-like environments.

This is a deep dive into practical, low-level systems engineering for scalable infrastructure.
