---
title: Pi durable provides a resilient harness for agentic applications
source: hn
url: https://earendil.com/posts/pi-durable/
date: '2026-10-01'
tags:
- agent-harness
- agentic-applications
- catchup
- fault-tolerance
- hn
- long-running-agents
- pi-durable
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49925969'
comments: https://news.ycombinator.com/item?id=49925969
why_read: Learn how Pi Durable provides a fault-tolerant harness to support long-running,
  multi-user AI agent workflows beyond traditional single-terminal environments.
authors:
- Earendil Engineering
image: /infographics/04-hn-49925969.jpg
---

Most coding agents run inside a local terminal process. If the machine disconnects, the host crashes, or the context window overflows, the entire execution state is lost, leaving developers to piece together what happened.

Pi Durable approaches this problem by separating the agent reasoning logic from the execution harness. A durable harness combines persistent storage primitives with the orchestration machinery required to maintain indefinitely long model conversations. It allows agents to survive process crashes, resume cleanly across distributed infrastructure, and accept asynchronous steering inputs from multiple human collaborators.

Treating agent execution as a stateful, fault-tolerant distributed system rather than a transient CLI script is essential for building reliable autonomous workflows. Designing for durability at the harness layer makes agentic systems resilient against unexpected hardware failures and long-running job disruptions.
