---
title: Running managed agent fleets as durable workflows on temporal
source: github
url: https://github.com/smartcomputer-ai/lightspeed
date: '2026-09-23'
tags:
- catchup
- durable-execution
- github
- managed-agents
- rust
- sandboxing
- temporal
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49817634'
comments: https://news.ycombinator.com/item?id=49817634
why_read: Learn how decoupling agent control loops from sandbox environments enables
  long-running, fault-tolerant agent execution. It outlines an infrastructure design
  for orchestrating cost-effective agent fleets at scale.
authors:
- handfuloflight
---

Running long-lived AI agents inside dedicated virtual machines is expensive and fragile. When an agent crashes halfway through a multi-step task, reconstructing its state usually requires replaying brittle prompt logs or paying for persistent compute that sits idle between turns.

Lightspeed decouples the core agent loop from the execution environment by treating agent orchestration as a deterministic Temporal workflow. The Rust core manages workflow state, tool scheduling, and persistence in PostgreSQL, while spinning up ephemeral sandboxes only when the agent needs to execute arbitrary code.

Because the orchestration loop is separated from the guest operating system, thousands of agents can remain suspended for weeks at minimal compute cost. When an agent wakes up to process new tool results or user input, Temporal replays its deterministic event history to restore the exact runtime state.

This pattern shifts agent reliability from fragile custom loops to battle-tested distributed workflow primitives.
