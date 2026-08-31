---
title: Subs is an unprivileged agent harness for cloud operations
source: github
url: https://github.com/substructureai/subs
date: '2026-08-29'
tags:
- agent-customization
- agent-durability
- agent-harness
- catchup
- cloud-agents
- github
- llm-calls
- mcp-servers
- subagents
- subs
- unprivileged-execution
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49486370'
comments: https://news.ycombinator.com/item?id=49486370
why_read: This text introduces Subs, an agent harness designed for the cloud, which
  provides an unprivileged agent loop and robust operational features. Readers will
  learn how Subs simplifies building and deploying customizable, durable agents with
  managed LLM calls and subagent capabilities.
authors:
- xwil
---

Building AI agents in production often means grappling with reliability and orchestration. Many frameworks get the basics right, but few offer a truly cloud-native, robust harness.

This open-source project provides an agent harness designed specifically for the cloud, handling crucial aspects like durability, retries, timeouts, and managing tool execution via MCP servers. It also supports complex scenarios like session branching and subagents, which are vital for sophisticated agentic workflows.

This is not just another agent framework; it is an opinionated infrastructure solution that tackles the hard problems of deploying autonomous agents at scale. If you are serious about moving agents from experiments to production, understanding this architecture can save you significant effort.
