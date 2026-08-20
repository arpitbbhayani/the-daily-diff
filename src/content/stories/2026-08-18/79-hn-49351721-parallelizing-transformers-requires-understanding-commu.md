---
title: Parallelizing Transformers requires understanding communication cost bottlenecks
source: hn
url: https://ezyang.github.io/interactive-parallelize-transformer/
date: '2026-08-18'
tags:
- catchup
- communication-bottlenecks
- data-parallelism
- expert-parallelism
- fully-sharded-data-parallelism
- hn
- pipeline-parallelism
- tensor-parallelism
- transformer-parallelization
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49351721'
comments: https://news.ycombinator.com/item?id=49351721
why_read: This text provides an explorable explanation of five common parallelism
  schemes for training large language models. Readers will learn how each scheme incurs
  communication costs and when these costs bottleneck computation.
authors:
- matt_d
---

Scaling large language model training is a monumental distributed systems challenge. This explorable explanation breaks down the five core parallelization schemes used in practice, showing exactly where communication costs bite.

You will learn about data parallelism, fully-sharded data parallelism (FSDP/ZeRO), tensor parallelism, expert parallelism (for MoEs), and pipeline parallelism. Each method is dissected to reveal its communication overhead and how it becomes a bottleneck on various hardware configurations, from H100s to GB200s.

Understanding these trade-offs is critical for any engineer building or optimizing LLM infrastructure. It moves beyond abstract concepts into concrete details of strong scaling and hiding inter-chip communication. This is not just theory, it is the engineering reality of training multi-billion parameter models.
