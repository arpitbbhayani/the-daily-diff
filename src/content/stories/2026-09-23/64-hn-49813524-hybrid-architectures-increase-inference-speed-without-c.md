---
title: Hybrid architectures increase inference speed without compromising model accuracy
source: hn
url: https://research.nvidia.com/labs/adlr/nemotronh/
date: '2026-09-23'
tags:
- catchup
- fp8-pre-training
- hn
- hybrid-mamba-transformer
- inference-efficiency
- model-distillation
- state-space-models
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49813524'
comments: https://news.ycombinator.com/item?id=49813524
why_read: Read this to understand how hybrid Mamba-Transformer architectures drastically
  improve inference throughput without sacrificing model performance. You will learn
  about large-scale FP8 pre-training and practical compression techniques for consumer
  hardware.
authors:
- NVIDIA ADLR
---

NVIDIA just introduced Nemotron-H, an open family of hybrid Mamba-Transformer architectures spanning 8B to 56B parameters. The core goal is attacking inference cost, which has become the primary bottleneck in reasoning-heavy workloads.

Pure Transformers face severe quadratic scaling and memory bandwidth pressures at long sequence lengths. By interleaving Mamba state-space layers with standard attention blocks, Nemotron-H delivers up to three times faster inference than equivalent models like Llama 3.1 or Qwen 2.5 without degrading downstream accuracy.

The 56B parameter base model was pre-trained on 20 trillion tokens in FP8 using per-tensor scaling across 6,144 H100 GPUs. The engineering team then distilled this into a 47B checkpoint using only 63 billion tokens. When running in FP4 precision, this allows a 1-million-token context window to fit entirely on a single consumer-grade RTX 5090 GPU.

Hybrid SSM-Transformer designs provide a practical path to sustainable long-context inference at scale.
