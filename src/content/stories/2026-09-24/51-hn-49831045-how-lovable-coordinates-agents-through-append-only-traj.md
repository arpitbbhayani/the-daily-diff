---
title: How Lovable coordinates agents through append-only trajectory histories
source: hn
url: https://lovable.dev/blog/how-lovable-agents-work-together
date: '2026-09-24'
tags:
- agent-orchestration
- catchup
- context-management
- durable-inboxes
- hn
- multi-agent-systems
- trajectory-system
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49831045'
comments: https://news.ycombinator.com/item?id=49831045
why_read: Learn how Lovable designs scalable multi-agent coordination by separating
  event histories, context assembly, and execution triggers.
authors:
- oscarfr
---

Scaling multi-agent architectures breaks down quickly when you treat conversation history directly as an agent prompt. At high concurrency, appending state, managing agent inboxes, and invoking execution must be decoupled.

Lovable processes roughly 500 million trajectory events across 2.6 million turns daily by separating three concerns: what happened, what the agent needs to know, and when the agent should run.

Instead of passing mutable chat logs, the system writes events to an append-only, forkable trajectory tree. Each agent derives its specific model context from that tree dynamically, while communication flows through durable inboxes with asynchronous activations.

Decoupling event history from prompt construction is essential for resilient, asynchronous multi-agent coordination.
