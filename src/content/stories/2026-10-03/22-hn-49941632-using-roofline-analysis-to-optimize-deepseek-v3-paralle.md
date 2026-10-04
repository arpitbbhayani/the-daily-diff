---
title: Using roofline analysis to optimize DeepSeek-V3 parallelism on Hopper
source: hn
url: https://deepseek-v3.ezyang.com/studies/03-roofline.html
date: '2026-10-03'
tags:
- catchup
- deepseek-v3
- fsdp
- hn
- hopper
- infiniband-bandwidth
- pipeline-parallelism
- roofline-analysis
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49941632'
comments: https://news.ycombinator.com/item?id=49941632
why_read: Read this to understand how roofline analysis can predict distributed communication
  bottlenecks and guide parallelism choices without expensive full-cluster benchmarking.
authors:
- matt_d
---

Choosing the right distributed training strategy for massive models like DeepSeek-V3 does not require building and benchmarking every combination on a physical cluster. A roofline analysis gives you the exact communication and compute boundaries before touching a single GPU.

When mapping DeepSeek-V3 across a cluster of 2048 Hopper GPUs, standard Fully Sharded Data Parallelism (FSDP or ZeRO-3) falls flat. The cross-node communication demands quickly saturate InfiniBand bandwidth, shifting the entire workload from compute-bound to communications-bound.

By evaluating the theoretical speed of light for tensor operations alongside node interconnect constraints, infrastructure engineers can mathematically rule out high-overhead sharding schemes. This makes the case for pipeline parallelism and selective activation checkpointing upfront.

Hardware-software co-design begins with the roofline model, not trial and error.
