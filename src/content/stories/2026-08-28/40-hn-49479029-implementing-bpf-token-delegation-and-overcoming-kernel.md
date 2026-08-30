---
title: Implementing BPF Token Delegation and Overcoming Kernel Permission Failures
source: hn
url: https://naveensrinivasan.com/posts/2026-08-27-bpf-token-delegation/
date: '2026-08-28'
tags:
- bpf-permissions
- bpf-token-delegation
- catchup
- ebpf
- hn
- kernel-internals
- linux-capabilities
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49479029'
comments: https://news.ycombinator.com/item?id=49479029
why_read: This article explains the practical challenges and specific kernel permission
  requirements involved in implementing BPF token delegation, offering insights into
  common failures like EPERM and ENOTSUP.
authors:
- Naveen Srinivasan
---

BPF token delegation is a critical, yet often misunderstood, security feature introduced in Linux kernel 6.9. Many resources just skim the surface or provide abstract details. This post cuts through the noise.

It provides a hands-on, "what failed and why" approach to implementing BPF token delegation. You will get deep into the kernel's perspective, understanding capability checks like CAP_BPF and CAP_SYS_ADMIN, and deciphering error codes like EPERM and ENOTSUP.

This is not just theory; it is essential knowledge for securely deploying eBPF applications, especially when dealing with unprivileged containers or custom tooling. You will understand how to properly grant specific BPF permissions without giving full root access. This is a must-read for anyone serious about eBPF security and system internals.
