---
authors:
- tosh
comments: https://news.ycombinator.com/item?id=49060871
date: '2026-07-26'
depth_score: 9
hn_id: '49060871'
image: /infographics/05-hn-49060871.jpg
interest_score: 9
novelty_score: 10
section: engineering
source: hn
tags:
- binary-formats
- bios-boot
- c-language
- catchup
- compiler-configuration
- cross-platform-development
- hn
- portable-executable
title: Achieving cross-platform native code portability with a unified executable
  format
url: http://justine.lol/ape.html
utility_score: 8
why_read: This article introduces a method to create a single executable that runs
  across Unix, Windows, MacOS, and BSDs, and can even boot from BIOS. It details how
  to achieve build-once run-anywhere for C applications, offering a path to high-performance
  native code without typical platform constraints.
---

This project redefines what "portable executable" means, allowing a single C/C++ binary to run on Linux, macOS, Windows, FreeBSD, OpenBSD, NetBSD, and even boot from the BIOS. This is not merely cross-compilation; it is a unified binary format that the various operating systems can interpret.

The core idea leverages the quirks of different binary loaders (ELF, Mach-O, PE) and even the legacy BIOS boot process, synthesizing them into a single file. This eliminates significant DevOps toil for CLI tools, offering high-performance native code with the deployment simplicity of web apps.

Engineers building system-level tools or command-line utilities will find immense value in understanding this approach, which simplifies distribution and broadens reach without virtual machines or complex build matrixes.