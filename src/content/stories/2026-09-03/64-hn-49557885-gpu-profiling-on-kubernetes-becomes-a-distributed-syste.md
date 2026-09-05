---
title: GPU profiling on Kubernetes becomes a distributed systems problem
source: hn
url: https://zhenyu.github.io/2026/09/02/why-a-gpu-profiling-capture-turned-into-a-distributed-systems-problem/
date: '2026-09-03'
tags:
- catchup
- distributed-systems
- gpu-profiling
- hn
- kineto
- kubernetes
- maiprof
- trace-delivery
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49557885'
comments: https://news.ycombinator.com/item?id=49557885
why_read: This article explains why GPU profiling in Kubernetes is inherently a distributed
  systems problem and how a solution was designed, drawing inspiration from Meta's
  MAIProf, to enable snapshot-based profiling in complex environments. Readers will
  learn about the challenges of profiling distributed training jobs and the architectural
  considerations for addressing them.
authors:
- Zhenyu Sha
---

Profiling large-scale GPU training jobs on Kubernetes is not just hard, it is a distributed systems nightmare. This article breaks down how Meta's MAIProf concept can be extended and redesigned to capture meaningful GPU traces across nodes.

You will learn about the critical challenges: how to handle capture ownership, implement robust process discovery, and ensure reliable trace delivery in a distributed environment. This is not just about tools; it is about architectural patterns for observability in complex AI infrastructure.

If you are running PyTorch on Kubernetes and wrestling with performance debugging, this deep dive offers concrete architectural blueprints you can apply today.
