---
title: Modeling durable agent harnesses as statecharts that checkpoint each step
source: hn
url: https://scxmljs.tinyactors.dev/demos/pi-durable/
date: '2026-10-03'
tags:
- agent-harness
- catchup
- checkpoints
- durable-execution
- fault-tolerance
- hn
- statecharts
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49941322'
comments: https://news.ycombinator.com/item?id=49941322
why_read: Read this to understand how statecharts and step-level checkpoints enable
  crash-resilient execution for large language model agents. You will learn how to
  structure tool environments and tasks so interrupted operations can seamlessly recover
  from storage.
authors:
- handfuloflight
---

Building reliable LLM agents requires treating long-running tool interactions as crash-resilient state machines rather than simple linear loops. When an agent execution crashes mid-invocation, restarting from scratch wastes expensive context tokens and risks repeating non-idempotent tool side effects.

Pi Durable approaches this problem by modeling the agent harness as an explicit SCXML statechart. Every discrete step, whether it is requesting a model completion or executing an external tool in a specific directory, represents a task that persists a storage checkpoint before progressing.

If the host process terminates unexpectedly, a recovery process inspects unfinished tasks in shared storage and resumes from the exact boundary. Incomplete model calls are cleanly reissued while interrupted tool executions can be selectively evaluated for safe retries without corrupting conversation history.

Adopting formal statecharts for agent harnesses brings the proven fault-tolerance guarantees of durable workflow engines directly to AI agent orchestration.
