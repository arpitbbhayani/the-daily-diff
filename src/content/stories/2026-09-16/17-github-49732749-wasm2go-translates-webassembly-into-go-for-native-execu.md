---
title: Wasm2go translates WebAssembly into Go for native execution
source: github
url: https://github.com/goccy/wasm2go
date: '2026-09-16'
tags:
- aot-compiler
- catchup
- github
- go
- native-execution
- ssa-based-register-allocator
- webassembly
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49732749'
comments: https://news.ycombinator.com/item?id=49732749
why_read: This describes how wasm2go enables native execution of WebAssembly by compiling
  it directly to Go source code. Readers will understand its utility for embedding
  WASM-compiled libraries into Go applications, bypassing traditional WASM runtime
  overhead.
authors:
- goccy
---

Integrating WebAssembly into Go applications often introduces runtime overhead, but goccy/wasm2go offers a compelling solution.

This ahead-of-time compiler translates WASM binaries directly into standalone Go source code, complete with architecture-specific Plan9 Assembly. This means your WASM-compiled libraries run natively, avoiding the startup and memory costs of an embedded WASM engine.

The project details an SSA-based register allocator, block-local register allocation, and cross-block stack management, ensuring high performance. It also supports dual-arch output for AMD64 and ARM64, with a pure-Go fallback, all while maintaining a consistent Go API. This is a significant leap for high-performance Go-WASM interoperability.
