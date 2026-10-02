---
title: Deterministic guardrails that do not break agents
source: github
url: https://github.com/archestra-ai/OpenAPPA
date: '2026-10-01'
tags:
- ai-agents
- catchup
- deterministic-guardrails
- github
- policy-engine
- tool-security
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49918330'
comments: https://news.ycombinator.com/item?id=49918330
why_read: Understand how deterministic guardrails can mediate agent-tool interactions
  to safely control data flow without breaking agent capabilities.
authors:
- archestra-ai
---

Securing LLM agents by inspecting intermediate prompts is an unreliable defense against data exfiltration and prompt injection. When an agent has access to multiple disparate tools, relying on the model itself to enforce permissions consistently fails in edge cases.

OpenAPPA introduces a deterministic proxy layer that sits directly between the agent runtime and its tool execution interfaces. Instead of asking an LLM whether a tool call is safe, it enforces explicit data flow policies at the protocol boundary before any action executes.

The engine inspects where the data came from, checks the requested destination, and validates whether that specific flow is authorized. If a prompt injection tricks the agent into reading private repository files and posting them to an external endpoint, the runtime intercepts the outgoing request and terminates the flow.

Building deterministic guardrails at the transport level is a necessary design pattern for autonomous agents operating in production environments.
