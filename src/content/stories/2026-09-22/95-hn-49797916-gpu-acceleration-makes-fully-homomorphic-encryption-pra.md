---
title: GPU Acceleration Makes Fully Homomorphic Encryption Practical for LLM Inference
source: hn
url: https://ICML.cc/virtual/2025/poster/45395
date: '2026-09-22'
tags:
- catchup
- cloud-security
- fully-homomorphic-encryption
- gpu-acceleration
- hn
- llm-inference
- privacy-preserving-computation
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49797916'
comments: https://news.ycombinator.com/item?id=49797916
why_read: Read this to understand how GPU acceleration dramatically improves the performance
  of fully homomorphic encryption for private large language model inference. You
  will learn about a practical solution for securing sensitive LLM queries in cloud
  environments.
authors:
- Leo de Castro
- Daniel Escudero
- Adya Agrawal
- Antigoni Polychroniadou
- Manuela Veloso
---

Deploying LLMs in sensitive domains presents a massive privacy challenge: sending user queries to a cloud provider risks data leakage. This paper tackles it head-on with EncryptedLLM, introducing a GPU-accelerated Fully Homomorphic Encryption (FHE) implementation.

The results are striking: a GPT-2 forward pass using their FHE implementation is over 200 times faster than CPU baselines. This is a game-changer for practical, privacy-preserving LLM inference at scale.

This work goes beyond theoretical FHE discussions, detailing how to optimize it specifically for LLMs, including novel approximations of activation functions to maintain accuracy. For anyone building LLM infrastructure where privacy is paramount, this offers a concrete, high-performance pathway forward.

It shows that privacy and performance do not have to be mutually exclusive for production AI systems.
