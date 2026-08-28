---
title: BRAAM runs a complete operating system within a browser tab
source: github
url: https://github.com/braamix/core
date: '2026-08-26'
tags:
- braam
- browser-os
- c++20
- catchup
- client-side
- command-line-interface
- github
- lightweight-system
- sandbox
- webassembly
section: systems
interest_score: 8
depth_score: 9
utility_score: 6
novelty_score: 9
hn_id: '49446125'
comments: https://news.ycombinator.com/item?id=49446125
why_read: This text introduces BRAAM, an innovative operating system running entirely
  in a browser tab. Readers will learn how a lightweight, full-featured OS can be
  built from scratch with WebAssembly, offering a complete command-line environment
  without server-side components.
authors:
- begoon
---

Imagine a full operating system, complete with a kernel, filesystem, and shell, running entirely in a browser tab. That is exactly what Braam delivers, and it does so without a server-side component.

This is not a toy. Written in C++20 and compiled directly to WebAssembly without Emscripten, it is a testament to what is possible with modern web technologies and deep systems engineering. Your files persist locally, and the entire system fits under a megabyte.

For senior engineers, this project is a masterclass in system design and optimization. It highlights the power of WebAssembly for complex client-side applications and challenges conventional thinking about where operating environments can exist. You will gain a new perspective on sandboxed environments and resource-efficient architectures.
