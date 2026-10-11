---
title: Compiling ARM64 Linux ELF libraries directly into native macOS dylibs
source: github
url: https://github.com/kevmo314/machso
date: '2026-10-10'
tags:
- abi-adaptation
- arm64
- binary-translation
- catchup
- dynamic-libraries
- elf
- github
- mach-o
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '50034220'
comments: https://news.ycombinator.com/item?id=50034220
why_read: Understand how machso adapts ARM64 Linux binaries to run natively on macOS
  without source code. You will learn the mechanics of handling system calls, thread-local
  storage, and ABI differences across operating systems.
authors:
- kevmo314
---

Porting closed-source ARM64 Linux shared libraries to macOS usually requires full emulation or running a virtual machine. machso bypasses that overhead entirely by rewriting the ELF binary directly into a native Mach-O dylib.

Rather than translating instructions at runtime, it operates as a static compiler. The tool preserves existing machine code while generating native shims for Linux system calls, thread-local storage access, and Apple-specific architectural quirks like the reserved x18 register. The entire dependency graph is resolved, rewritten, and linked into a standard dylib that macOS can sign and execute natively.

This separation of compilation, native linking, and code signing provides a practical roadmap for cross-platform binary compatibility. You get near-native speed without maintaining a full Linux kernel translation layer.

Understanding ABI translation at this level demystifies the mechanics of modern platform runtimes.
