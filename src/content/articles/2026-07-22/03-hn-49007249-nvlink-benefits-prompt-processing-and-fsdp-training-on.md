---
authors:
- ak_t
comments: https://news.ycombinator.com/item?id=49007249
date: '2026-07-22'
hn_id: '49007249'
image: /infographics/03-hn-49007249.jpg
interest_score: 9
section: ai
source: hn
tags:
- ai-workloads
- catchup
- fsdp
- gpu-performance
- hn
- model-inference
- model-training
- nvlink
- rtx-3090
- tensor-parallelism
title: NVLink benefits prompt processing and FSDP training on RTX 3090s
url: https://platform-fools.com/posts/2026-04-27-nvlink/
why_read: This post provides empirical data on NVLink's performance benefits for AI
  workloads using RTX 3090 GPUs. Readers will learn exactly when NVLink improves inference
  and training speeds and when it's not worth the investment.
---

Understanding hardware bottlenecks is crucial for scaling AI workloads. This deep dive into NVLink performance for LLMs reveals surprising insights for anyone working with multi-GPU setups.

The tests show NVLink boosting FSDP training by nearly 3x, a massive gain for distributed training. However, for tensor parallel inference, while prompt processing saw a 30% speed-up, token generation speed remained unchanged.

This challenges common assumptions. The distinction between prompt processing and token generation speeds is particularly critical for applications like coding agents that rely on long context windows. It is not just about raw inference speed, but how inter-GPU communication impacts different stages of the LLM pipeline.

Do not assume a blanket performance boost. Benchmarking your specific workload is key to making informed hardware choices.