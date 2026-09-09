---
title: Ripwire helps AI coding agents find context without reading the entire repository
source: github
url: https://github.com/redhat-et/ripwire
date: '2026-09-07'
tags:
- ai-coding-agents
- call-graph
- catchup
- github
- repository-context
- ripwire
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49593050'
comments: https://news.ycombinator.com/item?id=49593050
why_read: This project introduces Ripwire, a tool designed to provide AI coding agents
  with a structured map of repositories. Readers will learn how Ripwire enables agents
  to quickly find relevant context and verify their work, reducing token usage and
  improving code quality.
authors:
- guessmyname
---

Coding agents often struggle with context overload, drowning in too many tokens and irrelevant information from large repositories. Ripwire, a C++23 CLI and MCP server, offers a powerful solution by providing a ranked, deterministic call graph of a repository to your agent, effectively acting as a 'ripgrep for AI context.'

This tool enables agents to understand the codebase structure and identify relevant areas without having to read every file. This precision dramatically cuts down on token usage, with signatures being 74.7% fewer bytes than full bodies, while simultaneously improving task success rates by feeding the agent only what it truly needs.

It is a significant step towards more efficient and effective autonomous coding, offering a practical blueprint for improving how agents interact with complex codebases. If you are building agentic systems, this changes how you approach context management.
