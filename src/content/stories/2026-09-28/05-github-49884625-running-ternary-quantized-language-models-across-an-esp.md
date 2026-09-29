---
title: Running ternary quantized language models across an esp32 cluster
source: github
url: https://github.com/Low-Zi-Hong/ESP32s3-LLM-Cluster
date: '2026-09-28'
tags:
- bitnet
- catchup
- distributed-systems
- esp32-s3
- github
- pipeline-inference
- spi-daisy-chain
- ternary-quantization
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 9
hn_id: '49884625'
comments: https://news.ycombinator.com/item?id=49884625
why_read: Understand how to execute distributed transformer inference across microcontrollers
  using pipeline parallelism and ternary quantization over high-speed SPI.
authors:
- Low-Zi-Hong
image: /infographics/05-github-49884625.jpg
---

Running distributed transformer inference across microcontrollers requires reimagining pipeline parallelism under extreme hardware constraints. This project distributes a 0.5B ternary quantized model across seven ESP32-S3 chips connected via high-speed SPI daisy-chains.

The master node handles tokenization and embedding tables in flash memory, then streams intermediate FP32 hidden state vectors across the bus. Each subsequent compute node executes four transformer layers in PSRAM using 1.58-bit matrix arithmetic before forwarding activations downstream.

This architecture proves that low-bit quantization paired with simple interconnect topologies can push distributed inference into severely resource-constrained environments.
