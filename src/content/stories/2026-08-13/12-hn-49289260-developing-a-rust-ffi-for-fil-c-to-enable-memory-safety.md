---
title: Developing a Rust FFI for Fil-C to enable memory safety
source: hn
url: https://domenkozar.com/2026/08/13/i-want-extern-fil-c/
date: '2026-08-13'
tags:
- abi
- c-plus-plus
- catchup
- cross-compilation
- ffi
- fil-c
- hn
- memory-safety
- nix
- rust
section: engineering
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49289260'
comments: https://news.ycombinator.com/item?id=49289260
why_read: This article proposes a way to create a safer Rust FFI by integrating with
  Fil-C. Readers will learn about the challenges of C FFI and how Fil-C can enhance
  memory safety for C/C++ code.
authors:
- "Domen Ko\u017Ear"
---

Rust's promise of memory safety often hits a wall when interfacing with C code through FFI, forcing developers to cross an unsafe boundary. A new proposal, `extern "fil-C"`, aims to solve this by creating an ABI specifically designed to work with Fil-C.

Fil-C is a project that recompiles C and C++ to include capabilities and runtime memory checks, preventing the very exploits Rust aims to avoid. The challenge lies in building a bridge that maintains Fil-C's guarantees, rather than simply linking to "Yolo-C" as current `extern "C"` does.

This is not merely an improvement to `bindgen`; it is a fundamental shift in how Rust could safely consume legacy C code. It ensures memory safety violations would panic, not become exploits, providing a robust solution for engineers building high-assurance systems where C interop is unavoidable.
