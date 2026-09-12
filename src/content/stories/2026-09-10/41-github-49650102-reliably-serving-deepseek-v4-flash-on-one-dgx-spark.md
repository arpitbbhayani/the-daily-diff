---
title: Reliably Serving DeepSeek V4 Flash on One DGX Spark
source: github
url: https://github.com/0xSero/deepseek-v4-flash-0731-spark-sparkinfer
date: '2026-09-10'
tags:
- catchup
- deepseek-v4-flash
- dgx-spark
- docker-recipe
- exl3
- github
- nvfp4-mla-kv-cache
- sparkinfer
- structured-output
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49650102'
comments: https://news.ycombinator.com/item?id=49650102
why_read: This recipe details a validated method to serve DeepSeek V4 Flash on a single
  NVIDIA DGX Spark. Readers will learn about specific configurations, performance
  limits, and a crucial KV-format disclosure for reliable deployment.
authors:
- 0xSero
---

Deploying cutting-edge LLMs like DeepSeek V4 Flash on specific hardware demands intricate optimization. This GitHub recipe offers a validated Docker configuration for serving it on a single NVIDIA DGX Spark, pushing the limits with a 262K token model capacity.

The setup leverages EXL3 quantization, SparkInfer, and a compact K64 DSpark speculative draft with fixed K5 verification. It provides crucial insights into KV cache formats, specifically contrasting a 584-byte padded FP8 sparse-MLA record against the intended 432-byte NVFP4 KV record.

This deep dive into inference configuration and the nuanced trade-offs between different KV formats provides highly actionable intelligence for engineers striving to maximize performance and compatibility in their LLM deployments. It illustrates how critical low-level details are for production-ready AI systems.
