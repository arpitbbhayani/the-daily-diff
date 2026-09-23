---
title: Alcor emulates CPUID and descriptor table reads per-process
source: github
url: https://github.com/er-azh/alcor
date: '2026-09-21'
tags:
- catchup
- cpuid-emulation
- descriptor-table-emulation
- github
- kernel-module
- linux
- process-level-emulation
- svm-hypervisor
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49789492'
comments: https://news.ycombinator.com/item?id=49789492
why_read: This text introduces Alcor, a Linux SVM hypervisor that emulates CPUID and
  descriptor table results on a per-process basis. Readers will understand its purpose
  as a compatibility tool and its experimental implementation as a kernel module.
authors:
- er-azh
---

Ever considered the complexity of emulating CPU features at a per-process level in Linux? Alcor is an open-source project that dives deep into this niche, implementing an SVM hypervisor as a Linux kernel module.

This "Blue Pill-style" tool specifically aims for compatibility, allowing you to emulate `cpuid` and `gdtr`/`idtr` results for processes on processors that lack native UMIP or CPUID faulting. It is a fascinating example of low-level system design.

Alcor provides a unique solution for specialized virtualization, security research, or environments where fine-grained control over process-specific CPU feature visibility is critical. It offers profound insights into CPU architecture and kernel programming.
