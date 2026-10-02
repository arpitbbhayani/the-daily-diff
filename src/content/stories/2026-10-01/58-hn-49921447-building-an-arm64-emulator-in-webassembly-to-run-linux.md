---
title: Building an ARM64 emulator in WebAssembly to run Linux apps
source: hn
url: https://arm64js.com/blog/tui-apps-in-the-browser/
date: '2026-10-01'
tags:
- alpine-linux
- armv8-a
- catchup
- cors
- emulator
- hn
- web-workers
- webassembly
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49921447'
comments: https://news.ycombinator.com/item?id=49921447
why_read: Learn how to build a Rust-based ARM64 emulator compiled to WebAssembly to
  boot Linux inside the browser. It details architectural trade-offs around multi-core
  emulation, shared memory, and overcoming browser networking restrictions.
authors:
- kkooler
---

Running real Linux binaries inside a web browser has historically been heavy and slow, but ARM64js demonstrates that architecture choice changes the equation. Built in Rust and compiled to WebAssembly, the project emulates an ARMv8-A processor and boots a complete Alpine Linux distribution directly inside a browser tab.

The system utilizes WebAssembly loaded across multiple web workers sharing a single memory block for RAM. Choosing ARM over x86 simplifies instruction parsing because fixed instruction widths make decoding considerably more predictable. Running inside browser sandboxes introduced distinct architectural hurdles, specifically the lack of raw TCP access and CORS restrictions on Alpine package repositories. The author resolved this by routing network traffic through a lightweight proxy to inject required CORS headers without self-hosting the upstream repositories.

This project provides a clean blueprint for engineers evaluating WebAssembly for low-level systems emulation, sandbox testing, or in-browser developer tooling.

Rethinking instruction sets and browser sandbox constraints can unlock full operating system environments on the client.
