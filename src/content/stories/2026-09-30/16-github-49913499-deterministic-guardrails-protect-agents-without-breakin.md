---
title: Deterministic guardrails protect agents without breaking workflows
source: github
url: https://github.com/archestra-ai/OpenAPPA
date: '2026-09-30'
tags:
- agent-security
- ai-agents
- catchup
- data-flow-policy
- deterministic-guardrails
- github
- tool-use
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49913499'
comments: https://news.ycombinator.com/item?id=49913499
why_read: Learn how OpenAPPA intercepts communication between agents and tools to
  deterministically enforce data flow boundaries without breaking agent execution.
authors:
- simonpure
---

Most agent guardrails rely on secondary language models to inspect prompts, which introduces non-deterministic latency and frequent false positives. OpenAPPA introduces a deterministic policy engine that sits directly in the execution path between an autonomous agent and its tool interfaces.

Instead of parsing natural language intent at runtime, the engine verifies data flow authorization against explicit security boundaries before every single action. It evaluates whether specific data payloads are permitted to transit to target destinations, preventing data exfiltration and unauthorized external writes without breaking agent reasoning loops.

The implementation provides native adapters for environments like Claude Code alongside custom runtimes. Because policies execute deterministically as code rather than probabilistic model calls, runtime overhead remains negligible while eliminating prompt injection bypasses on tool calls.

Securing production agents requires deterministic access control boundaries rather than hoping another model catches malicious outputs.
