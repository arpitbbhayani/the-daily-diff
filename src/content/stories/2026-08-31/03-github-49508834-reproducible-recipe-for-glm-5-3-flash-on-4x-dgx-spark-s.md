---
title: Reproducible recipe for GLM-5.3-Flash on 4x DGX Spark switchless ring
source: github
url: https://github.com/alexellis/glm-5.3-flash-4x-dgx-spark-switchless
date: '2026-08-31'
tags:
- catchup
- dflash2
- dgx-spark
- github
- glm-5.3-flash
- llm-serving
- reproducible-recipe
- roce
- switchless-ring
- tensor-parallelism
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49508834'
comments: https://news.ycombinator.com/item?id=49508834
why_read: This recipe offers a concrete, reproducible guide for serving large language
  models like GLM-5.3-Flash across multiple NVIDIA DGX Spark nodes with high performance.
  Readers will learn how to set up a switchless RoCE ring for efficient, on-prem LLM
  deployment.
authors:
- alexellis
---

Deploying large language models (LLMs) at scale, especially for real-time agentic traffic, is a monumental infrastructure challenge. This GitHub recipe offers a concrete, reproducible solution that addresses key performance bottlenecks.

It details how to run GLM-5.3-Flash (NVFP4) using tensor parallelism across four NVIDIA DGX Spark nodes. The secret sauce involves a switchless RoCE ring and DFlash2 speculative drafting, pushing the limits of what is possible on dedicated hardware.

Achieving around 45 tokens per second on agentic traffic with a 262K context window on hardware you own is a significant feat. This is not just a high-level overview; it dives into patched NCCL, MoE backends, and KV sizing, providing a real blueprint.

If you are building LLM inference infrastructure, this is an incredibly valuable resource. You will learn specific configurations and trade-offs that drive high-throughput, low-latency LLM deployments. This is practical, production-ready knowledge.
