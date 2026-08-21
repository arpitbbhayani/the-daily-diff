---
title: InstrSem automatically infers semantics of undocumented CPU instructions
source: hn
url: https://roots.ec/publications/hetterich2026instrsem
date: '2026-08-19'
tags:
- automated-analysis
- catchup
- cpu-instruction-set-architecture
- execution-based-analysis
- hn
- instrsem
- instruction-semantics-inference
- undocumented-cpu-instructions
section: systems
interest_score: 8
depth_score: 9
utility_score: 6
novelty_score: 8
hn_id: '49363661'
comments: https://news.ycombinator.com/item?id=49363661
why_read: Read this to understand InstrSem, a novel, automated method for inferring
  the semantics of documented and undocumented CPU instructions. You will learn how
  it uses execution behavior to synthesize mathematical functions and generalize instruction
  fields, applicable across diverse ISAs like RISC and CISC.
authors:
- Lorenz Hetterich
- Fabian Thomas
- Tristan Hornetz
- Michael Schwarz
---

Imagine automatically reverse-engineering CPU instruction sets, even for undocumented commands. A new paper on InstrSem presents an ISA-agnostic, modular, and fully automated approach to inferring instruction semantics solely from execution behavior.

This is not just for security researchers. For senior engineers working on compilers, virtual machines, or deep systems performance, understanding how to systematically derive the precise mathematical functions that explain every state change caused by an instruction is invaluable.

The method involves systematically varying architectural states, synthesizing compact mathematical functions, and then correlating induced behavioral changes with bit positions to generalize from single encodings to full instructions. This is a significant leap in understanding and documenting the fundamental operations of our computing hardware.
