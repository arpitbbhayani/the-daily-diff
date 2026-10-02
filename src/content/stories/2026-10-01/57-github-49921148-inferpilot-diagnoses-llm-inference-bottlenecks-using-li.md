---
title: InferPilot diagnoses LLM inference bottlenecks using live Prometheus metrics
source: github
url: https://github.com/poojithdevan4D/InferPilot
date: '2026-10-01'
tags:
- catchup
- github
- kv-cache
- llm-inference
- performance-optimization
- prometheus-metrics
- vllm
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49921148'
comments: https://news.ycombinator.com/item?id=49921148
why_read: Understand how to pinpoint real bottlenecks in vLLM deployments directly
  from runtime metrics rather than misleading GPU utilization numbers. Learn how to
  verify whether optimizations like FP8 KV caching will actually improve throughput
  before deploying config changes.
authors:
- poojithdevan4D
---

Optimizing LLM inference often feels like trial and error. Engineers frequently switch on fp8 KV cache quantization expecting major memory savings, only to find zero throughput improvement or worse latency.

InferPilot solves this by reading live Prometheus metrics directly from a running vLLM instance. Instead of guessing based on crude GPU utilization numbers, it evaluates whether your system is truly KV-cache bound or suffering from sequence preemption before recommending changes.

Diagnosing inference bottlenecks from empirical execution evidence prevents premature configuration churn and keeps production serving clusters efficient.
