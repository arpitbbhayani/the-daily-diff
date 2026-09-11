---
title: CUDA Rust offers two tracks for writing GPU kernels
source: hn
url: https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/
date: '2026-09-09'
tags:
- catchup
- cuda-oxide
- cuda-rust
- cutile-rs
- gpu-kernels
- hn
- memory-safety
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49626073'
comments: https://news.ycombinator.com/item?id=49626073
why_read: This article introduces two new frameworks, cuda-oxide and cutile-rs, for
  writing GPU kernels in Rust. Readers will learn about their distinct approaches,
  advantages like compile-time memory safety, and how they integrate into the NVIDIA
  ecosystem.
authors:
- Sri Koundinyan
- Melih Elibol
- Jonathan Bentz
---

The world of high-performance computing, especially for AI, is getting a game-changing addition: official NVIDIA-supported Rust for GPU kernels. Forget the friction of FFI or the limitations of wrappers; you can now write native CUDA kernels in Rust with two distinct tracks.

One track, `cuda-oxide`, provides a custom `rustc` codegen backend, compiling SIMT-style kernels directly to PTX. The other, `cutile-rs`, targets stable Rust for tile-based GPU programming, with the compiler intelligently handling thread mapping and memory layout. Both enforce critical memory safety at compile time.

This is not just academic; `cutile-rs` is already powering parts of HuggingFace's Grout inference engine and `mistral.rs`. This means safer, potentially faster, and more robust development for AI infrastructure, from LLMs to other GPU-accelerated workloads.

Rust on the GPU is here, and it is ready for production.
