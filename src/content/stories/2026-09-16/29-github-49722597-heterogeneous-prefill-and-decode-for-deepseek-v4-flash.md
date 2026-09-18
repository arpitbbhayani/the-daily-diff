---
title: Heterogeneous prefill and decode for DeepSeek-V4-Flash over 10GbE
source: github
url: https://github.com/chadhurley25075-png/pd-bridge
date: '2026-09-16'
tags:
- catchup
- cuda
- deepseek-v4-flash
- ethernet-10gbe
- github
- heterogeneous-inference
- metal
- omlx
- vllm
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49722597'
comments: https://news.ycombinator.com/item?id=49722597
why_read: This article demonstrates a novel heterogeneous LLM inference setup, splitting
  DeepSeek-V4-Flash prefill on NVIDIA GPUs and decoding on Apple Silicon Macs over
  plain 10GbE. Readers will learn about cross-platform, multi-framework LLM deployment
  strategies.
authors:
- jnaina
---

Serving colossal LLMs like DeepSeek-V4-Flash (284B parameters!) presents immense infrastructure challenges. What if you could split the most computationally intensive parts across different hardware, leveraging the strengths of each?

The `pd-bridge` project does exactly this: prefill on powerful NVIDIA DGX Spark GPUs using vLLM, and then decode on efficient Apple Silicon (Mac Studio) using oMLX. All connected over plain 10 Gigabit Ethernet.

This setup yields impressive speedups, 1.5x to 3.7x faster than a Mac Studio alone for long prompts, with decode rates unchanged. It is a fantastic demonstration of heterogeneous computing for LLM inference, offering a practical strategy for optimizing cost and latency in real-world deployments.
