---
title: Contrastive language models achieve faster inference across agentic tasks
source: hn
url: https://twitter.com/jackyk02/status/2102905335925424285
date: '2026-09-24'
tags:
- agentic-coding
- catchup
- contrastive-learning
- embedding-caching
- hn
- inference-latency
- scaling-laws
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49827145'
comments: https://news.ycombinator.com/item?id=49827145
why_read: Learn how disaggregating states and actions via contrastive learning significantly
  accelerates inference for agentic tasks. It explains the mechanics behind caching
  action embeddings and establishing scaling laws for system one models.
authors:
- Jacky Kwok
---

Traditional language model inference for multi-step agent execution suffers from severe latency bottlenecks because models recompute the entire context on every single step. Contrastive Language Models (CLMs) address this by treating agent execution as a fast System One reactive loop trained with a contrastive learning objective connecting states and actions.

Instead of autoregressively generating every action token, the architecture disaggregates environmental states from potential actions. This disaggregation allows action embeddings to remain cached and reused independently while the state context evolves. Benchmarks show this design delivers up to nine times faster inference than standard baselines while establishing new state-of-the-art results on challenging benchmarks such as DeepSWE and Terminal-Bench.

Decoupling reflexive action indexing from slow reasoning provides a practical blueprint for high-throughput, low-latency AI agents.
