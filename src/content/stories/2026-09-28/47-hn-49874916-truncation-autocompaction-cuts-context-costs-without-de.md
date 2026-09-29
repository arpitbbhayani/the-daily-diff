---
title: Truncation autocompaction cuts context costs without degrading coding performance
source: hn
url: https://arxiv.org/abs/2609.26779
date: '2026-09-28'
tags:
- catchup
- coding-agents
- context-compaction
- context-drift
- continual-learning
- hn
- test-time-scaling
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49874916'
comments: https://news.ycombinator.com/item?id=49874916
why_read: Read this paper to learn how discarding rephrasing during context compaction
  reduces cost by half while preventing context drift across million-token tasks.
authors:
- Trang Nguyen
- Eulrang Cho
- Bingqing Chen
- Tim Dettmers
---

LLM agents running long-horizon tasks frequently degrade over time because repeated summarization causes context drift. CliffCompaction introduces an autocompaction strategy that cuts execution costs by up to 50 percent while preserving model reasoning fidelity.

The core insight is simple: never compact an already compacted summary, and never ask an LLM to rephrase historical actions. Instead, the technique strictly drops or truncates non-essential original content while keeping retained segments byte-for-byte intact. By throwing away intermediate summaries and always operating directly on raw historical traces, the context window remains faithful across runs.

On benchmarks like KernelBench, this method sustained continuous multi-step exploration across a million tokens, yielding CUDA kernel speedups of 3.58x after 400 steps.

Context drift is not solved by more summarization; it is solved by disciplined pruning.
