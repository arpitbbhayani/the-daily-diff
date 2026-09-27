---
title: TPU megakernels boost LLM decode throughput past GPU baselines
source: hn
url: https://inferact.ai/blog/tpu-megakernels
date: '2026-09-24'
tags:
- catchup
- decode-throughput
- hn
- memory-bandwidth
- speculative-decoding
- tpu-megakernels
- vmem
- weight-prefetching
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49826989'
comments: https://news.ycombinator.com/item?id=49826989
why_read: Understand how TPU megakernels saturate theoretical memory bandwidth to
  substantially outperform GPU decode speeds. It details the architectural mechanisms
  behind large on-chip memory utilization and cross-layer weight prefetching.
authors:
- George Novack
- Xuting Liu
- Jeff Ma
- Woosuk Kwon
---

LLM decode throughput is fundamentally constrained by memory bandwidth rather than raw compute FLOPS. Moving weights from high bandwidth memory into fast on-chip registers dominates generation latency.

Inferact showed that Google TPU v7 can outpace NVIDIA GB200 GPUs during LLM decoding. Their open-source TPU megakernel hits 709 tokens per second on Kimi K3 with speculative decoding, compared to 452 tokens per second on GB200 systems.

The key architectural advantage lies in how the TPU organizes on-chip vector memory (VMEM). By combining a sequential execution model with explicit asynchronous pipelines, the kernel continuously prefetches weights across layer boundaries. This keeps execution units saturated and extracts maximum theoretical bandwidth from memory.

Optimizing for chip-specific memory hierarchies yields substantial efficiency gains over standard GPU execution paradigms.

Hardware-aware kernel fusion continues to redefine the economics of production LLM serving.
