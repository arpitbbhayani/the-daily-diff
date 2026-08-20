---
title: Craton Bolt achieves kernel fusion with runtime PTX compilation
source: github
url: https://github.com/craton-co/craton-bolt
date: '2026-08-18'
tags:
- catchup
- cuda-api
- github
- gpu-sql-engine
- jit-compilation
- kernel-fusion
- nvidia-ptx
- rust-programming
section: databases
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
hn_id: '49349785'
comments: https://news.ycombinator.com/item?id=49349785
why_read: This text introduces Craton Bolt, a unique GPU SQL engine written in Rust
  that achieves kernel fusion by compiling queries directly to NVIDIA PTX at runtime.
  Readers will learn about a novel approach to optimizing GPU data processing without
  C++ shims or precompiled libraries.
authors:
- victor-craton
---

Imagine a SQL engine where your queries are not just processed, but surgically optimized and executed directly on a GPU. Craton Bolt does exactly this, compiling SQL strings into fresh NVIDIA PTX kernels at runtime, eliminating the overhead of precompiled libraries or FFI. The entire pipeline, from parse to plan to codegen and launch, is implemented in pure Rust over the raw CUDA driver API. This is a game-changer for database system design. The core innovation is 'kernel fusion via runtime PTX,' which keeps the entire fused expression tree in GPU registers. This contrasts sharply with most GPU dataframe engines that chain precompiled kernels and bounce intermediates through global memory, creating significant bottlenecks. For engineers passionate about database internals and high-performance computing, this project offers a treasure trove of insights into next-generation query execution and system architecture. This is a genuinely deep dive into pushing the boundaries of data processing.
