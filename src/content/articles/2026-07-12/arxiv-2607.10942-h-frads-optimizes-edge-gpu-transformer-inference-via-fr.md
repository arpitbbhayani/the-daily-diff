---
title: H-FraDS Optimizes Edge GPU Transformer Inference via Frame Scheduling
source: arxiv
url: http://arxiv.org/abs/2607.10942v1
date: '2026-07-12'
tags:
- arxiv
- autonomous-vehicles
- catchup
- cs.AI
- cs.AR
- deep-learning-accelerator
- edge-gpu
- frame-scheduling
- h-frads
- heterogeneous-computing
- model-adaptation
- power-efficiency
- real-time-performance
- throughput-optimization
- transformer-inference
arxiv_id: '2607.10942'
categories: cs.AR, cs.AI
why_read: This paper introduces Heterogeneous Frame Dispatch Scheduling (H-FraDS),
  a method to optimize transformer inference on heterogeneous edge GPUs by routing
  frames across GPU and DLA cores. You will learn how H-FraDS and model adaptation
  achieve significant speedup and power efficiency for real-time physical AI applications
  like autonomous driving.
authors:
- Ashiyana Abdul Majeed
- Mahmoud Meribout
- Neethu Joseph
- Abel Kidane Haile
- Mohammad Abdullah Al Faruque
---

Deploying transformer-based perception models on edge devices like autonomous vehicles faces stringent latency and energy constraints, often hampered by underutilized hardware. This paper introduces a solution: H-FraDS.

H-FraDS, or Heterogeneous Frame Dispatch Scheduling, is a hardware-aware frame scheduling methodology for NVIDIA edge GPUs. It intelligently routes frames across the GPU and dual deep learning accelerator (DLA) cores, maximizing utilization.

To enable this, the incompatible transformer components are adapted for DLA execution through tensor reshaping and function approximations, maintaining a 92% F1 score with only a 2% reduction. This is a critical detail for maintaining model accuracy while optimizing for hardware.

The results are impressive: H-FraDS Balanced Dispatch achieves 125.93 FPS, a 2.36x speedup over standalone adapted-DLA execution, while delivering 4.0 FPS/W. This ensures real-time operation at 30 FPS, directly addressing a core challenge in edge AI system design. Optimizing hardware-software interaction is key for impactful AI deployment.
