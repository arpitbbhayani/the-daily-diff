---
title: Architecting an async-first agent harness for reliable execution
source: github
url: https://github.com/unreallabsai/unreal-agent
date: '2026-09-23'
tags:
- agent-harness
- async-first
- catchup
- github
- idempotency
- session-management
- tool-translator
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49812351'
comments: https://news.ycombinator.com/item?id=49812351
why_read: Read this to understand the core architectural primitives behind asynchronous
  agent harnesses. You will learn how event loops handle tool translation, input deduplication,
  and execution tracking.
authors:
- Unreal Labs
---

Building resilient AI agent architectures requires treating agent execution as a stateful distributed workflow rather than a simple request loop. Most common agent frameworks tightly couple tool parsing with synchronous I/O operations, which causes the entire coordinator loop to block when external services experience latency or temporary downtime.

Unreal Agent addresses this failure mode by enforcing a strict separation between tool translation and operation execution. When a model produces a tool call, a dedicated translator synchronously validates the schema and converts the request into discrete operations on the coordinator event loop without performing any network I/O. The operations are then dispatched asynchronously while the coordinator remains responsive to external signals, cancellation requests, and incoming stream events.

In addition to decoupled execution, the harness introduces session-scoped in-memory deduplication across crash inputs and control events. Session histories operate as append-only logs that can be safely forked, making multi-turn rollbacks and deterministic replays trivial to implement in production environments.

Decoupling tool intent from asynchronous execution turns messy agent workflows into reliable and inspectable state machines.
