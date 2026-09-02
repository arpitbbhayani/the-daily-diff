---
title: Measured CKKS FHE LLM inference shows interactive 1 second per token
source: hn
url: https://forums.developer.nvidia.com/t/llm-inference-under-ckks-fhe-on-one-dgx-spark-1-s-token-interactive-and-a-full-every-layer-encrypted-run/381842
date: '2026-08-31'
tags:
- catchup
- ckks
- dgx-spark
- encrypted-inference-comparison
- fully-homomorphic-encryption
- hn
- llm-inference
- performance-measurement
section: ai
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
hn_id: '49509884'
comments: https://news.ycombinator.com/item?id=49509884
why_read: Read this to learn about the measured performance of LLM inference using
  CKKS fully homomorphic encryption on DGX Spark. It clarifies the critical distinctions
  between interactive and fully-encrypted inference models, enabling better comparison
  of published FHE-LLM figures.
authors:
- Vincent Kaufmann
---

Running LLM inference on encrypted data just got a major performance update, pushing the boundaries for privacy-preserving AI. New benchmarks on NVIDIA's DGX Spark show interactive FHE (Fully Homomorphic Encryption) inference at 1.05 seconds per token.

This is not a theoretical projection. It is a measured result for full LLM inference, where the server computes without ever decrypting inputs or outputs. A fully encrypted, every-layer run still takes about six minutes per token, but the interactive result is a significant step forward.

Understanding the trade-offs between interactive and fully homomorphic scenarios is crucial for anyone designing secure LLM systems. This report provides the transparency and concrete numbers needed to evaluate FHE's current practical utility for sensitive AI applications.
