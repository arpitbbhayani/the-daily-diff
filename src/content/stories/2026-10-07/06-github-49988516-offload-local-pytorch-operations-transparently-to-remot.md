---
title: Offload local PyTorch operations transparently to remote GPUs
source: github
url: https://github.com/ymcrcat/rgpu
date: '2026-10-07'
tags:
- catchup
- cuda-shim
- github
- pytorch
- remote-gpu
- tensor-operations
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49988516'
comments: https://news.ycombinator.com/item?id=49988516
why_read: Read this to learn how to execute PyTorch workloads on remote NVIDIA hardware
  while keeping application code on a local client without CUDA.
authors:
- ymcrcat
image: /infographics/06-github-49988516.jpg
---

Running local PyTorch code against remote GPUs usually requires syncing scripts over SSH or maintaining duplicate environments on a remote box.

Rgpu tackles this problem by implementing a custom PyTorch device that keeps Python execution on your local machine while proxying tensor storage and CUDA kernel invocations over TCP. The client maintains normal PyTorch semantics, while the actual allocations and matrix multiplications execute on a dedicated remote worker.

The implementation provides two distinct operational modes. The first mode exposes an explicit rgpu PyTorch device backend, allowing lightweight script modifications without system-level alterations. The second mode uses a CUDA shim that intercepts libcuda, cuBLAS, and cuDNN calls at the dynamic linker boundary, which allows existing Linux binaries and stock PyTorch builds to run unmodified across the wire.

For engineers developing from a MacBook without dedicated NVIDIA hardware, this architecture removes the friction of remote container setups while avoiding local emulation overhead.

Decoupling the execution runtime from physical accelerator hardware turns your local Python shell into a thin control plane.
