---
title: MetaRoCE embraces packet chaos for high-throughput AI networks
source: hn
url: https://www.sdxcentral.com/news/metas-custom-transport-protocol-embraces-packet-chaos-to-boost-ai-throughput/
date: '2026-08-25'
tags:
- ai-workloads
- catchup
- hn
- metaroc
- network-throughput
- packet-ordering
- programmable-nics
- rdma
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49437211'
comments: https://news.ycombinator.com/item?id=49437211
why_read: This article explains how Meta's custom transport protocol, MetaRoCE, reimagines
  Ethernet data transfers to significantly boost AI throughput. You will learn how
  it achieves this by embracing out-of-order packet delivery and shifting network
  intelligence to endpoints, improving performance in challenging packet loss conditions.
authors:
- Ben Wodecki
---

Meta's new custom transport protocol, MetaRoCE, flips conventional network wisdom on its head to boost AI throughput at hyperscale. Instead of strict in-order packet delivery, it deliberately sprays packets out of order.

Each packet carries its own destination, allowing data to be written directly to its final memory location as it arrives. This means the receiving NIC can process data immediately without waiting for missing packets to fill gaps, solving a major bottleneck in traditional RDMA where sequential delivery stalls network speeds under loss conditions.

By moving network intelligence to the endpoints and leveraging programmable NICs, MetaRoCE decomposes the network into many fine-grained logical paths. This novel design allows for mass cross-sectional bandwidth and network utilization, a critical innovation for the demanding, high-throughput needs of large-scale AI training.
