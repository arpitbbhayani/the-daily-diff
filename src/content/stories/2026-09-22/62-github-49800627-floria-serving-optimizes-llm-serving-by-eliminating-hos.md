---
title: Floria-serving optimizes LLM serving by eliminating host CPU overhead
source: github
url: https://github.com/cortexLab011/floria-serving
date: '2026-09-22'
tags:
- benchmarking
- catchup
- continuous-batching
- cpu-overhead-reduction
- github
- kv-cache
- llm-serving
- lock-free-scheduling
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49800627'
comments: https://news.ycombinator.com/item?id=49800627
why_read: This explains how a native, lock-free continuous batching scheduler and
  KV-block table manager eliminates host CPU overhead in LLM serving pipelines. Readers
  will learn about techniques for optimizing LLM inference and can reproduce performance
  benchmarks.
authors:
- cortexlab1
---

Your GPU is likely starving when serving LLMs, even with continuous batching. The bottleneck is often not the accelerator itself, but the host CPU's ability to dispatch tokens and manage KV-cache blocks efficiently.

Floria-serving tackles this with a native, lock-free continuous batching scheduler and KV-block table manager. It achieves an impressive 191,000 steps per second on a single vCPU, demonstrating how a finely tuned host dispatcher can unlock significant GPU throughput. This is not just about throughput; it is about eliminating costly stalls.

If you are building LLM inference pipelines, this is a deep dive into solving a critical performance problem you probably did not know you had. The approach shows that optimizing the data plane between host and device is crucial for real-world LLM serving efficiency.
