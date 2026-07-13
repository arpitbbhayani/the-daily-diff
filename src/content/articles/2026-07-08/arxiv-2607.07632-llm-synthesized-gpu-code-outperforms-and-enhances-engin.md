---
title: LLM-Synthesized GPU Code Outperforms and Enhances Engineered Engines
source: arxiv
url: http://arxiv.org/abs/2607.07632v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- code-synthesis
- cs.DB
- cuda
- gpu-analytics
- hip
- large-language-models
- performance-optimization
- performance-portability
- query-processing
- sycl
arxiv_id: '2607.07632'
categories: cs.DB
why_read: This analysis rigorously compares synthesized versus engineered GPU query
  processing, demonstrating significant performance gains from LLM-generated code.
  It dissects the sources of these gains and shows how to transfer generalizable optimizations
  to a performance-portable engine.
authors:
- Ivan Donchev Kabadzhov
- Eugenio Marinelli
- Raja Appuswamy
---

The debate is fierce: should query processing be synthesized by LLMs or engineered by humans? On GPUs, LLM-generated code is showing truly staggering performance gains.
A new framework, SHADB, generates optimized CUDA/HIP kernels that approach memory-bandwidth ceilings, outperforming a state-of-the-art JIT-compiled GPU database engine by 7.4 times on SSB SF100.
The paper then brilliantly bridges this gap, integrating generalizable optimizations into SYCLDB, a performance-portable engine. It achieves performance within 1.27 times of the synthesized code while maintaining workload generality.
This signals a major shift in database query optimization, leveraging AI to unlock unprecedented hardware performance and setting a new bar for engineering practices.
