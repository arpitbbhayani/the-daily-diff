---
authors:
- Méven Car
comments: https://news.ycombinator.com/item?id=49085215
date: '2026-07-28'
depth_score: 9
hn_id: '49085215'
image: /infographics/52-hn-49085215.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- catchup
- dolphin
- file-copy
- frameworks
- hn
- kio
- optimization
- performance
- syscalls
title: Optimizing KDE's KIO for rapid small file copies
url: https://blogs.kde.org/2026/07/28/making-kio-copy-many-files-fast/
utility_score: 8
why_read: Read this to understand the deep dive into optimizing KDE's KIO for faster
  small file copies, learning about per-file overheads and the historical context
  of a long-standing bug.
---

Copying millions of small files can turn into an agonizingly slow process, often taking hours when rsync finishes in minutes. This article offers an incredibly deep dive into why KDE's KIO suffered from this exact problem for over a decade and how it was finally fixed.

The analysis goes beyond surface-level issues, meticulously tracing blocking time through syscalls, inter-process communication via internal sockets, and filesystem metadata updates. It uses flame graphs to pinpoint the real culprits, which were not single hotspots but a "per-file storm" of thin slivers of blocking time.

This is a masterclass in performance engineering, demonstrating how to systematically identify and resolve complex I/O bottlenecks. It provides valuable lessons in profiling, understanding system call overhead, and optimizing IPC that are directly applicable to any senior engineer working on system-level performance.