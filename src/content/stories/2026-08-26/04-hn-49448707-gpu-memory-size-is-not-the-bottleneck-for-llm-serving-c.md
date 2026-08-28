---
authors:
- Manas Pathak
comments: https://news.ycombinator.com/item?id=49448707
date: '2026-08-26'
depth_score: 9
hn_id: '49448707'
image: /infographics/04-hn-49448707.jpg
interest_score: 9
novelty_score: 8
section: ai
source: hn
tags:
- bottleneck
- catchup
- gpu-memory
- hn
- llm-inference
- self-hosting
- serving-capacity
title: GPU memory size is not the bottleneck for LLM serving capacity
url: https://mapathak-commits.github.io/inference-wall/articles/part-1/
utility_score: 9
why_read: This article challenges the common intuition that LLM serving capacity is
  limited by GPU memory. Readers will learn why memory fitting is not the bottleneck
  and how to identify the true performance limitations.
---

Your intuition about LLM inference throughput might be wildly off. A recent empirical study shows a 8.6 GB Qwen3.5-4B model on a 23 GB A10G GPU saturating at just 7 requests per second, despite using only one-third of the memory. Memory fit alone is a terrible predictor of actual performance.

The critical insight is that memory was never the bottleneck. Instead, the real constraints often lie in less obvious areas like KV cache management, prefill, or decode operations. Understanding these deeper issues requires moving beyond simple memory checks and into rigorous profiling.

This article provides a masterclass in diagnosing LLM performance. It teaches you how to interpret latency curves and, crucially, how to use profiler traces to pinpoint exactly where the GPU spends its time, enabling you to identify and address the true bottlenecks in your LLM infrastructure. This is invaluable for anyone deploying or scaling applied AI systems.