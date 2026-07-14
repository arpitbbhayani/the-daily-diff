---
title: Dynamic NVIDIA GPU Frequency Scaling Challenges ML Latency Prediction
source: arxiv
url: http://arxiv.org/abs/2607.08307v1
date: '2026-07-09'
tags:
- arxiv
- catchup
- cs.DC
- frequency-scaling
- inter-kernel-dependencies
- latency-prediction
- ml-workloads
- nvidia-gpu
arxiv_id: '2607.08307'
categories: cs.DC
why_read: This work reveals that NVIDIA GPU frequency scaling is dynamically affected
  by recent workload history, challenging the assumption of independent kernel latencies
  in ML prediction. Readers will understand why existing ML latency models can be
  inaccurate and identify promising directions for more precise modeling and optimization.
authors:
- Truong-Thanh Le
- Hoang-Loc La
- Amir Taherkordi
- Frank Eliassen
- Phuong Hoai Ha
- Peiyuan Guan
---

Are your GPU latency predictions for ML workloads accurate? This paper reveals a crucial, often-missed factor: GPU frequency is not constant.

Empirical analysis shows that on lower-performance NVIDIA GPUs, operating frequency is *strongly affected* by the recent workload history, typically within an 80ms window. This dynamic scaling creates inter-kernel dependencies.

This challenges the common assumption that individual GPU kernel latencies are independent, meaning simply summing isolated measurements will lead to inaccurate total execution time estimates. This is critical for optimizing LLM inference and other performance-sensitive AI applications.

Understand GPU dynamic frequency scaling for more accurate ML workload performance models.
