---
title: MoE sparsity enables expert streaming beyond RAM limitations
source: github
url: https://github.com/walter-grace/expert-sniper
date: '2026-08-25'
tags:
- catchup
- expert-network
- expert-streaming
- github
- inference-scaling
- mixture-of-experts
- model-sparsity
- ssd
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49441294'
comments: https://news.ycombinator.com/item?id=49441294
why_read: This explains how to run Mixture-of-Experts models larger than available
  RAM by leveraging their inherent sparsity, allowing experts to be streamed from
  SSDs or a network of machines. Readers will learn the mechanics behind this distributed
  inference approach and why interconnect latency is not a bottleneck.
authors:
- walter-grace
---

Running massive Mixture-of-Experts (MoE) models often means investing in enormous, expensive GPUs. But what if you could pool ordinary computers to run models bigger than any single machine's RAM? That is precisely what the Expert Sniper project aims to do.

MoE models are sparse: only a small fraction of their 'experts' are activated per token. This sparsity means that the vast majority of expert weights do not need to reside in GPU memory simultaneously. Expert Sniper exploits this by streaming experts from SSDs across a network of commodity machines.

The key insight is that interconnect bandwidth is rarely the bottleneck. Instead, pooled SSD bandwidth from multiple machines becomes the scaling factor. This innovative approach could democratize access to very large MoE models, turning a cluster of Macs into a powerful, distributed inference engine.
