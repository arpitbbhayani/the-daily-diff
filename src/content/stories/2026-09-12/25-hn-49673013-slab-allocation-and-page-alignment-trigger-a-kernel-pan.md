---
title: Slab allocation and page alignment trigger a kernel panic
source: hn
url: https://discourse.ubuntu.com/t/when-ntfs3-met-iomap-debugging-a-kernel-panic-in-ubuntu-26-04/87686
date: '2026-09-12'
tags:
- catchup
- debugging
- hn
- iomap
- kernel-panic
- ntfs3
- page-alignment
- slab-allocation
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49673013'
comments: https://news.ycombinator.com/item?id=49673013
why_read: This postmortem details a complex kernel panic involving ntfs3 and iomap,
  explaining how slab allocation and page alignment can lead to system crashes. Readers
  will learn practical debugging strategies and the root cause analysis of a specific
  kernel bug.
authors:
- Viktor Pashaiev
---

Debugging a kernel panic can feel like black magic, but this postmortem meticulously dissects a real-world Ubuntu 26.04 crash, tracing it to a subtle memory alignment bug between the ntfs3 driver and iomap. The devil truly is in the details here.

The core issue involved kmemdup() allocating resident data from the slab cache at a non-page-aligned offset. A subsequent write crossed a physical page boundary, triggering iomap's BUG_ON() assertion. This is a classic example of how deep memory management details impact system stability.

You will learn about distinguishing slab allocation from page alignment, the practical implications of BUG_ON(), and the complexities of backporting fixes across kernel driver renames. This is advanced troubleshooting for the curious engineer.

Dive deep into kernel internals to level up your debugging prowess.
