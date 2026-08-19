---
title: ReplayHouse demonstrates ClickHouse as a browser-based neural network replay
  buffer
source: hn
url: https://jaymebrd.github.io/replayhouse/
date: '2026-08-17'
tags:
- catchup
- clickhouse
- hn
- in-browser-data-processing
- neural-network-training
- priority-sampling
- replay-buffer
- webassembly
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49328185'
comments: https://news.ycombinator.com/item?id=49328185
why_read: This article demonstrates how ReplayHouse uses ClickHouse WebAssembly as
  an in-browser replay buffer for neural network training. Readers will understand
  the benefits of replay buffers and priority sampling for efficient learning.
authors:
- GeorgeMac
---

Traditional reinforcement learning replay buffers are often in-memory, limiting scale and query flexibility. Imagine using a full-fledged OLAP database as your buffer, running entirely client-side via WebAssembly.

ReplayHouse demonstrates precisely this, utilizing ClickHouse as a dynamic replay buffer for RL agents. It shows how to perform memory management and priority sampling by querying a real MergeTree table, enabling sophisticated data selection for training.

This innovative approach turns ClickHouse into a powerful, queryable, and persistent backend for RL, opening new possibilities for scaling and experimenting with agent training data. It is a fantastic example of applied database systems in AI.
