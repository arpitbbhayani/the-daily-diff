---
title: Thread slot conflict causes fiber games to crash on Mac
source: hn
url: https://gethighball.com/docs/fiber-slot-wine-macos/
date: '2026-09-29'
tags:
- catchup
- fibers
- gs-register
- hn
- libdispatch
- macos
- thread-environment-block
- wine
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49894111'
comments: https://news.ycombinator.com/item?id=49894111
why_read: Learn why an architectural collision over thread offset 0x20 causes fiber-based
  Windows games to fail under Wine on macOS.
authors:
- Gauthier Piarrette
---

On x86-64 Windows, the Thread Environment Block relies on the GS segment register to store critical thread-local data. Specifically, offset 0x20 holds the pointer to the active fiber, and calling GetCurrentFiber() compiles directly into a single assembly instruction: mov rax, gs:[0x20]. Because game engines rely heavily on fiber-based job systems, this operation happens constantly.

However, macOS uses that exact same offset (gs:0x20) within its pthread thread-specific data to store the Quality of Service priority word. When running Windows binaries under Wine on macOS, reading gs:0x20 does not return a fiber pointer. Instead, it reads a raw QoS bitmask such as 0x20FF on interactive threads or 0x4FF on utility threads.

When a game treats this QoS integer as a memory address and attempts to dereference it, the entire process crashes instantly. The issue was not a high-level API mismatch, but a literal collision in how two independent operating systems laid out their low-level register offsets.

Understanding register-level ABI conventions remains essential when diagnosing why cross-platform runtimes fail in production.
