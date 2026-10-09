---
title: Decentralized multi-agent systems eliminate parallel bubbles via shared context
source: hn
url: https://yuzhenmao.github.io/DeLM/
date: '2026-10-08'
tags:
- catchup
- hn
- multi-agent-systems
- parallelism
- shared-context
- task-queue
- workflow-bubbles
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '50010101'
comments: https://news.ycombinator.com/item?id=50010101
why_read: Read this to understand how replacing centralized orchestrators with shared
  context and asynchronous queues eliminates multi-agent execution bottlenecks. You
  will learn how decentralized coordination boosts speed and accuracy across long-horizon
  software engineering benchmarks.
authors:
- matt_d
---

Centralized multi-agent orchestrators introduce massive latency bubbles because worker agents spend most of their time waiting on a central coordinator or duplicating peer effort.

DeLM tackles this bottleneck by removing the primary manager agent entirely. Instead, agents coordinate through a shared blackboard context and an asynchronous task queue. Individual agents claim tasks independently, publish intermediate findings as soon as they become usable, and inspect peer state to build on or correct each other in real time.

This architectural shift prevents idle execution cycles and significantly cuts wasted tokens. In evaluations across long-horizon benchmarks like Terminal-Bench and DeepSWE, the decentralized design demonstrated up to a 2.49x speedup and up to a 17.5 point improvement in accuracy over traditional hierarchical harnesses like Codex and Claude Code.

Decoupling agent coordination from a single supervising prompt turns out to be just as critical for agent scaling as message passing was for distributed systems.

Shared mutable state paired with an asynchronous work queue beats a chatty coordinator every time.
