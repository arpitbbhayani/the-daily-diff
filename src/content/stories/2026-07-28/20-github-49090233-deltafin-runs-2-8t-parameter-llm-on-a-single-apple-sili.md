---
authors:
- tito
comments: https://news.ycombinator.com/item?id=49090233
date: '2026-07-28'
depth_score: 8
hn_id: '49090233'
image: /infographics/20-github-49090233.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- apple-silicon
- catchup
- github
- kimi-k3
- local-disk-cache
- metal-mps
- mixture-of-experts
- mxfp4
- on-demand-streaming
title: Deltafin runs 2.8T-parameter LLM on a single Apple Silicon Mac
url: https://github.com/gavamedia/deltafin
utility_score: 8
why_read: This project demonstrates how to run a massive Mixture-of-Experts LLM on
  a single Apple Silicon Mac by leveraging on-demand expert streaming and local caching.
  It offers insights into efficient large model deployment on consumer hardware.
---

Running a 2.8-trillion-parameter LLM locally on an M1 Max sounds impossible, but this project makes it happen. It streams Mixture-of-Experts (MoE) components on demand over HTTP into a local disk cache, cleverly bypassing the memory limits of consumer hardware.

The project leverages fused NEON kernels and Apple's Metal/MPS for compute, ensuring optimized performance. It even provides an OpenAI-compatible API, making it immediately useful for building and testing local chat and coding agents without needing massive cloud GPUs.

This is a fantastic example of system design solving real-world applied AI challenges. It opens up serious local LLM development for millions of developers.