---
title: Zephyr with WebAssembly as real architecture using Asyncify and host SoC
source: github
url: https://github.com/beriberikix/zephyr-wasm-soc
date: '2026-09-20'
tags:
- asyncify
- catchup
- context-switching
- cooperative-interrupts
- github
- system-on-chip
- wasm-linear-memory
- webassembly
- zephyr
section: systems
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
hn_id: '49779905'
comments: https://news.ycombinator.com/item?id=49779905
why_read: Read this to understand how the Zephyr OS can operate as a real architecture
  using WebAssembly, including innovative techniques like Asyncify for context switching
  and a host system acting as a virtual System-on-Chip. It demonstrates a practical
  application of WebAssembly for system-level emulation and OS development.
authors:
- beriberikix
---

Imagine running a full real-time operating system like Zephyr within WebAssembly, treating WASM as a "real architecture." This GitHub project achieves exactly that, pushing the boundaries of what WebAssembly can do outside the browser.

The engineering here is profound, leveraging Binaryen's Asyncify for context switching and redesigning the host environment to act as a System-on-Chip. This is not a simulation; the kernel runs freestanding in a single wasm32 linear memory, utilizing Zephyr's own libc and scheduler.

This work offers deep insights into low-level systems design, expanding WebAssembly's potential for embedded, edge, and novel application architectures where a full RTOS environment is beneficial. It is a testament to the versatility and growing maturity of WASM.

This is a masterclass in pushing system boundaries.
