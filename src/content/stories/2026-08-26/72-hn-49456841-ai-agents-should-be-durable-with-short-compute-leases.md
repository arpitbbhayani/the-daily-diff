---
title: AI agents should be durable with short compute leases, not long-lived processes
source: hn
url: https://julin.ai/2026/08/26/durable-agents/
date: '2026-08-26'
tags:
- ai-agents
- catchup
- distributed-systems
- durability
- hn
- resource-efficiency
- state-management
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49456841'
comments: https://news.ycombinator.com/item?id=49456841
why_read: This article explains why building AI agents as long-running processes is
  inefficient and prone to failure. Readers will learn about a better model that separates
  agent state from temporary compute processes, enhancing durability and resource
  utilization.
authors:
- Ju Lin
---

Treating AI agents as long-running processes leads to resource waste and expensive failures. A deployment, crash, or even a machine restart can destroy significant progress, making agents unreliable for real-world tasks.

The critical insight is to separate the agent's execution from its durable state. Instead of one agent equaling one long-lived process, an agent should be durable state combined with a sequence of short compute leases. The worker becomes temporary; it performs a short burst of work, checkpoints its state, and then disappears.

This design pattern, familiar from distributed systems, significantly improves fault tolerance, resource efficiency, and scalability for AI agent systems. It allows agents to wait for external events like human approval or CI builds without tying up compute resources, ensuring progress persists through interruptions. This is how you build production-ready agents.
