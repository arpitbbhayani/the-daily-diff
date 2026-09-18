---
title: ArgoDrive enables large MoE models by streaming experts from SSDs
source: github
url: https://github.com/argonautlabsai/argodrive
date: '2026-09-16'
tags:
- catchup
- disk-io-optimization
- distributed-reads
- github
- large-language-models
- mixture-of-experts
- model-inference
- nvme
- ssd
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49722242'
comments: https://news.ycombinator.com/item?id=49722242
why_read: This tool is for anyone interested in running very large Mixture-of-Experts
  models efficiently on systems with limited memory. You will learn how a clever disk
  I/O optimization strategy, leveraging NVMe and distributed reads, achieves significant
  inference speedups.
authors:
- Argonautlabs
---

Running massive Mixture-of-Experts (MoE) LLMs on consumer-grade hardware like a 128 GB laptop is now possible, with ArgoDrive showcasing impressive token generation rates by leveraging SSDs.

The key insight is that if every token waits on disk, bandwidth is less important than minimizing the slowest required read. ArgoDrive keeps the model's trunk in memory and streams routed experts from NVMe, splitting each expert read across byte-identical replicas on multiple drives.

This intelligent layout and balancing act dramatically boosts performance, with DeepSeek V4.1-Flash seeing a 1.7x to 2.6x gain, hitting 17 tokens/s. This project provides concrete blueprints for practical LLM infrastructure optimization, pushing the boundaries of what is feasible on local machines.
