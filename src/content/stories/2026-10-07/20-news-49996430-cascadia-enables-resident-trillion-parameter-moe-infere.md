---
title: Cascadia enables resident trillion-parameter MoE inference on eleven AI PCs
source: news
url: https://arxiv.org/abs/2610.07219
date: '2026-10-07'
tags:
- catchup
- distributed-inference
- edge-computing
- igpu
- mixture-of-experts
- news
- openvino
section: ai
is_news: true
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49996430'
comments: https://news.ycombinator.com/item?id=49996430
why_read: Read this to understand how distributed pipelines and custom execution engines
  make trillion-parameter MoE inference viable across commodity consumer hardware.
  You will learn techniques for partitioning decoder layers, utilizing integrated
  graphics, and managing network communication.
authors:
- Tate Berenbaum
- Matias Parij
- Muthaiah Venkatachalam
---

Running massive mixture-of-experts models typically demands high-end datacenter GPUs joined by costly NVLink switches. A recent architectural paper demonstrates resident execution of Inkling, a 975B total parameter MoE model with 41B active parameters, across eleven commodity Intel AI PCs connected via standard gigabit Ethernet.

The Cascadia engine assigns six consecutive decoder layers to each machine, which is equipped with 64 GB of unified RAM and an integrated Arc GPU. To circumvent network transfer bottlenecks, the pipeline maps dense feed-forward blocks as all-active expert slices, dropping dense-layer latency from 8.1 ms down to 4.5 ms.

At 88 concurrent streams, the distributed cluster sustains 60.29 aggregate decode tokens per second, with median first-token latency clocking in at 6.05 seconds. The pipeline constructs compressed graphs via OpenVINO fused primitives, balancing FP16 computation with FP32 output restoration to preserve routing precision.

Distributing sparse MoE workloads across commodity client hardware presents a viable template for cost-effective local inference clusters.
