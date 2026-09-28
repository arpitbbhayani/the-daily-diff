---
title: Building an alternate history IBM PC running native ARM DOS
source: github
url: https://github.com/kdkd/armdos
date: '2026-09-27'
tags:
- arm-architecture
- catchup
- dos
- github
- jit-compiler
- retrocomputing
- x86-emulation
section: systems
interest_score: 8
depth_score: 9
utility_score: 6
novelty_score: 9
hn_id: '49869768'
comments: https://news.ycombinator.com/item?id=49869768
why_read: Explore how an alternate-history IBM PC environment was built to run native
  ARM DOS applications alongside dynamic x86 translation for legacy software compatibility.
authors:
- Kevin Day
---

Building dynamic binary translators is one of the most demanding problems in systems programming. ARM-DOS explores an alternate history where the 1988 IBM PC adopted ARM processors instead of Intel, pairing an emulated ARM926 hardware environment with a full native DOS port.

Rather than stopping at native ARM execution for the BIOS and DOS kernel, the project implements a built-in Rosetta-like JIT translator named ELBOW. This translation layer dynamically converts unmodified 16-bit and 32-bit x86 binaries into ARM machine code at runtime, successfully executing complex historical workloads like Second Reality and DOOM alongside native toolchains.

The repository provides an exhaustive reference for low-level architecture, encompassing interrupt handling, VGA register emulation, timer management, and real-time instruction decoding.

Examining how dynamic translation bridges archaic instruction set quirks offers valuable insights for modern runtime and virtual machine designers.
