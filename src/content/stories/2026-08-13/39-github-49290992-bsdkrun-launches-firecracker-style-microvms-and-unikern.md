---
title: bsdkrun launches Firecracker-style microVMs and unikernels rapidly
source: github
url: https://github.com/tsirysndr/bsdkrun
date: '2026-08-13'
tags:
- bsdkrun
- catchup
- firecracker
- github
- libkrun
- linux
- macos
- microvm
- oci-image
- unikernel
- virtualization
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49290992'
comments: https://news.ycombinator.com/item?id=49290992
why_read: Read this to understand bsdkrun, a tool for rapidly launching Firecracker-style
  microVMs and unikernels on macOS and Linux. You will learn how it simplifies booting
  various guest types, including from OCI images.
authors:
- tsirysndr
---

Instant microVMs are no longer just for the cloud. Bsdkrun brings Firecracker-style lightweight virtualization to macOS and Linux, offering a powerful alternative for development and production workloads.

This tool wraps libkrun, leveraging Apple's Hypervisor.framework and KVM to boot BSD, Linux, and various unikernels. You can launch guests from UEFI images, direct kernels, or even straight from OCI images, treating them like `docker run` but with superior isolation and minimal overhead.

For system designers and developers, this means faster spin-up times, enhanced security, and a more efficient way to run services, particularly for serverless functions or edge computing. It is a robust solution that streamlines lightweight infrastructure management.
