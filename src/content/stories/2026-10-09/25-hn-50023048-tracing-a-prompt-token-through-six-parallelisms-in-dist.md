---
title: Tracing a prompt token through six parallelisms in distributed prefill
source: hn
url: https://charlesxu.io/tp-cp-sp-ep-dp-pp/
date: '2026-10-09'
tags:
- catchup
- context-parallelism
- data-parallelism
- expert-parallelism
- hn
- kv-cache
- mixture-of-experts
- pipeline-parallelism
- tensor-parallelism
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '50023048'
comments: https://news.ycombinator.com/item?id=50023048
why_read: Read this to understand how six distinct distributed parallelisms compose
  mechanically across GPUs during model prefill. You will learn the exact sequence
  of communication hops and memory operations a prompt token undergoes in a mixture-of-experts
  system.
authors:
- Charles Xu
---

Combining all six parallelisms across a distributed Mixture-of-Experts cluster turns token execution into a precise choreography of cross-GPU collective communications. When scaling models across dozens of accelerators, understanding where each token travels during prefill reveals why standard data-parallel assumptions completely break down.

Data parallelism and expert parallelism inherently conflict. In dense networks, data-parallel ranks process independent sequences without coordination. The moment expert routing enters the picture, tokens from separate sequences must be dynamically dispatched to the specific GPUs hosting the assigned expert weights, forcing an all-to-all communication barrier right in the middle of each transformer layer.

At the same time, sequence parallelism and context parallelism chop long contexts across multiple ranks to fit attention matrices in high-bandwidth memory. Instead of retaining prompt activations, the cluster discards all intermediate calculations and preserves only the key and value states across the pipeline stages.

Efficient large model inference is ultimately a communication topology puzzle masquerading as deep learning.
