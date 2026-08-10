---
title: Benchmarking Gram's AVX2-accelerated IVFPQ vector search engine
source: github
url: https://github.com/sverp/gram
date: '2026-08-08'
tags:
- catchup
- centroid-partitioning
- github
- ivfpq
- performance-benchmarking
- product-quantization
- pybind11
- simd-avx2
- vector-database
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49222177'
comments: https://news.ycombinator.com/item?id=49222177
why_read: This document provides insights into the design and performance of Gram,
  a SIMD AVX2-accelerated IVFPQ vector search engine. It details benchmarking results
  for different coarse centroid partitioning strategies and quantization subspace
  sizes, offering a mechanistic understanding of performance trade-offs in vector
  databases.
authors:
- sverp
---

Building a vector search engine from scratch in C++ and optimizing it with AVX2 SIMD instructions is a serious feat, and Gram delivers just that. This project dives deep into Inverted File Product Quantization (IVFPQ), a crucial algorithm for high-performance approximate nearest neighbor search.

The project is not just theoretical; it includes benchmarks showing impressive latency and throughput figures for different configurations. For engineers tackling RAG or custom LLM infrastructure, understanding these low-level optimizations is critical for squeezing out every bit of performance.

If you are wondering how vector databases actually work under the hood and how to achieve competitive speed, this codebase provides a direct, actionable blueprint. It demonstrates the real-world impact of careful algorithm selection and hardware-specific optimizations.
