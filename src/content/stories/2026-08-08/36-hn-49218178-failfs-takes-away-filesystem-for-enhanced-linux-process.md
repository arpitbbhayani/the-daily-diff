---
title: FailFS takes away filesystem for enhanced Linux process sandboxing
source: hn
url: https://hackaday.com/2026/08/07/this-filesystem-is-born-to-fail/
date: '2026-08-08'
tags:
- catchup
- eopnotsupp
- failfs
- filesystem-access
- hn
- linux-sandboxing
- openat-syscall
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49218178'
comments: https://news.ycombinator.com/item?id=49218178
why_read: This explains FailFS, a new Linux kernel feature that rethinks process sandboxing
  by explicitly denying filesystem access rather than restricting it. Readers will
  understand its mechanism and how it simplifies secure application environments.
authors:
- tambourine_man
---

Sandboxing processes usually means meticulously hiding parts of the filesystem. But what if the filesystem itself was designed to fail by default?

Linux 7.3 is introducing FailFS, a new pseudo-filesystem where every operation returns EOPNOTSUPP. Instead of constructing complex rules to deny access, you simply start with nothing.

Applications must operate solely from explicit file descriptors provided by a sandbox manager. This shifts the security model from "hide what is not allowed" to "explicitly grant what is allowed", preventing accidental information leaks or unintended access.

This is a game-changer for secure system design and process isolation.
