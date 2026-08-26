---
title: 'MetaRoCE: New RDMA transport for AI-scale Ethernet'
source: hn
url: https://engineering.fb.com/2026/08/24/networking-traffic/metaroce-rdma-transport-ai-ethernet/
date: '2026-08-24'
tags:
- ai-workloads
- catchup
- collective-operations
- distributed-training
- ethernet
- hn
- metaroce
- open-compute-project
- rdma
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49426482'
comments: https://news.ycombinator.com/item?id=49426482
why_read: This article introduces MetaRoCE, a new RDMA transport protocol from Meta
  designed to power AI workloads on commodity Ethernet at massive scale. Readers will
  learn how it addresses networking challenges for frontier AI models, offering high
  throughput and low latency.
authors:
- Arvind Srinivasan
- Neil Spring
- Omar Baldonado
- Rajiv Krishnamurthy
---

Meta just unveiled MetaRoCE, a brand-new RDMA transport protocol custom-built for AI workloads on commodity Ethernet 

Existing RoCE protocols struggle with multiplane and large-scale networks, leading to stranded compute capacity. MetaRoCE addresses this by enabling high throughput and low tail latency, even when synchronizing thousands of accelerators across vast distances with operations like all-reduce.

They are even open-sourcing the specification and a reference implementation through OCP. This is not just a Meta solution; it is a blueprint for the entire industry to build faster, more resilient AI infrastructure.
