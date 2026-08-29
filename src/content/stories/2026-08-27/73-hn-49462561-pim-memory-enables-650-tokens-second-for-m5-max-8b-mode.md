---
title: PIM memory enables 650 tokens/second for M5 Max 8B model
source: hn
url: https://ben3d.ca/blog/m5-max-samsung-lpddr5-pim-650-tokens-per-second
date: '2026-08-27'
tags:
- catchup
- hn
- llm-inference
- llm-parallelism
- lpddr5x-pim
- m5-max
- memory-bandwidth
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49462561'
comments: https://news.ycombinator.com/item?id=49462561
why_read: Read this to understand how in-memory processing units (PIM) could dramatically
  boost large language model inference performance on high-end hardware like the Apple
  M5 Max. You will learn about the hardware specifications and parallelism strategies
  required to achieve high token generation rates.
authors:
- bhouston
---

The future of LLM inference speed might reside right inside our memory modules. Imagine an Apple M5 Max, typically a powerful chip, but now paired with Samsung's LPDDR5X-PIM memory. This is not just faster memory; it integrates matrix multiplication units directly beside the DRAM banks.

A thought experiment reveals astonishing potential: this setup could generate an incredible 650 tokens per second for an 8B LLM. The key is exploiting the 4.9 TB/s internal bandwidth and 9.6 TFLOPS of FP8 compute power hiding within the memory packages themselves, bypassing the traditional SoC pin bandwidth limits.

This analysis dissects how different parallelism strategies, like replication or tensor parallelism, could fully leverage these in-memory compute capabilities. For engineers designing future LLM infrastructure, understanding these hardware-software co-design implications is crucial for breaking current performance ceilings.
