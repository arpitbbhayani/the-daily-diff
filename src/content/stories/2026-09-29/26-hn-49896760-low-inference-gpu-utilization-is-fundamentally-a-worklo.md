---
title: Low inference GPU utilization is fundamentally a workload placement problem
source: hn
url: https://twitter.com/usemuna/status/2104978659069264047
date: '2026-09-29'
tags:
- capacity-planning
- catchup
- gpu-utilization
- hn
- inference-infrastructure
- model-colocation
- throughput
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49896760'
comments: https://news.ycombinator.com/item?id=49896760
why_read: Read this to understand why standard GPU fleets sit at 30% utilization due
  to peak sizing, and how co-locating models addresses this bottleneck.
authors:
- Muna
---

Most GPU clusters running LLM inference operate at roughly 30 percent throughput utilization. This inefficiency is rarely caused by slow CUDA kernels or low user traffic. It is fundamentally a resource placement and fleet-sizing problem.

Because peak traffic typically doubles daily averages, providers must provision significant headroom to prevent latency spikes during burst periods. Single-model deployments quickly hit a mathematical utilization ceiling of roughly 35 percent before redundancy and whole-GPU quantization losses take their toll.

Co-locating multiple complementary models on the same GPU dramatically flattens utilization spikes and recovers wasted compute capacity without degrading inference latencies.

Improving inference economics at scale requires optimizing fleet placement architectures rather than chasing diminishing returns on isolated kernels.
