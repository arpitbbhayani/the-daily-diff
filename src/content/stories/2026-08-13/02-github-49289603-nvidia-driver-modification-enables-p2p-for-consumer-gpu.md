---
title: NVIDIA Driver Modification Enables P2P for Consumer GPUs
source: github
url: https://github.com/aikitoria/open-gpu-kernel-modules
date: '2026-08-13'
tags:
- catchup
- dma
- github
- gpu-drivers
- iommu
- kernel-modules
- nvidia-gpu
- nvlink
- p2p-communication
- pcie-bar1
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49289603'
comments: https://news.ycombinator.com/item?id=49289603
why_read: This text details a method to enable peer-to-peer communication on NVIDIA
  consumer GPUs by modifying kernel modules. It explains the underlying mechanisms
  like PCIe BAR1 and DMA, and highlights critical IOMMU configurations for successful
  implementation.
authors:
- jacquesm
---

Struggling with multi-GPU performance on your consumer Nvidia cards for AI workloads? A new open-source project reveals how to enable Peer-to-Peer (P2P) PCI transfers on RTX 3090, 4090, and 5090 GPUs. This is huge for optimizing LLM infrastructure.

It works by leveraging BAR1 P2P where NVLink is unavailable, allowing direct memory access (DMA) between GPUs. This bypasses the CPU and main system memory, dramatically reducing latency and increasing bandwidth for inter-GPU communication.

This project offers a highly technical yet practical solution for a common bottleneck in cost-effective distributed AI training and inference. You gain significant performance boosts by understanding and implementing these low-level system optimizations.
