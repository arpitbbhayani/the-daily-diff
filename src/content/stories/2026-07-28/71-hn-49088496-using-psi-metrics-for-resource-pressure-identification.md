---
authors:
- nikolay_sivko
comments: https://news.ycombinator.com/item?id=49088496
date: '2026-07-28'
depth_score: 8
hn_id: '49088496'
image: /infographics/71-hn-49088496.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- catchup
- cgroup-v2
- cpu-pressure
- hn
- io-pressure
- kubelet
- kubernetes
- linux-kernel
- memory-pressure
- metrics
- pressure-stall-information
- resource-pressure
title: Using PSI Metrics for Resource Pressure Identification in Kubernetes
url: https://kubernetes.io/docs/reference/instrumentation/understand-psi-metrics/
utility_score: 9
why_read: This document details Pressure Stall Information (PSI) metrics in Kubernetes.
  Readers will learn how to collect and interpret PSI data to identify and diagnose
  resource pressure in their clusters.
---

You cannot fix what you cannot measure, and understanding resource pressure is paramount for robust distributed systems. This deep dive into Linux kernel Pressure Stall Information (PSI) metrics for Kubernetes is a must-read. It breaks down how `some` and `full` pressure indicators reveal CPU, memory, and I/O bottlenecks, even when traditional metrics seem fine.

This goes beyond surface-level monitoring, explaining how to configure kubelet to expose these critical kernel-level insights. You will learn to identify early warning signs of resource contention that impact your pods and nodes. Implementing these monitoring techniques will empower you to proactively optimize your Kubernetes clusters, preventing performance regressions and ensuring system stability.

It is a powerful tool for any engineer managing complex containerized environments.