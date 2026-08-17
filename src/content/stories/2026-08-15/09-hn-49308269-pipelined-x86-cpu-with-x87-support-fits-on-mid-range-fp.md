---
title: Pipelined x86 CPU with x87 support fits on mid-range FPGA
source: hn
url: https://nand2mario.github.io/posts/2026/z486/
date: '2026-08-15'
tags:
- '80486'
- catchup
- fpga
- hn
- pipelining
- systemverilog
- x86-cpu
- x87
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 7
hn_id: '49308269'
comments: https://news.ycombinator.com/item?id=49308269
why_read: This article describes the design and performance of z486, an open-source
  486-class x86 CPU on an FPGA. Readers will learn how a practical pipelined x86 CPU
  with x87 support can be implemented on a mid-range FPGA and achieve significant
  performance.
authors:
- matt_d
---

Dive deep into the silicon with z486, an open-source 80486-class pipelined x86 CPU implemented in SystemVerilog for FPGAs. This is not just a recreation; it is a meticulous engineering feat that provides profound insights into fundamental CPU architecture.

The project highlights key design elements such as a pipelined D1/D2 frontend and a hybrid hardwired/microcode execution model for common versus complex instructions. It even integrates an experimental x87 unit. The performance numbers are compelling, achieving roughly 486DX2-66-class performance on workloads like Doom.

For senior engineers passionate about scalable systems and system design, understanding these low-level architectural decisions and their impact on performance is invaluable. This core computer science project illuminates how hardware choices directly translate to software execution speed and efficiency.
