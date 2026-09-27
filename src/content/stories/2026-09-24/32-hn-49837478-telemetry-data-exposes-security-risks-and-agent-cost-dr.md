---
title: Telemetry data exposes security risks and agent cost drivers
source: hn
url: https://www.promptarmor.com/resources/claude-cost-and-risk-otel-findings
date: '2026-09-24'
tags:
- agent-monitoring
- catchup
- claude-code
- hn
- mcp-servers
- opentelemetry
- plaintext-credentials
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49837478'
comments: https://news.ycombinator.com/item?id=49837478
why_read: Read this to understand the concrete security vulnerabilities and cost distributions
  that emerge when deploying autonomous LLM agents in production environments.
authors:
- sarelta
---

Autonomous coding agents generate extreme Pareto distributions in production cost and security exposure. An analysis of over 310,000 OpenTelemetry events across 30 days of agent usage revealed that just 4 percent of sessions accounted for 65 percent of the total model spend.

The culprit behind these runaway bills is uncontrolled agent autonomy. Half of all tool calls executed more than ten round-trip LLM steps after the initial user prompt, compounding generation costs through autonomous subagent spawning.

The telemetry highlighted severe data hygiene issues. Plaintext credentials appeared in 9 percent of model calls because terminal commands routinely printed secrets that were subsequently fed into context windows across thousands of follow-up requests. Untrusted external text entered 14 percent of turns, with Model Context Protocol servers serving as the primary attack vector.

Deploying agentic tooling without strict OpenTelemetry tracing and automated budget guardrails is an operational hazard. Instrumenting step limits and egress secret redaction must come before scaling autonomous loops.
