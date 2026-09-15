---
title: Reproducible Stack Runs CUDA Applications on AMD GPUs
source: github
url: https://github.com/Speedstu/CUDA-for-AMD-Windows
date: '2026-09-13'
tags:
- amd-gpu
- catchup
- cuda
- github
- hip
- rocm
- windows-compatibility
- zluda
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49684356'
comments: https://news.ycombinator.com/item?id=49684356
why_read: This resource provides a reproducible method to run CUDA-targeted Windows
  applications on AMD GPUs using ZLUDA and ROCm/HIP. Readers will learn how to achieve
  cross-vendor GPU compatibility for compute workloads.
authors:
- Speedstu
---

Running CUDA applications on AMD GPUs on Windows used to be a significant headache, often requiring complex setups or limiting hardware choices. This GitHub project changes the game by offering a reproducible, validated stack for ZLUDA + ROCm/HIP.

It is not just a theoretical concept; the project has been tested with a LibTorch + cu118 stack on the AMD Radeon RX 9060 XT (gfx1200), successfully passing checks for cuBLAS, cuSPARSE, and even running a 2.2-million-parameter PPO network.

For any senior engineer dealing with AI/ML infrastructure and mixed hardware environments, this project is a critical enabler. It provides a concrete path to leverage AMD hardware for CUDA-based compute, significantly expanding your options and potentially reducing infrastructure costs.
