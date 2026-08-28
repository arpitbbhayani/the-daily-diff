---
title: AI coding agents with MCP waste tokens before processing prompts
source: hn
url: https://blocks.ai/blog/mcp-vs-cli-context-window-cost
date: '2026-08-26'
tags:
- ai-coding-tools
- catchup
- cli
- coding-agents
- context-window
- hn
- mcp
- operational-cost
- token-consumption
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49449997'
comments: https://news.ycombinator.com/item?id=49449997
why_read: This article explains why MCP interfaces for AI coding agents incur significant
  token costs, even before the agent processes a user's prompt, making efficient tool
  selection critical for cost management.
authors:
- kayleykiwi
---

AI coding agents are powerful, but their context windows are a finite, expensive resource. Many developers are unknowingly burning tens of thousands of tokens just for tool descriptions before the agent even sees the user's prompt.

This piece highlights that a standard GitHub MCP server can consume roughly 26,000 tokens – about $0.16 per session – just for initializing tools. This cost scales rapidly, hitting $1,600 daily for 10,000 automated sessions. The issue is that extensive tool schemas, while descriptive, hog valuable context.

The key takeaway is that better context engineering, such as favoring CLI-like tool descriptions over verbose MCP schemas, can cut token usage dramatically. Benchmarks show MCP can be 4x to 32x more token-intensive. This is not about a smarter model, but about feeding it the right context efficiently.

Optimizing your agent's context window is crucial for both cost and performance.
