---
title: Writing a self-hosting C17 compiler in literate ARM64 assembly
source: github
url: https://github.com/LiterateDrivenDevelopment/kcc
date: '2026-10-01'
tags:
- arm64-assembly
- catchup
- compiler-design
- cross-compilation
- github
- literate-programming
- self-hosting-compiler
section: engineering
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49926294'
comments: https://news.ycombinator.com/item?id=49926294
why_read: Learn how a complete, self-hosting C17 compiler can be constructed entirely
  in ARM64 assembly using literate programming techniques. It offers a clear, mechanistic
  look into compiler architecture, register allocation, and machine code generation.
authors:
- LiterateDrivenDevelopment
image: /infographics/10-github-49926294.jpg
---

Building a complete C17 compiler written directly in ARM64 assembly from scratch is a massive undertaking, but doing it entirely as a literate program with an LLM collaborator pushes software craft to a new level.

The kcc project compiles C code conforming to the formal C17 standard, performs register allocation, emits native machine code, and cross-compiles to x86-64. It is capable of compiling SQLite, Lua, DOOM, and even booting a Linux kernel. The entire code base is structured as a single thousand-page literate document where every assembly instruction is explained in prose before being generated.

Rather than treating language models as autocomplete tools that dump raw boilerplate into disjointed source files, this approach uses structured prose as the single source of truth. Every assembly module, verification script, and build file is tangled directly from the literate specification.

This architecture shows how combining literate programming with rigorous formal targets enables small engineering teams to build complex, low-level systems with high confidence.

Rigorous specifications and human-readable architecture remain the ultimate multiplier for machine-assisted engineering.
