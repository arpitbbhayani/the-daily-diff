---
authors:
- Ajay Kumar
comments: https://news.ycombinator.com/item?id=49054002
date: '2026-07-26'
depth_score: 8
hn_id: '49054002'
image: /infographics/65-hn-49054002.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-agents
- catchup
- enterprise-gateway
- hallucination
- hn
- human-in-the-loop
- model-context-protocol
- production-scaling
title: Running Model Context Protocol in Production with Enterprise Gateways
url: https://www.getreadyforagents.com/podcast/ajay-kumar-mcp-in-production-ediy/
utility_score: 9
why_read: This discussion provides practical insights into deploying the Model Context
  Protocol and AI agents in production environments. Readers will learn about architectural
  patterns, human-in-the-loop importance, and scaling strategies for agentic systems.
---

Scaling AI agents in enterprise environments is not just about the models; it is about robust infrastructure and governance. This podcast dives into the practical realities of deploying agents with the Model Context Protocol (MCP).

You will learn about dedicated enterprise MCP gateways, which employ a registry and search-and-invoke pattern to allow agents to discover and call external services deterministically. This architecture is crucial for managing hundreds of services and cutting token costs.

A key takeaway is the necessity of human-in-the-loop elicitation, especially when agents can initiate transactions or spend money, addressing control and accountability gaps in current LLM providers. Hallucination is also clarified as an agent reasoning problem, not an MCP protocol issue. This offers invaluable guidance for moving beyond pilot projects to true production readiness.