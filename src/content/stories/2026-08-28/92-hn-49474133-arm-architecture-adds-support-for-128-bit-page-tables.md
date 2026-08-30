---
title: Arm architecture adds support for 128-bit page tables
source: hn
url: https://lwn.net/Articles/1088125/
date: '2026-08-28'
tags:
- address-space
- arm-architecture
- catchup
- hn
- memory-addressing
- page-tables
- pte
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49474133'
comments: https://news.ycombinator.com/item?id=49474133
why_read: This article explains how the Arm architecture is evolving to support 128-bit
  page tables, addressing future physical memory limits even beyond 64-bit systems.
authors:
- Jonathan Corbet
---

The 64-bit memory address space once seemed limitless, but for modern AI workloads, even 72PB might soon hit limits. LWN.net details Arm's move towards 128-bit page tables, a crucial architectural evolution addressing future demands for immense physical memory.

This is not just about expanding numbers; it is about fundamentally changing how processors manage memory at the kernel level. Understanding how page-table entries map physical addresses is paramount for any senior engineer designing high-performance systems or working with massive memory footprints.

This article provides principal-level insights into why such a profound shift is necessary and the implications for system design. It is essential reading to prepare for the memory demands of the next generation of AI and distributed systems.
