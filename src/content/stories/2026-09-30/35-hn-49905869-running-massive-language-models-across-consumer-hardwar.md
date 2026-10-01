---
title: Running massive language models across consumer hardware using pipeline parallelism
source: hn
url: https://diljitpr.net/blog-post-2026-09-30-running-397b-model-on-20-gpus-peer-to-peer.html
date: '2026-09-30'
tags:
- catchup
- distributed-inference
- hn
- llama-cpp
- peer-to-peer-mesh
- pipeline-parallelism
- sangama
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49905869'
comments: https://news.ycombinator.com/item?id=49905869
why_read: Understand the mechanics and network bottlenecks of splitting a 397-billion-parameter
  model across distributed consumer GPUs using pipeline parallelism.
authors:
- diljitr
---

Running a 397-billion-parameter model usually requires hundreds of gigabytes of VRAM in an enterprise cluster. A new open-source experiment called Sangama explores whether home computers with standard 16 GB GPUs can pool resources over ordinary internet connections to run these massive weights.

By slicing Qwen 3.5 397B into 20 pipeline stages of three layers each, 20 consumer cards (primarily RTX 4090s and 5090s) each loaded only 12 GB into VRAM via a custom llama.cpp build. The entire inference execution ran over an encrypted peer-to-peer mesh through NAT-traversal relays.

The initial run achieved 0.6 tokens per second. The primary bottleneck was not compute or memory bandwidth, but network latency across intermediate relay hops. When running pipeline parallelism across residential connections, the GPU remains idle for most of the execution cycle waiting on network transport.

This experiment shows that distributed consumer-grade inference is functionally viable, though latency optimization and network layout dominate pipeline throughput.
