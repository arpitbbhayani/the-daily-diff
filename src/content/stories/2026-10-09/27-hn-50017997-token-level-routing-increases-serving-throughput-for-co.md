---
title: Token level routing increases serving throughput for collaborative models
source: hn
url: https://fuvty.github.io/thinking_yard_project_page/projects/tokenrouter/
date: '2026-10-09'
tags:
- batch-scheduling
- catchup
- hn
- kv-cache
- serving-engine
- token-level-routing
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '50017997'
comments: https://news.ycombinator.com/item?id=50017997
why_read: Read this to understand how TokenRouter decouples model execution to route
  individual tokens between small and large models without cross-model KV cache movement.
  You will learn the architectural mechanics behind scheduling irregular token arrivals
  to achieve massive throughput gains.
authors:
- ilreb
---

Routing generation between large and small models usually happens at the request or turn boundary. Switching models midway through an answer has historically destroyed throughput because moving massive key-value caches across GPUs stalls the inference pipeline.

TokenRouter rethinks this architecture by decoupling token routing from cache movement. Each model runs an independent decoding loop with its own local key-value cache. When the scheduler switches models at the token level, only token suffixes and lightweight routing states travel across subservers.

This split execution pattern keeps fast small models decoding continuous batches while slower large models handle complex intermediate reasoning steps. In benchmarks across multiple dynamic routing policies, decoupling cache ownership yielded throughput improvements between 2 and 64 times over conventional baselines.

Decoupling cache locality from routing decisions is the right architectural blueprint for heterogeneous model serving.
