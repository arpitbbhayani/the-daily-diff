---
title: Symbol-level codebase retrieval MCP server avoids reading whole files
source: github
url: https://github.com/amritessh/scalpel-mcp
date: '2026-09-15'
tags:
- catchup
- codebase-retrieval
- github
- mcp-server
- scalpel-mcp
- symbol-level-retrieval
- token-efficiency
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49714713'
comments: https://news.ycombinator.com/item?id=49714713
why_read: This tool offers a novel approach to codebase retrieval by providing symbol
  definitions and usages without full file reads, significantly reducing token consumption.
  Readers will learn how to improve the efficiency of code-understanding agents.
authors:
- amritessh
---

The biggest bottleneck for AI coding agents is often not the model itself, but how it consumes context. We cram entire files into the prompt, hoping the agent will find what it needs, but this leads to massive token waste and, crucially, worse performance.

Scalpel offers a surgical solution: give the agent get_symbol(name) instead of a whole file. This tool retrieves only the definition span and its usages, dramatically cutting token usage by up to 90% while achieving the same accuracy as broader methods.

This is a prime example of effective context engineering. It teaches a vital lesson: more context is not always better context. For engineers building or using coding agents, this approach is a game-changer for cost efficiency and agent reliability.
