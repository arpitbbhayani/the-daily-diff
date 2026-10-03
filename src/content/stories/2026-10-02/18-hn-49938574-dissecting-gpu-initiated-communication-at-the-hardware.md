---
title: Dissecting GPU-initiated communication at the hardware and library boundary
source: hn
url: https://arxiv.org/abs/2610.01380
date: '2026-10-02'
tags:
- catchup
- gpu-initiated-communication
- hn
- infiniband
- mixture-of-experts
- nccl-gin
- nvshmem
- rdma
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49938574'
comments: https://news.ycombinator.com/item?id=49938574
why_read: This paper breaks down the low-level mechanics and latency overheads of
  direct GPU-to-NIC RDMA operations across modern NVIDIA architectures. You will gain
  a clear mental model of how communication libraries impact fine-grained network
  performance in Mixture-of-Experts workloads.
authors:
- Javid Baydamirli
- Ismayil Ismayilov
- Kaan Oktay
- Didem Unat
---

Direct GPU-to-NIC communication underpins high-performance distributed AI frameworks like NVSHMEM, NCCL GIN, and DeepEP. Yet measuring where latency actually goes between hardware limits and software abstractions has long been opaque.

Recent benchmark dissections across NVIDIA H100 through GB200 platforms reveal startling microarchitectural trade-offs. A minimal GPU-side RDMA path can post an operation in 0.7 microseconds and complete in 4.0 microseconds. However, conventional collective communication libraries add up to 4.6 microseconds of pure issue overhead due to work-request construction, queue state tracking, memory barriers, and completion polling scopes.

Even more surprising is the CPU proxy alternative. A properly tuned CPU proxy thread matches or beats direct GPU issue times under light load. Furthermore, sharing an RDMA queue between fine-grained Mixture-of-Experts tokens and bulk data transfers spikes latency by one to three orders of magnitude.

If you design distributed training runtimes or low-latency collective communication primitives, queue isolation and doorbell pacing at the hardware boundary matter far more than high-level framework abstractions.
