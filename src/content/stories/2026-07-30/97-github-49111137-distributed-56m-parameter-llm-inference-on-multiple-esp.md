---
authors:
- wladimiravila
comments: https://news.ycombinator.com/item?id=49111137
date: '2026-07-30'
depth_score: 8
hn_id: '49111137'
image: /infographics/97-github-49111137.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- 4-bit-quantization
- catchup
- distributed-ai
- esp-now
- esp32-s3
- github
- kv-cache
- llm-inference
- microcontrollers
- split-ple
title: Distributed 56M-parameter LLM inference on multiple ESP32-S3 boards
url: https://github.com/wladimiravila/esp32s3-distributed-ai
utility_score: 8
why_read: This project demonstrates an innovative way to run a 56M-parameter language
  model across multiple ESP32-S3 microcontrollers offline. Readers will learn how
  to achieve distributed LLM inference on resource-constrained edge devices using
  techniques like Split-PLE and KV cache.
---

Running a 56M-parameter LLM across three ESP32-S3 microcontrollers is not just a demo, it is a masterclass in extreme edge AI. This project utilizes ESP-NOW for inter-board communication and innovative Split-PLE to manage embeddings across devices, enabling fully offline inference.

The sheer ingenuity in distributing a model of this size, even a micro-LLM, across such constrained hardware is remarkable. It is not about throwing more compute at the problem; it is about meticulous resource management, custom architecture design, and pushing the boundaries of what is possible on tiny chips.

This work offers invaluable lessons for anyone building applied AI systems where power, cost, and latency are paramount. It changes how you think about deploying LLMs beyond cloud environments.