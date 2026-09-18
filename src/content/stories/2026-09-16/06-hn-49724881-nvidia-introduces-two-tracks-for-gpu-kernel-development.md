---
authors:
- Sri Koundinyan
- Melih Elibol
- Jonathan Bentz
comments: https://news.ycombinator.com/item?id=49724881
date: '2026-09-16'
depth_score: 8
hn_id: '49724881'
image: /infographics/06-hn-49724881.jpg
interest_score: 8
novelty_score: 9
section: ai
source: hn
tags:
- catchup
- cuda-rust
- gpu-kernels
- hn
- memory-safety
- rust-compiler
- simt
- tile-based-programming
title: NVIDIA introduces two tracks for GPU kernel development in Rust
url: https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/
utility_score: 8
why_read: This article introduces two distinct Rust frameworks, cuda-oxide and cutile-rs,
  for writing memory-safe GPU kernels on NVIDIA hardware. Readers will learn about
  their technical approaches, stability, and how they simplify GPU programming.
---

Native GPU programming in Rust has finally landed from NVIDIA, offering two robust paths for developers. The cuda-oxide project provides a custom rustc codegen backend, compiling SIMT-style kernels directly to PTX using Pliron IR and LLVM. This brings raw performance potential with Rust's safety guarantees.

Meanwhile, cutile-rs enables tile-based GPU programming on stable Rust, abstracting thread mapping and memory layout through CUDA Tile IR JIT compilation. Both tracks enforce memory safety at compile time, eliminating a major class of bugs common in C++ CUDA development.

This is a significant step forward for developers building high-performance AI and machine learning infrastructure, providing modern language constructs with low-level control and critical safety features. Expect Rust to become a serious contender in the GPU computing landscape.