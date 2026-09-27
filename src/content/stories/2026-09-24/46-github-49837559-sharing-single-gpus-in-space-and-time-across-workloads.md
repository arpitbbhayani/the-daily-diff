---
title: Sharing single GPUs in space and time across workloads
source: github
url: https://github.com/numinous-technology/gmux
date: '2026-09-24'
tags:
- catchup
- distributed-computing
- docker
- github
- gpu-sharing
- gpu-virtualization
- resource-isolation
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49837559'
comments: https://news.ycombinator.com/item?id=49837559
why_read: Learn how gmux enables dynamic spatial and temporal partitioning of GPUs
  across remote clients without requiring root access. It provides a practical approach
  to multiplexing hardware like H100s across concurrent workloads with minimal performance
  variance.
authors:
- numinous-technology
---

Maximizing GPU utilization across CI runners, developer laptops, and autonomous agents is notoriously hard without heavy orchestration infrastructure. Most setups either lock entire GPUs to single tasks or require complex host-level cluster permissions.

Gmux solves this problem by acting like tmux for hardware accelerators. It enables sharing a single GPU across multiple workloads in both space and time without requiring root access on the host. For instance, you can split an NVIDIA H100 four ways, with each job getting an isolated 158 TFLOP/s within 0.3 percent consistency of the others.

Because it runs anywhere Docker runs, engineers can stream workloads directly from CPU-only laptops or ephemeral CI environments to remote GPU instances on Vast, Lambda, or cloud VMs.

Fine-grained resource partitioning without orchestrator bloat is exactly what applied AI infrastructure needs right now.
