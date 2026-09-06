---
title: Qwen3.8 27B 4-bit quantization holds quality, 1-bit collapses
source: hn
url: https://quesma.com/blog/qwen38-27b-quantizations-benchmarked/
date: '2026-09-04'
tags:
- benchmarking
- catchup
- gpqa-diamond
- gpu-ram
- hn
- llm-compression
- quantization
- qwen3.8-27b
- terminal-bench
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49562787'
comments: https://news.ycombinator.com/item?id=49562787
why_read: This analysis benchmarks Qwen3.8 27B LLM quantizations, demonstrating that
  4-bit compression retains model quality while 1-bit leads to a severe performance
  collapse. Readers will learn the practical implications of different quantization
  levels for running large language models on consumer hardware.
authors:
- stared
---

Running large language models locally is often a memory nightmare. A new benchmark for Qwen3.8 27B quantizations delivers critical insights for anyone serious about optimizing LLM deployment on consumer hardware.

It turns out that the 17 GB Q4_K_M quantization matches the full BF16 model on agentic coding benchmarks like Terminal-Bench 2.1, comfortably fitting on a 24 GB RTX 4090. This means powerful LLM capabilities can be achieved without breaking the bank or requiring specialized hardware.

However, be warned: pushing compression too far results in a dramatic cliff. The 1-bit quantization performs at random chance on reasoning tasks, making it completely unusable. This is not just a minor degradation, it is total collapse.

The sweet spot is clear: 4-bit quantizations offer an excellent balance of performance and memory efficiency for applied AI scenarios, but exceeding that threshold leads to diminishing, then negative, returns.
