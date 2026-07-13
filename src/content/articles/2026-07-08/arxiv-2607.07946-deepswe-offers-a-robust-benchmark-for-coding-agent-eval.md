---
title: DeepSWE Offers a Robust Benchmark for Coding Agent Evaluation
source: arxiv
url: http://arxiv.org/abs/2607.07946v1
date: '2026-07-08'
tags:
- arxiv
- benchmarks
- catchup
- coding-agents
- cs.LG
- cs.SE
- deepswe
- evaluation
- software-engineering-tasks
- verifier
arxiv_id: '2607.07946'
categories: cs.SE, cs.LG
why_read: Read this to understand how DeepSWE provides a more robust and reliable
  benchmark for evaluating coding agents. It addresses key limitations of existing
  benchmarks like data leakage and inadequate test coverage.
authors:
- Wenqi Huang
- Charley Lee
- Leonard Tng
- Serena Ge
---

Evaluating coding agents is tough. Existing benchmarks like SWE-bench often suffer from data leakage (tasks seen during pretraining) and tests that only validate one specific fix.

DeepSWE changes the game with 113 original, long-horizon software engineering tasks. These tasks are written from scratch across 91 open-source repositories and never contributed back, eliminating pretraining data exposure.

Crucially, each DeepSWE task is graded by a hand-written verifier checking requested functionality, not just one specific implementation. An independent LLM judge found DeepSWE's verifier disagreed an order of magnitude less often (1.4%) compared to SWE-Bench Pro (32.4%).

Despite prompts being half the length, DeepSWE's tasks involve reference solutions touching 5.5x more code. This benchmark separates frontier agents more effectively, showcasing true problem-solving abilities.

For a real test of coding agent capabilities, DeepSWE offers a more robust and realistic evaluation.
