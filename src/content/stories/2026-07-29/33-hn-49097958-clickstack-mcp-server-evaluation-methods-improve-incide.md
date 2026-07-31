---
authors:
- Brandon Pereira
comments: https://news.ycombinator.com/item?id=49097958
date: '2026-07-29'
depth_score: 8
hn_id: '49097958'
image: /infographics/33-hn-49097958.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- ai agents
- benchmarking framework
- catchup
- hn
- incident investigation
- mcp server
- observability tools
- sre agents
title: ClickStack MCP server evaluation methods improve incident investigation outcomes
url: https://clickhouse.com/blog/benchmarking-the-clickstack-mcp-server-with-hdx-evals
utility_score: 8
why_read: This post details how ClickHouse built and evaluated its MCP server, demonstrating
  significant improvements in AI agent-led incident investigation. Readers will understand
  the methodology behind benchmarking purpose-built observability tools against generic
  SQL interfaces for SRE agents.
---

Building effective AI agents for SRE goes beyond just picking a powerful LLM; it is about how you feed them context. ClickHouse developed a Model Context Protocol (MCP) server to give SRE agents high-level, structured primitives for incident investigation, moving past raw SQL.

This design significantly improved agent performance: they observed an 18 percent increase in root cause accuracy and remediation outcomes, a 26 percent reduction in tool calls, and 2.4 times more consistent results. The key insight is that tailored, high-level abstractions help agents reason more effectively, avoiding the noise of raw data.

To validate these results, they built `hdx-evals`, a reproducible benchmarking framework. This system seeds synthetic telemetry and runs Claude agents against different configurations, scoring outcomes blindly. This structured approach ensures that any changes to the MCP or underlying models lead to measurable improvements, not silent degradations.

This is a critical lesson in applied AI: it is not just about the model, but the scaffolding you build around it. Context engineering and rigorous evaluation are paramount for reliable agentic systems.

It is a blueprint for making agents truly useful in production.