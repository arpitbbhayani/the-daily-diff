---
title: Empirical validation of multi-depth context pruning across codebases
source: github
url: https://github.com/heuristicolab/ctxfw/blob/main/docs/benchmarks/TRILOGY_EMPIRICAL_BENCHMARK.md
date: '2026-10-06'
tags:
- benchmarking
- catchup
- coding-agents
- context-pruning
- github
- topological-resolution
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49978602'
comments: https://news.ycombinator.com/item?id=49978602
why_read: This benchmark evaluates how multi-depth topological resolution optimizes
  context size for autonomous coding agents across complex enterprise repositories.
authors:
- mikemo88
---

Autonomous coding agents frequently degrade in performance when provided with excessive raw context. Ingesting full source trees quickly exhausts token budgets and introduces semantic noise that degrades model accuracy.

The ctxfw project published empirical multi-depth AST benchmarks across major monorepos, including Zulip and Apache Airflow. By leveraging SQLite Write-Ahead Logging symbol indexing and structural code graph stubbing, the harness systematically prunes context from complete method implementations down to topological interface stubs.

The resulting benchmark shows dramatic reductions in raw prompt sizes without losing critical type signatures or cross-module references. Pruning at depth boundaries allows the reasoning agent to maintain accurate call graphs while cutting prompt token consumption significantly.

Optimizing agent harnesses around deterministic AST extraction proves far more effective than throwing larger context windows at noisy codebases.
