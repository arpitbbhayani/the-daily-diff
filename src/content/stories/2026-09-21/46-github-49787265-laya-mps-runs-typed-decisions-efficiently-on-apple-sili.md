---
title: Laya MPS runs typed decisions efficiently on Apple Silicon Macs
source: github
url: https://github.com/afshinm/laya-mps
date: '2026-09-21'
tags:
- apple-silicon
- catchup
- github
- laya-mps
- local-execution
- low-latency
- low-ram
- metal-performance-shaders
- typed-decisions
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49787265'
comments: https://news.ycombinator.com/item?id=49787265
why_read: This describes Laya MPS, a tool for running Jev-style typed decisions locally
  on Apple Silicon Macs. Readers will learn about its performance characteristics,
  hardware requirements, and specific applications in areas like customer service
  and security incidents.
authors:
- afshinm
---

Running AI models locally, especially specialized ones, often hits resource walls. Laya MPS is tackling this head-on, enabling what they call "Jev-style typed decisions" on Apple Silicon Macs with just 0.74 GB of RAM and 32ms median latency.

This is not a general-purpose LLM. Instead, it targets critical business areas like customer service, invoice processing, security incident analysis, and agent traces. The efficiency comes from leveraging Apple's Metal Performance Shaders (MPS), a concrete example of hardware-aware software optimization.

For any senior engineer exploring edge AI or seeking to drastically reduce inference costs and latency for focused AI tasks, this project offers a compelling blueprint. It shows that intelligent specialization and hardware integration can yield remarkable results.
