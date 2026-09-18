---
title: NVIDIA Introduces Two Paths for Rust GPU Kernel Development
source: hn
url: https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/
date: '2026-09-16'
tags:
- catchup
- cuda-oxide
- cuda-rust
- cutile-rs
- gpu-kernels
- hn
- memory-safety
- simt-programming
- tile-programming
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49732159'
comments: https://news.ycombinator.com/item?id=49732159
why_read: This article introduces two distinct frameworks, cuda-oxide and cutile-rs,
  for writing GPU kernels using Rust, detailing their technical approaches, memory
  safety features, and ecosystem integration. Readers will learn about the benefits
  and trade-offs of each method for GPU programming in Rust.
authors:
- Sri Koundinyan
- Melih Elibol
- Jonathan Bentz
---

NVIDIA is pushing Rust into GPU programming with two distinct tracks: `cuda-oxide` and `cutile-rs`. This is not just an experimental wrapper; it targets deep integration for high-performance, memory-safe GPU kernel development.

`cuda-oxide` provides a custom `rustc` codegen backend that compiles SIMT-style kernels directly to PTX, using Pliron IR. It enforces memory safety via DisjointSlice. `cutile-rs`, on the other hand, enables Tile-based GPU programming in stable Rust, with the compiler handling thread mapping and memory layout, and is already used in production by HuggingFace and Mistral.

This means Rust developers can finally tap into CUDA's power with compile-time memory safety, tackling the complexity of GPU programming without sacrificing performance or robustness. It is a significant leap for LLM and applied AI infrastructure, promising more reliable and efficient systems.
