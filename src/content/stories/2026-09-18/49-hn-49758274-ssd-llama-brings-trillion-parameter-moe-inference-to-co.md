---
title: SSD-LLaMA brings trillion-parameter MoE inference to consumer PCs
source: hn
url: https://arxiv.org/abs/2609.18110
date: '2026-09-18'
tags:
- catchup
- consumer-hardware
- cpu-gpu-hybrid-execution
- hn
- large-language-models
- local-inference
- mixture-of-experts
- ssd-io
- ssd-llama
- storage-hierarchy
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49758274'
comments: https://news.ycombinator.com/item?id=49758274
why_read: Read this to understand how SSD-LLaMA enables trillion-parameter Mixture-of-Experts
  models to run efficiently on consumer PCs. You will learn about its innovative SSD-native
  inference system, optimized I/O pipeline, and three-tier storage hierarchy.
authors:
- Fangzhou Liang
- Yibin Shen
- Jianmin Hu
- Jiayang Xu
- Hanchi Gao
- Minxian Xu
- Zili Meng
---

Running trillion-parameter Mixture-of-Experts (MoE) models locally has been a dream for many, but `SSD-LLaMA` makes it a tangible reality even on a consumer PC. This system tackles the massive memory footprint of MoE models by innovatively leveraging SSDs for expert storage.

The core breakthrough is an `SSD-native` inference system that coordinates SSD, RAM, and VRAM in a dynamic three-tier storage hierarchy. It features an optimized SSD I/O pipeline for expert delivery and a balanced CPU-GPU hybrid execution, ensuring that every selected expert is loaded without pruning or substitution. This means full model capacity, not a truncated version.

The results are striking: `SSD-LLaMA` achieves over 1 token/s for trillion-parameter models with just a single RTX 5090 and 32GB of RAM. It delivers 1.52-4.19x faster prefill rates and a staggering 2.10-15.58x faster decode rates compared to baselines. This is a game-changer for democratizing access to powerful LLMs for local inference.

This paper offers a practical blueprint for overcoming severe hardware constraints in LLM infrastructure.
