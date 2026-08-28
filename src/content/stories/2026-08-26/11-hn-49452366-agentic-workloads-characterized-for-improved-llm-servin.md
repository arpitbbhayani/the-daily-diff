---
title: Agentic Workloads Characterized for Improved LLM Serving Systems
source: hn
url: https://arxiv.org/abs/2608.15127
date: '2026-08-26'
tags:
- agentic-workloads
- benchmarking
- catchup
- hn
- llm-serving
- resource-management
- system-characterization
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 9
hn_id: '49452366'
comments: https://news.ycombinator.com/item?id=49452366
why_read: This paper offers a rigorous characterization of agentic workloads, detailing
  their unique system properties and bottlenecks. It is essential reading for understanding
  the challenges and implications for designing efficient LLM serving systems beyond
  traditional inference.
authors:
- Chaokun Chang
- Yukun Zhou
- Kaihua Fu
- Dakai An
- Tianyu Feng
- Hanfeng Lu
- Sheng Yao
- Pu Guo
- Yinghao Yu
- Yizhou Shan
- Bo Li
- Binhang Yuan
- Wei Wang
---

Agentic workloads are fundamentally different from traditional LLM inference, and new research from AgentSysBench reveals just how much. Expect heavyweight, stateful execution where non-LLM components (like sandboxes) can dominate latency in over half of applications, peaking at 28 GB memory per session.

These systems also show heterogeneous resource affinity, with bottlenecks shifting between GPU-bound inference, memory-bound retrieval, and CPU-bound sandboxes. Latencies can diverge by up to 32x. Production sessions hold state idle for minutes to hours, and there is a significant "control-plane tax" from auxiliary LLM calls and context overhead.

This paper is a must-read if you are designing or optimizing AI serving systems for the agent era. It truly changes the game for understanding next-generation AI infrastructure.
