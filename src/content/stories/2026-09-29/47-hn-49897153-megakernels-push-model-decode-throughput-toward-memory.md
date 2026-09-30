---
title: Megakernels push model decode throughput toward memory bandwidth limits
source: hn
url: https://withhopper.com/blog/gemma-tpu-megakernel
date: '2026-09-29'
tags:
- catchup
- decode-throughput
- gpu-inference
- hn
- megakernels
- memory-bandwidth
- moe-models
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49897153'
comments: https://news.ycombinator.com/item?id=49897153
why_read: Read this to understand how megakernels close the gap to hardware memory
  bandwidth limits during inference. You will learn the specific conditions where
  writing custom kernels beats standard serving frameworks for dense and mixture-of-experts
  models.
authors:
- jashwanthp12
---

LLM inference throughput is bounded by memory bandwidth during the decode phase. In theoretical limits, decode speed equals hardware memory bandwidth divided by bytes read per token. When serving models on modern accelerators, generic engines often fall short of this speed of light because kernel launch overheads and extensibility layers fragment memory access.

A megakernel consolidates the entire decode step into a single fused kernel, keeping memory buses saturated throughout execution. In benchmarks running Gemma 4 on TPU v5e hardware with BF16 weights, this architecture achieved 640 tokens per second for a single stream without speculative decoding. The baseline serving framework running on an H100 GPU trailed significantly on smaller mixture of experts architectures.

Megakernels require significant engineering effort to build and maintain, making them practical primarily when default serving engines achieve less than half of hardware capacity. When fine-grained expert routing creates thousands of small kernel launches, fusing decode operations provides substantial latency gains.
