---
title: Durable execution for long-running agents without history replay
source: github
url: https://github.com/trigora-dev/trigora
date: '2026-10-07'
tags:
- ai-agents
- catchup
- continuation-state
- durable-execution
- fault-tolerance
- github
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49994446'
comments: https://news.ycombinator.com/item?id=49994446
why_read: Learn how Trigora enables durable execution for long-running AI agents and
  workflows by resuming directly from continuation state rather than replaying past
  execution history.
authors:
- hypervs
image: /infographics/04-github-49994446.jpg
---

Traditional durable execution engines like Temporal achieve fault tolerance by replaying the entire event history of a workflow from start to finish. When an agent or task crashes or wakes up from an external webhook, the runtime reruns previous code branches and mocks out completed side effects to reconstruct local memory.

This replay model falls apart when workflows involve non-deterministic AI agent loops, large dynamic contexts, or hundreds of intermediate tool calls. Re-executing thousands of past event transitions wastes memory, introduces strict code-determinism constraints, and degrades resume latency under heavy load.

Trigora eliminates the replay log entirely by serializing and committing continuation state directly at suspension points. Instead of reconstructing state by re-evaluating historical events, the runtime suspends across timers or external effects and restores execution immediately from the committed continuation point.

Ditching event replay removes the fragile determinism rules that plague workflow engines, making durable execution practical for long-running agentic workloads.
