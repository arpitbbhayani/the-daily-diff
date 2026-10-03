---
title: CliffCompaction cuts context cost without drifting long horizon agents
source: hn
url: https://arxiv.org/abs/2609.26779
date: '2026-09-23'
tags:
- autocompaction
- catchup
- coding-agents
- context-drift
- hn
- kernelbench
- test-time-scaling
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49822774'
comments: https://news.ycombinator.com/item?id=49822774
why_read: Understand how truncation-based context compaction avoids compounding drift
  and cuts compute costs in half for long-horizon agentic coding.
authors:
- Trang Nguyen
- Eulrang Cho
- Bingqing Chen
- Tim Dettmers
---

Running long-horizon coding agents across multi-million token sessions usually breaks down because iterative summarization destroys context fidelity. When agents repeatedly summarize past summaries, semantic drift accumulates rapidly until the model loses its original intent.

A new paper introduces CliffCompaction, an autocompaction technique that cuts inference costs by up to 50 percent while improving performance on benchmarks like Terminal-Bench and KernelBench.

The core insight is simple yet counterintuitive: never rephrase or summarize historical context. CliffCompaction strictly truncates or drops obsolete tokens directly from the original stream. It operates only on unedited source text and discards previous compaction passes entirely, preventing compounding summarization errors.

This single architectural constraint allowed general-purpose coding agents to sustain continuous rollouts past one million tokens, achieving a 3.58x CUDA kernel speedup on KernelBench without custom fine-tuning.
