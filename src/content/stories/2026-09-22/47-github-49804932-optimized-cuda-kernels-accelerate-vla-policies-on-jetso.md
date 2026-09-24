---
title: Optimized CUDA kernels accelerate VLA policies on Jetson AGX Thor
source: github
url: https://github.com/Agents2AgentsAI/vla-edge
date: '2026-09-22'
tags:
- catchup
- cuda-kernels
- github
- jetson-agx-thor
- latency-optimization
- model-deployment
- vla-policies
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49804932'
comments: https://news.ycombinator.com/item?id=49804932
why_read: This resource demonstrates how custom CUDA kernels significantly enhance
  the deployment performance of large vision-language-action models like MolmoAct2
  and ABC-VLA on NVIDIA Jetson AGX Thor. Readers will learn about specific optimization
  strategies and benchmark results for achieving low-latency robot control on edge
  devices.
authors:
- hhuytho
---

Deploying Vision-Language-Action (VLA) models on edge devices like NVIDIA Jetson often hits severe latency walls. This project tackles that head-on with impressive results. By leveraging custom CUDA kernels, it achieves up to 5.39x speedups over PyTorch eager and almost 2x over TensorRT baselines for models like MolmoAct2, ABC-VLA, and 
p0.5.

The team has meticulously documented the end-to-end latency and stage-by-stage results. This is not just a theoretical gain; it is about bringing complex AI agents into real-world, low-latency applications, which is a critical challenge in applied AI.

If you are building AI agents for robotics or any edge computing scenario, understanding these optimization techniques is crucial. You will learn how dedicated kernel development can transform inference performance, making previously impossible real-time applications viable.

This project delivers tangible blueprints for high-performance AI inference at the edge.
