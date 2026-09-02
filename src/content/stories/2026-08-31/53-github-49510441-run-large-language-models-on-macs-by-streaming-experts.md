---
title: Run large language models on Macs by streaming experts from SSD
source: github
url: https://github.com/carloslfu/slotstream
date: '2026-08-31'
tags:
- apple-silicon
- catchup
- github
- mixture-of-experts
- model-streaming
- ollama-api
- qwen3.8-flash-next
- slotstream
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49510441'
comments: https://news.ycombinator.com/item?id=49510441
why_read: This explains how to run massive mixture-of-experts language models like
  Qwen3.8-Flash-Next on Apple Silicon Macs, even with limited RAM, by efficiently
  streaming model components from SSD. You will learn about a tool that makes large
  LLMs accessible on consumer hardware.
authors:
- carloslfu
---

Running massive Mixture-of-Experts (MoE) LLMs like Qwen3.8-Flash-Next on consumer hardware usually means hitting memory walls. Slotstream sidesteps this by streaming model experts directly from SSD.

This MLX + Swift project allows a 125B-parameter model, which is 104GB at 4-bit, to run on a 48GB M5 Pro Mac with a peak memory usage of only 32GB. It achieves warm decode speeds of around 12 tokens per second.

This is a clever memory management technique for LLMs, effectively using disk as a swap for model components, providing a highly actionable blueprint for running large models locally without specialized hardware.
