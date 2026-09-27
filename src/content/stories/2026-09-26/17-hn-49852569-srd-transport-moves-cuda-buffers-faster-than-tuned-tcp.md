---
title: SRD transport moves CUDA buffers faster than tuned TCP
source: hn
url: https://quasiben.github.io/blog/efa-aws/
date: '2026-09-26'
tags:
- catchup
- cudf-polars
- efa
- gpudirect-rdma
- hn
- srd-transport
- tcp
- ucx
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49852569'
comments: https://news.ycombinator.com/item?id=49852569
why_read: Read this to understand the concrete performance gains and configuration
  nuances of using AWS EFA and SRD transport for distributed GPU communication compared
  to standard TCP.
authors:
- Benjamin Zaitlen
---

Standard TCP networking creates massive bottlenecks when transferring large memory buffers between cloud GPU instances. In recent benchmarks evaluating distributed cuDF-Polars workloads across multi-GPU nodes, AWS Elastic Fabric Adapter using Scalable Reliable Datagram transport moved CUDA buffers roughly 40 times faster than tuned TCP.

The performance advantage stems from GPUDirect RDMA, which bypasses the host operating system stack to allow direct GPU-to-GPU memory transfers over the network fabric. During distributed shuffle stages, SRD maintained a 13x speedup over standard TCP, though the gap narrowed to roughly 2x on full end-to-end analytical query benchmarks as local computation started to dominate.

Understanding these transport layer differences is essential when architecting cloud infrastructure for distributed model training and accelerated data processing pipelines.
