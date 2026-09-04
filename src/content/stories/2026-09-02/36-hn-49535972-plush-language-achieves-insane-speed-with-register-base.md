---
title: Plush Language Achieves Insane Speed with Register-Based Interpreter
source: hn
url: https://pointersgonewild.com/2026-09-02-plushs-new-register-based-interpreter/
date: '2026-09-02'
tags:
- catchup
- cpu-pipeline-stalls
- dispatch-overhead
- hn
- interpreter-design
- performance-optimization
- plush-language
- register-based-interpreter
- stack-based-interpreter
section: engineering
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49535972'
comments: https://news.ycombinator.com/item?id=49535972
why_read: This article explains how switching to a register-based interpreter design
  dramatically improved the performance of the Plush programming language. Readers
  will learn about the inefficiencies of stack-based interpreters, dispatch overhead,
  and CPU pipeline stalls.
authors:
- maxime_cb
---

Optimizing language interpreters involves fascinating low-level systems engineering. A recent blog post details how the Plush programming language achieved "insanely fast" performance by moving from a stack-based to a register-based interpreter, much like Lua.

The key insight? Stack-based bytecode often requires more instructions for the same work, increasing interpreter dispatch overhead. This leads to more CPU pipeline stalls due to frequent branch mispredictions. A register-based design allows for more compact and predictable instruction streams.

Implementing this in Rust, the Plush team not only reduced instruction count but also dramatically improved CPU cache utilization and prediction accuracy. The result is a substantial speedup, demonstrating that architectural choices at the VM level profoundly impact runtime performance.

This is a masterclass in how understanding CPU internals can lead to breakthrough optimizations in software.
