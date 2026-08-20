---
title: Miles v0.1 achieves production-level post-training for frontier RL
source: hn
url: https://www.lmsys.org/blog/2026-08-18-miles-v0-1/
date: '2026-08-18'
tags:
- agentic-rl
- asynchronous-rl
- catchup
- distributed-systems
- hn
- miles-v0.1
- post-training
- reinforcement-learning
- rl-training-loop
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49349820'
comments: https://news.ycombinator.com/item?id=49349820
why_read: Read this to understand Miles v0.1, a new production-ready system for reinforcement
  learning post-training. You will learn how it optimizes the RL training loop for
  accuracy, efficiency, reliability, and scalability.
authors:
- RadixArk
- Ecosystem Partners
---

Production-level post-training for large language models, especially with Reinforcement Learning (RL), is an immense engineering challenge. LMSYS Org has just released Miles v0.1, a full-stack system designed for frontier-scale RL, emphasizing accuracy, efficiency, and reliability.

This deep dive explains how Miles optimizes every stage of the RL loop. It covers fast agentic rollout using SGLang, fully async RL agentic environments, and innovative techniques like Token-In-Token-Out (TITO) and Routing Replay (R3) for efficient rollout management. You will learn about their strategies for low-precision training, memory efficiency, and disk offload, essential for operating on massive hardware like 64 NVIDIA GB300 GPUs.

This system provides a robust blueprint for anyone building or operating large-scale LLM infrastructure. It details how to manage model updates with minimal interruption and ensure verified day-0 model support.

Scalable LLM infrastructure demands this level of thoughtful engineering.
