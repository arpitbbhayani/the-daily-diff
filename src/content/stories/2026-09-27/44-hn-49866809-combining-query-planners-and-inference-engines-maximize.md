---
title: Combining query planners and inference engines maximizes GPU throughput
source: hn
url: https://modal.com/blog/quail-billion-tpm
date: '2026-09-27'
tags:
- ai-sql
- catchup
- gpu-throughput
- hn
- inference-engine
- llm-inference
- query-planner
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49866809'
comments: https://news.ycombinator.com/item?id=49866809
why_read: Read this to understand how coupling a query planner with an inference engine
  achieves extreme token throughput for analytic workloads on a single GPU.
authors:
- Charles Frye
- Shreya Shankar
---

Naively feeding high-volume analytical SQL workloads into traditional LLM inference engines results in massive throughput bottlenecks. When running database joins augmented by LLM predicates across millions of rows, standard conversational batching mechanisms fail to utilize GPU compute effectively.

By co-designing a relational query planner with an inference runtime, systems can achieve over one billion tokens per minute on a single GPU. The engine restructures prompt generation into columnar batches, shares prefix key-value caches across related records, and skips redundant attention calculations across repeated row schemas.

This architecture treats the language model not as an external chat endpoint, but as a specialized vectorized execution operator inside the database engine. It drastically compresses sequence processing overhead while saturating tensor cores.

Integrating inference directly into query execution changes LLMs from slow external services into high-throughput relational primitives.
