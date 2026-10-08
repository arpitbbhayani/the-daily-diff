---
title: Driving an NVIDIA GPU from a hobby Rust kernel
source: hn
url: https://github.com/oriaj-nocrala/rust_so_kernel/blob/master/docs/blog/gsp-to-vulkan.md
date: '2026-10-07'
tags:
- catchup
- gpu-driver
- gsp-rm
- hn
- nvk
- rust
- vulkan
section: systems
is_news: false
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49996014'
comments: https://news.ycombinator.com/item?id=49996014
why_read: Read this to understand how to build a bare-metal NVIDIA GPU driver from
  scratch in Rust using GSP-RM firmware. It provides a rare, mechanistic look at the
  hardware initialization steps and debugging strategies required to run Vulkan without
  an underlying OS.
authors:
- "Jairo Alarc\xF3n"
---

Writing a graphics driver from scratch is notoriously difficult, but doing it in a bare-metal Rust hobby kernel with zero Linux dependencies takes systems engineering to another level.

This project details the architecture of driving a modern NVIDIA RTX 3050 directly from a custom x86-64 no_std Rust kernel. The implementation boots NVIDIA GSP-RM firmware, configures display engines, orchestrates GPFIFO pushbuffers, and hosts a port of Mesa NVK to render Vulkan at 60 frames per second over 31,000 lines of Rust.

Debugging hardware without a serial port, PS/2 interface, or host OS forced ingenious diagnostic workflows. The kernel writes raw ring buffers straight to boot partitions on USB media, which are subsequently analyzed across reboots. Interfacing with GSP firmware reveals how modern GPU initialization actually functions when stripped of monolithic driver layers.

Treating hardware interfaces as strict state machines highlights how memory safety and explicit typing can tame historically brittle kernel-level driver development.
