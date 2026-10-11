---
title: NVFP4 outperforms MXFP4 in low-batch LLM decode benchmarks
source: hn
url: https://cezarcocu.com/blog/nvfp4-vs-mxfp4-decode-bench/
date: '2026-10-10'
tags:
- b200
- catchup
- gemm
- hn
- llm-decode
- mxfp4
- nvfp4
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50028714'
comments: https://news.ycombinator.com/item?id=50028714
why_read: Read this to understand why NVFP4 provides faster decode speeds and better
  evaluation loss than MXFP4 on B200 GPUs. It offers practical insights into low-batch
  inference performance beyond isolated matrix multiplication benchmarks.
authors:
- Cezar Cocu
---

Running production inference on Nvidia Blackwell hardware requires choosing between competing FP4 quantization schemes. In theory, MXFP4 should win memory-bandwidth-bound decode workloads because its microscopic scale factor overhead yields 4.25 bits per parameter compared to 4.5 bits for NVFP4.

Empirical testing on a B200 GPU using vLLM and Qwen3-32B reveals the exact opposite outcome. NVFP4 achieves up to 8 percent faster token generation during the decode phase at low batch sizes. Furthermore, quantizing directly from BF16 demonstrates that NVFP4 preserves model evaluation accuracy significantly better than MXFP4 due to its two-level scaling design.

The throughput gap vanishes at larger batch sizes, but not because of memory bandwidth limits. Compute utilization rises quickly, and hardware tensor core execution paths favor NVFP4 tile layouts and alignment.

Engineers serving dense models on modern hardware should default to NVFP4 over MXFP4 for both latency-sensitive decodes and perplexity retention. Theoretical bit packing does not matter when hardware execution units disagree.
