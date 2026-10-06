---
title: Spill stores large tool results in local DuckDB tables
source: github
url: https://spill-ai.github.io/spill/
date: '2026-10-05'
tags:
- ai-agents
- catchup
- context-window
- duckdb
- github
- mcp
- sql
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49966737'
comments: https://news.ycombinator.com/item?id=49966737
why_read: Learn how Spill intercepts oversized tool outputs to reduce token usage
  by converting raw JSON payloads into queryable DuckDB tables.
authors:
- yusufaytas
image: /infographics/08-github-49966737.jpg
---

Pumping massive JSON payloads directly into an LLM context window quickly exhausts token budgets and degrades reasoning quality. Tool calls returning thousands of rows of structured data often cause models to hallucinate or miss the specific signals they need.

Spill provides an elegant architectural fix by intercepting Model Context Protocol (MCP) responses larger than 32 KiB. Instead of passing 50,000 raw JSON tokens downstream, it loads the records directly into a local DuckDB table and hands the agent a lightweight schema descriptor.

The agent then executes focused SQL queries against the local database to aggregate, filter, and extract only the necessary data. This local-first pattern dramatically cuts token consumption and improves context engineering for agentic workflows.
