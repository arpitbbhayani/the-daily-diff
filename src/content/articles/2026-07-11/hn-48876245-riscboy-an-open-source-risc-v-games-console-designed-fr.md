---
title: RISCBoy an Open-Source RISC-V Games Console Designed From Scratch
source: hn
url: https://github.com/Wren6991/RISCBoy
date: '2026-07-11'
tags:
- catchup
- cpu-design
- fpga
- graphics-pipeline
- hardware-design
- hn
- ice40-hx8k
- open-source
- pcb-layout
- portable-games-console
- risc-v
- riscboy
- verilog
score: 201
hn_id: '48876245'
comments: https://news.ycombinator.com/item?id=48876245
why_read: Read this to understand the ambitious process of designing a portable RISC-V
  games console entirely from scratch. It details the custom CPU, graphics pipeline,
  and FPGA implementation challenges involved.
authors:
- Wren6991
author: Wren6991
---

Building a complete system from scratch, even a retro game console, offers unparalleled insights into hardware and software co-design. RISCBoy is a stunning example, featuring a custom RISC-V CPU, a raster graphics pipeline, and a PCB layout, all created from the ground up.

This project uses synthesisable Verilog 2005, targeting an iCE40-HX8k FPGA. Fitting a 32-bit games console onto an FPGA with only 7680 logic elements demands extremely careful and efficient design, a true test of system architecture.

It is a deep dive into the guts of how processors communicate with peripherals, how graphics are rendered at a fundamental level, and how embedded systems are truly built. This kind of work demystifies layers of abstraction.

Understanding these first principles is invaluable for any engineer working on complex systems.
