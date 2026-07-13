---
title: GhostLock stack-UAF existed in all Linux distributions for 15 years
source: hn
url: https://nebusec.ai/research/ionstack-part-2/
date: '2026-07-08'
tags:
- catchup
- container-escape
- cve-2026-43499
- exploit-development
- ghostlock
- hn
- linux-kernel
- privilege-escalation
- stack-use-after-free
- vulnerability-analysis
- vulnerability-mitigation
score: 77
hn_id: '48834309'
comments: https://news.ycombinator.com/item?id=48834309
why_read: This writeup provides a deep dive into GhostLock (CVE-2026-43499), a 15-year-old
  stack-UAF in the Linux kernel. Readers will learn the technical details of how this
  vulnerability allows for privilege escalation and container escape.
authors:
- ranger_danger
author: ranger_danger
---

A Linux kernel vulnerability, GhostLock (CVE-2026-43499), lay dormant in all major distributions for an astonishing 15 years, introduced back in 2011. This stack-UAF flaw enabled unprivileged local attackers to achieve a stable 97% privilege escalation and container escape.

The core vulnerability allows obtaining a dangling kernel pointer to stack memory and then writing a pointer to an almost arbitrary address. This ultimately enables hijacking function tables for root access.

Google rewarded $92,337 in kernelCTF for the exploit chain. The fix, added in Linux 7.1, addresses the lack of proper stack randomization and helper handling.

This research is a stark reminder of the long-term impact of subtle memory safety issues in foundational system components. It underscores the critical importance of secure coding practices and continuous auditing even in mature codebases.
