---
title: Predicting LLM memory requirements and boot feasibility before renting GPUs
source: hn
url: https://mondegreens.github.io/apron/blog/2026/10/02/i-know-you-run-models-will-it-boot/
date: '2026-10-03'
tags:
- catchup
- gpu-memory
- hardware-benchmarking
- hn
- llm-inference
- safetensors
- vllm
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49946580'
comments: https://news.ycombinator.com/item?id=49946580
why_read: Read this to understand how to accurately predict model memory footprints
  and diagnose common boot failures before renting expensive GPU hardware.
authors:
- vladryzhkov
---

Renting an H100 only to find out forty minutes later that your target model runs out of memory or crashes on specific flags is an expensive way to debug. Predicting whether a model will boot before provisioning the hardware saves both time and cloud spend.

Apron addresses this problem by parsing model configs, safetensors headers, and the pinned vLLM runtime source to predict weight memory. In testing across fourteen open models on setups ranging from an RTX 4090 to eight H200s, the predictions landed within 2 percent of actual measured GPU usage for eleven models.

The edge cases are where things get interesting. Failures were not just pure memory shortages; they included hybrid architectures failing under default flags, models answering in the wrong tensor channels, and CUDA graph failures during tool calling.

Static verification of model topology against runtime flags should be standard practice before spinning up GPU compute.
