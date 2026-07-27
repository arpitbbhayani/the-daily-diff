---
authors:
- slvDev
comments: https://news.ycombinator.com/item?id=49050512
date: '2026-07-25'
depth_score: 8
hn_id: '49050512'
image: /infographics/07-hn-49050512.jpg
interest_score: 8
novelty_score: 9
section: ai
source: hn
tags:
- catchup
- esp32-s3
- flash-memory
- hn
- llm
- microcontroller
- on-device-ai
- per-layer-embeddings
title: Running a 28.9M parameter LLM on an $8 microcontroller
url: https://github.com/slvDev/esp32-ai
utility_score: 8
why_read: This text demonstrates how a large 28.9M parameter LLM can run on an $8
  microcontroller. It explains the technical approach of leveraging flash memory and
  Per-Layer Embeddings to overcome significant memory constraints.
---

Forget expensive GPUs for LLMs. A 28.9 million parameter language model is now running directly on an $8 ESP32-S3 microcontroller, generating text at an impressive 9 tokens per second.

This is a monumental leap for edge AI, made possible by a clever trick: storing most of the model's parameters in flash memory instead of RAM. Inspired by Google's Gemma models, the "Per-Layer Embeddings" technique allows a model 100 times larger than previous microcontroller-based LLMs to fit within the chip's constraints.

The ESP32-S3 offers only 512KB of SRAM, but by optimizing memory usage and leveraging the 16MB flash, this project shatters previous limitations. This opens up entirely new possibilities for truly on-device, private, and low-power AI applications without relying on cloud inference.

This demonstration fundamentally changes what is considered possible for LLM deployment in resource-constrained environments.