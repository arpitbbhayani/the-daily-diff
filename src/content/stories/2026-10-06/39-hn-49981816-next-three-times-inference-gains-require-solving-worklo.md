---
title: Next three times inference gains require solving workload placement
source: hn
url: https://www.muna.ai/blog/colocation
date: '2026-10-06'
tags:
- capacity-planning
- catchup
- gpu-utilization
- hn
- inference-efficiency
- llm-serving
- workload-placement
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49981816'
comments: https://news.ycombinator.com/item?id=49981816
why_read: Read this to understand why low GPU utilization during LLM inference is
  caused by capacity planning and workload placement rather than kernel execution
  limits. You will learn the mechanistic reasons why average GPU throughput is capped
  at around thirty-five percent.
authors:
- floathub
---

Most GPU inference clusters operate at roughly 30 percent utilization, not because kernels are slow, but because capacity planning requires reserving headroom for traffic spikes. When daily peak traffic runs at double the average volume, and operators maintain a 70 percent peak utilization target to prevent latency degradation, the mathematical ceiling for single-model fleet utilization is only 35 percent.

An LLM decoding a single stream keeps hardware execution units active while generating only a fraction of achievable token throughput. Sizing dedicated instances for peak demand ensures that massive amounts of compute sit idle during off-peak hours.

Fixing this utilization trap requires multi-tenant workload colocation rather than endless kernel tuning. Interleaving latency-sensitive interactive requests with asynchronous background tasks allows teams to saturate memory bandwidth and multiply real throughput on existing hardware.
