---
title: Optimizing Grafana Mimir costs through zonal caching and Arm CPUs
source: hn
url: https://www.sanity.io/engineering/how-we-cut-our-mimir-bill-nearly-in-half
date: '2026-09-07'
tags:
- arm64
- caching
- catchup
- cost-optimization
- google-cloud-platform
- grafana-mimir
- hn
- metrics
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49598502'
comments: https://news.ycombinator.com/item?id=49598502
why_read: This article explains how Sanity significantly reduced their Grafana Mimir
  hosting costs. Readers will learn about specific optimizations, including a zonal
  chunks-cache and switching to Arm64 CPUs, to achieve similar cost savings for self-hosted
  metrics.
authors:
- kmelve
---

Cutting cloud infrastructure costs often feels like a black box, but Sanity.io provides a transparent playbook for optimizing Grafana Mimir. They slashed their bill by 48 percent by strategically implementing a zonal chunks-cache and migrating to Google's Axion ARM64 CPUs.

This is more than just a CPU switch; it is a deep dive into the impact of inter-zonal bandwidth on distributed time-series databases. Engineers will appreciate the detailed analysis of how chunk caching significantly reduces network egress costs, a common bottleneck in cloud deployments.

The article explains the trade-offs involved and offers concrete steps that can be applied to similar distributed systems. This pragmatic approach to system optimization delivers clear, quantifiable results.

Learn how targeted infrastructure choices and smart caching can yield dramatic financial and performance benefits.
