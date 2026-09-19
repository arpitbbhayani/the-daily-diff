---
title: One-pass option scoring with local Gemma 3 4B on Apple silicon
source: github
url: https://github.com/daseinlabs/open-jev
date: '2026-09-17'
tags:
- catchup
- gemma
- github
- kv-cache
- language-model-scoring
- mlx
- one-pass-scoring
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49737236'
comments: https://news.ycombinator.com/item?id=49737236
why_read: This describes a method for efficient language model scoring. Learn how
  to perform one-pass option scoring with Gemma 3.4B on Apple silicon using MLX, leveraging
  KV cache for optimized performance.
authors:
- suriyaG
---

Optimizing LLM inference on edge devices is paramount, and Open-jev presents a clever technique for one-pass option scoring with Gemma 3 4B on Apple silicon. This is not about general inference; it targets specific tasks where you need to evaluate multiple predefined options.

Instead of decoding each option sequentially, Open-jev prefills the context once, then expands that KV cache across all options. This allows the model to score every option in a single padded forward pass, eliminating redundant computation and significantly speeding up throughput.

This approach bypasses decoding entirely for option scoring, relying on log-probabilities. It is a highly practical optimization for anyone building applications requiring efficient classification or selection with local LLMs, demonstrating what is possible with smart LLM infrastructure design.

Gain significant speed improvements for option scoring tasks.
