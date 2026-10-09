---
title: Running the Pi coding agent on Temporal recovers failed turns
source: hn
url: https://temporal.io/blog/the-immortal-life-of-pi-running-the-pi-coding-agent-on-temporal
date: '2026-10-08'
tags:
- catchup
- checkpointing
- coding-agents
- durable-execution
- hn
- temporal-workers
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '50011940'
comments: https://news.ycombinator.com/item?id=50011940
why_read: Learn how running the Pi coding agent on Temporal provides durable execution
  so interrupted tasks recover smoothly across machine failures.
authors:
- Moe Abadi
image: /infographics/05-hn-50011940.jpg
---

Running coding agents across multi-turn sessions exposes an obvious failure mode: if the worker host crashes halfway through an external tool call, state is lost or operations get dangerously duplicated. Building custom checkpointing harnesses often amounts to poorly reinventing a distributed workflow engine.

The team at Temporal addressed this by running the Pi coding agent directly on top of Temporal Workers. Using durable execution, tasks checkpoint state before progressing, submissions carry idempotency keys, and an effect sandwich records intent prior to external execution.

When an underlying host dies mid-turn, another worker picks up the exact execution point without blindly repeating interrupted tool calls. The state transitions remain completely deterministic.

Durable execution provides the missing production substrate that agentic workflows need to survive real-world infrastructure failures.
