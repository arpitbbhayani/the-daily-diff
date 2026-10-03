---
title: Benchmarking language models on architecture specific GPU kernel optimization
source: hn
url: https://arxiv.org/abs/2608.17379
date: '2026-10-02'
tags:
- attention-kernels
- catchup
- gemm
- gpu-kernel-optimization
- hn
- ptx-assembly
- ptxbench
- supervised-fine-tuning
section: ai
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49939792'
comments: https://news.ycombinator.com/item?id=49939792
why_read: Read this to understand how large language models perform and adapt when
  generating low-level, architecture-specific PTX for GPU kernel optimization.
authors:
- Genghan Zhang
- Yixin Dong
- Chengze Fan
- Zhichen Zeng
- Yueming Yuan
- Shaowei Zhu
- Kunle Olukotun
image: /infographics/13-hn-49939792.jpg
---

Writing high-performance GPU kernels usually requires painstaking manual tuning in low-level PTX assembly. PTXBench introduces a comprehensive benchmark to evaluate whether large language models can automatically generate architecture-specific PTX for workloads like GEMM and attention on NVIDIA H100 and B200 hardware.

The benchmark measures functional correctness, target instruction execution at runtime, and real speedups over optimized vendor libraries. The findings show a clear gap: while modern LLMs can often emit syntactically correct PTX instructions, success rates plummet on complex operations like attention backward passes. Emitting the correct instruction does not guarantee competitive runtime performance.

Fine-tuning Qwen models with repair-conditioned data showed meaningful improvements, but generalization remains difficult. SFT dataset size alone is insufficient; coverage, balance, and the quality of reasoning traces dictate whether models can successfully navigate hardware-specific compiler constraints.

Automating hardware-level kernel optimization remains an open frontier where instruction execution alone does not translate to raw throughput.
