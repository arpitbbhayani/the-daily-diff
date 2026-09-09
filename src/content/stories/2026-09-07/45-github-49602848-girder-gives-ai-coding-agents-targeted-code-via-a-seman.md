---
title: Girder gives AI coding agents targeted code via a semantic graph
source: github
url: https://github.com/dhishwasher/Girder
date: '2026-09-07'
tags:
- ai-coding-agents
- catchup
- github
- graph-addressed-edits
- impact-analysis
- mcp-server
- minimal-test-selection
- rust-binary
- semantic-graph
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49602848'
comments: https://news.ycombinator.com/item?id=49602848
why_read: This describes Girder, a tool that enhances AI coding agents by providing
  precise code snippets instead of entire files. It explains how Girder uses a living
  semantic code graph to enable capabilities like impact analysis and verified graph-addressed
  edits.
authors:
- dhishwasher
---

Coding agents often struggle with context, drowning in entire file contents when they only need specific function definitions or call graphs. This is a common bottleneck for effective AI coding. 

Girder offers a compelling solution by parsing your repository into a living semantic graph, detailing functions, definitions, and call edges. This allows agents to query for exactly the code they need, enabling precise impact analysis and minimal test selection.

Built as a static Rust binary and served over MCP, Girder moves beyond simple RAG, providing agents with structured intelligence about your codebase. This shift from raw files to a semantic graph means agents can make more accurate and verified edits, significantly boosting their practical utility.
