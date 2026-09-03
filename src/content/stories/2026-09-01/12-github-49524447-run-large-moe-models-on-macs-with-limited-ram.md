---
authors:
- carloslfu
comments: https://news.ycombinator.com/item?id=49524447
date: '2026-09-01'
depth_score: 8
hn_id: '49524447'
image: /infographics/12-github-49524447.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- catchup
- github
- low-memory-inference
- mac-compatibility
- mixture-of-experts
- slotstream
- ssd-streaming
title: Run large MoE models on Macs with limited RAM
url: https://github.com/carloslfu/slotstream
utility_score: 9
why_read: This document introduces slotstream, a tool that enables running large mixture-of-experts
  models on Macs with limited RAM by streaming experts from SSD. Readers will learn
  how this technology overcomes memory constraints for demanding AI models on consumer
  hardware.
---

Running massive Mixture-of-Experts (MoE) LLMs on your personal Mac might seem impossible without vast RAM, but `slotstream` shows otherwise. This MLX + Swift tool makes it possible to run a 104GB Qwen3.8-Flash-Next model on a 48GB MacBook Pro by intelligently streaming experts from SSD.

The performance is genuinely impressive: expect warm decode speeds around 12 tokens per second, with the engine starting in about 2 seconds. The crucial insight here is that only the 3.8GB model trunk needs to be memory-resident initially, allowing for a peak memory usage of just 32GB even with a 105GB model on disk.

This project offers a compelling blueprint for memory optimization in LLM infrastructure, demonstrating that smart system design can overcome hardware limitations for local inference. It is a highly practical and actionable example of applied AI.