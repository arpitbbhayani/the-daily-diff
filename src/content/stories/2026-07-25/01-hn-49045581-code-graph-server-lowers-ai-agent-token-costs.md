---
authors:
- autobe
comments: https://news.ycombinator.com/item?id=49045581
date: '2026-07-25'
depth_score: 8
hn_id: '49045581'
image: /infographics/01-hn-49045581.jpg
interest_score: 9
novelty_score: 9
section: ai
source: hn
tags:
- ai-agents
- catchup
- code-graph
- code-indexing
- hn
- mcp-server
- token-costs
- ttsc-graph
- typescript-compiler
title: Code graph server lowers AI agent token costs
url: https://github.com/samchon/ttsc/tree/master/packages/graph
utility_score: 9
why_read: This text explains how the @ttsc/graph server provides AI agents with a
  structured code graph, significantly reducing token costs for code understanding
  and question answering. It highlights the efficiency gains compared to traditional
  file-reading methods.
---

Coding agents often struggle with massive token costs and context windows when trying to understand large codebases. A new approach uses a TypeScript compiler-resolved knowledge graph to reduce AI tokens by about 90 percent.

Instead of feeding raw source files, an MCP server provides agents with a graph of declarations, relationships, and signatures. This allows the agent to query precise code structures, bypassing the need to read entire file bodies. It dramatically cuts down on token usage.

For example, `codex/gpt-5.6-sol` reduced onboarding task costs by 96 percent using this method. This is a game-changer for building efficient and scalable AI agents that interact with complex code.