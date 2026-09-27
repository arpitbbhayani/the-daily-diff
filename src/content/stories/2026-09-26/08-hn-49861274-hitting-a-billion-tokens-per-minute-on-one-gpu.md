---
title: Hitting a billion tokens per minute on one GPU
source: hn
url: https://modal.com/blog/quail-billion-tpm
date: '2026-09-26'
tags:
- ai-sql
- catchup
- gpu-throughput
- hn
- inference-engine
- llm-inference
- query-planner
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49861274'
comments: https://news.ycombinator.com/item?id=49861274
why_read: Understand how co-designing query planners with inference engines unlocks
  massive throughput for structured LLM database workloads. You will learn how to
  optimize cost and latency for high-volume, low-intelligence data transformations
  on a single GPU.
authors:
- Charles Frye
- Shreya Shankar
image: /infographics/08-hn-49861274.jpg
---

Standard language model inference engines are optimized for conversational, multi-turn chat and open-ended generation. When engineers force high-throughput analytic SQL queries through these generic conversational APIs, hardware utilization collapses because the runtime assumes unpredictable generation lengths and complex dynamic state management.

Modal and Carnegie Mellon researchers demonstrated that coupling a database query planner directly with a specialized inference engine unlocks over one billion tokens per minute on a single GPU. The key insight lies in treating single-token classification and extraction workloads as structured database operators rather than conversational dialogues.

By compiling prompts into static batches and pushing down evaluation logic directly into the GPU execution runtime, the system avoids memory fragmentation and eliminates conversational harness overhead entirely.

Treating model inference as a relational query plan transforms expensive LLM calls into blazing fast vectorized table scans.
