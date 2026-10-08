---
title: Generating minimal post-mortem debuggable memory dumps on macOS
source: hn
url: https://peteronprogramming.wordpress.com/2026/10/07/post-mortem-debuggable-minimal-size-memory-dumps-on-macos/
date: '2026-10-07'
tags:
- catchup
- core-dumps
- hn
- macos-debugging
- memory-dumps
- minidump
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49993039'
comments: https://news.ycombinator.com/item?id=49993039
why_read: Learn the historical origins of core dumps and how to capture compact, debuggable
  memory dumps on macOS.
authors:
- peteronprogramming
---

Capturing crash dumps in production on macOS has historically been frustrating. Standard macOS core dumps capture the entire address space, producing multi-gigabyte files that choke network links and storage buffers.

Windows engineers have enjoyed MiniDumpWriteDump for decades, stripping out unneeded memory pages to save compact stack traces and thread states. This deep dive introduces a comparable approach on Darwin, selectively walking Mach task threads, virtual memory regions, and loaded dylib images.

By filtering down to thread registers, local call stacks, and critical metadata, memory dump sizes plummet by orders of magnitude while preserving full LLDB post-mortem debugging fidelity. If you run compiled native services or distributed client binaries on Apple silicon, this changes how you handle crash reporting.

Small crash dumps turn impossible production debugging into a solved problem.
