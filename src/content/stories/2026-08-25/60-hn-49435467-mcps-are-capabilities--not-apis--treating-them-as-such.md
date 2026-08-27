---
title: MCPs are capabilities, not APIs; treating them as such is costly
source: hn
url: https://shiftmag.dev/mcps-arent-apis-stop-treating-them-like-one-11420/
date: '2026-08-25'
tags:
- ai-agents
- api-design
- catchup
- context-window
- hn
- model-context-protocol
- token-cost
- tool-management
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49435467'
comments: https://news.ycombinator.com/item?id=49435467
why_read: This article explains why Model Context Protocols (MCPs) should be treated
  as capabilities, not APIs, to avoid excessive token costs and performance issues
  in AI agents. Readers will learn how to optimize MCP server design for efficiency.
authors:
- Toni Babic
---

Most AI agent frameworks fail not because the underlying model is weak, but because the harness feeds it the wrong context at the wrong time. A deep dive into Model Context Protocols (MCPs) reveals that simply adding more tools can drastically inflate token usage and degrade agent performance. Every tool's parameters, descriptions, and enum values are loaded into the context window with each request. 

This is not a theoretical concern. One real example cited saw just two MCP servers inject 13,000 tokens into the context, equating to roughly 17 A4 pages of text sent with every single request. This dramatically increases inference costs and causes 'choice paralysis' for the model, making it less effective. 

The solution is not more powerful models, but better context engineering. Limiting MCP servers to 10-15 lean tools, grouping tools by domain, and being ruthless about parameter counts can cut token usage, improve latency, and boost agent success rates. This means designing capabilities, not just mapping 1:1 REST API endpoints. You should design your agent's tool access with the same rigor you apply to system APIs. Your context window is your agent's most precious resource; manage it wisely.
