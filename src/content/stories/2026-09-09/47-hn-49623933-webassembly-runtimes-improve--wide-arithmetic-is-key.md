---
title: WebAssembly Runtimes Improve, Wide Arithmetic is Key
source: hn
url: https://00f.net/2026/06/23/webassembly-runtimes-2026/
date: '2026-09-09'
tags:
- benchmarks
- catchup
- hn
- libsodium
- simd128
- wamr
- wasmer
- wasmtime
- wavm
- webassembly
- wide-arithmetic-instructions
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49623933'
comments: https://news.ycombinator.com/item?id=49623933
why_read: Readers will learn about the current performance state of various WebAssembly
  runtimes, how they have improved over time, and the significant impact of new WebAssembly
  instructions like wide_arithmetic on cryptographic workloads.
authors:
- Frank DENIS
---

WebAssembly runtime performance is not just improving, it is evolving with significant architectural implications. Recent benchmarks reveal `wasmer` as a top performer, closely followed by `WAVM`, `WAMR`, and `Wasmtime`, with `WAVM` showing impressive optimization capabilities from baseline WASM.

Crucially, the new `wide_arithmetic` and `simd128` instructions are a game-changer for crypto workloads, yielding substantial speedups where runtimes support them. This is not just theoretical; these features allow WASM to close the gap with native code for specific, compute-intensive tasks.

For any senior engineer considering WebAssembly for backend services, edge computing, or performance-critical modules, understanding these benchmarks and feature impacts is essential. It provides the data needed to make informed decisions about runtime selection and compilation targets for optimal performance.
