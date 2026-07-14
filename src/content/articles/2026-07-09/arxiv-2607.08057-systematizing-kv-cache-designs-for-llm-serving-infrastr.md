---
title: Systematizing KV Cache Designs for LLM Serving Infrastructure
source: arxiv
url: http://arxiv.org/abs/2607.08057v1
date: '2026-07-09'
tags:
- arxiv
- autoregressive-decoding
- catchup
- co-design
- cs.AI
- cs.CL
- cs.LG
- execution-scheduling
- kv-cache
- llm-serving
- llms
- placement-migration
- representation-retention
- system-behavior
arxiv_id: '2607.08057'
categories: cs.LG, cs.AI, cs.CL
why_read: This survey systematizes the rapidly evolving area of system-aware KV infrastructure
  for LLM serving, offering a foundational understanding of current designs and future
  innovation opportunities. It organizes existing efforts across temporal, spatial,
  and structural dimensions.
authors:
- Jiantong Jiang
- Peiyu Yang
- Rui Zhang
- Feng Liu
---

Efficiently serving large language models is a major challenge, largely due to the memory-intensive KV cache. This survey provides a deep dive into system-aware KV cache optimization.

It organizes existing efforts across three critical dimensions: temporal (execution and scheduling), spatial (placement and migration), and structural (representation and retention). Understanding these is paramount for high-throughput, low-latency LLM inference.

For engineers building LLM infrastructure, this survey is an invaluable resource. It identifies key bottlenecks and highlights future opportunities in KV cache design, enabling you to optimize your serving systems for both performance and cost.
