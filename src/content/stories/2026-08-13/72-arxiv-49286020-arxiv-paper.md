---
arxiv_id: '49286020'
categories: ''
date: '2026-08-13'
depth_score: 9
image: /infographics/72-arxiv-49286020.jpg
interest_score: 8
novelty_score: 8
section: ai
source: arxiv
tags:
- arxiv
- catchup
title: ArXiv Paper
url: https://arxiv.org/abs/49286020
utility_score: 8
why_read: You will learn critical, non-obvious details about INT8 support on NVIDIA
  Blackwell Ultra GPUs, directly impacting performance and cost for LLM serving infrastructure,
  enabling informed hardware and software choices.
---

NVIDIA's Blackwell Ultra (B300) spec sheets suggest a 30:1 FP8 to INT8 tensor-core throughput ratio, a significant deprioritization compared to its predecessors. However, an ISA- and source-level audit reveals something far more critical: a near-total withdrawal of practical INT8 support across the stack.

The paper meticulously traces this issue from the PTX ISA, which never exposes the fifth-generation tensor-core integer path, through CUTLASS, which explicitly skips INT8 UMMA generation for Blackwell. Even major LLM serving engines like vLLM and SGLang effectively have no INT8 GEMM for B300, leading to runtime errors or missing support.

This finding is paramount for anyone designing LLM infrastructure. It means relying on quoted INT8 performance for Blackwell for LLM inference could lead to significant and unexpected performance bottlenecks and cost overruns. Hardware specifications are not always the full story.

Always audit the practical implementation, not just the marketing claims.