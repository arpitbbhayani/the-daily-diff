---
title: A formal C17 compiler written entirely in ARM64 assembly
source: github
url: https://github.com/LiterateDrivenDevelopment/kcc
date: '2026-10-06'
tags:
- arm64-assembly
- c17-compiler
- catchup
- cross-compilation
- github
- literate-programming
- x86-64
section: engineering
is_news: false
interest_score: 8
depth_score: 9
utility_score: 6
novelty_score: 9
hn_id: '49981314'
comments: https://news.ycombinator.com/item?id=49981314
why_read: Explore a self-hosting C17 compiler implemented entirely in ARM64 assembly
  through literate programming. You will see how an entire low-level compiler can
  be structured, explained, and verified within an executable book.
authors:
- LiterateDrivenDevelopment
---

Building a production-grade compiler from scratch is already an exceptional engineering feat, but writing an entire C17 compiler directly in raw ARM64 assembly as a literate program takes technical craftsmanship to another level.

kcc demonstrates this paradigm using a metalanguage where every assembly instruction and register allocation choice is formally explained in prose before being tangled into machine code. The resulting 1,000-page literate document compiles itself byte-for-byte, cross-compiles to x86-64, and reliably builds heavy real-world software like SQLite, Lua, and the Linux kernel.

Beyond the novelty of LLM-assisted assembly authoring, the project provides a masterclass in clean compiler architecture, register allocation strategies, and rigorous verification techniques.

For systems engineers interested in compiler internals, reading through this implementation offers rare, granular insight into end-to-end native code generation.
