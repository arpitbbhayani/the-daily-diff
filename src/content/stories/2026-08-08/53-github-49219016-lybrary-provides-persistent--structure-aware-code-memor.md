---
title: lybrary provides persistent, structure-aware code memory for AI agents
source: github
url: https://github.com/vibhu-dixit/lybrary
date: '2026-08-08'
tags:
- ai-coding-agents
- ast-aware-chunking
- catchup
- code-memory
- github
- persistent-memory
- semantic-search
- token-efficiency
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49219016'
comments: https://news.ycombinator.com/item?id=49219016
why_read: This introduces lybrary, a tool that solves the problem of AI coding agents
  repeatedly re-reading codebases, which wastes tokens and context. Readers will learn
  how lybrary uses AST-aware chunking and persistent memory to enhance AI agent efficiency.
authors:
- Vibhu Dixit
---

AI coding agents often fall short not due to lack of intelligence, but poor context management. They re-read your entire codebase every session, burning tokens and hitting context limits. Lybrary offers a brilliant solution: persistent, AST-aware code memory.

This tool indexes your repository using tree-sitter for precise, structure-aware chunking, ensuring functions are never split. A background daemon keeps the index fresh, and agents can semantically query this memory via an MCP server, drastically cutting token usage.

Imagine reducing a 4,000-token codebase scan to just 180 tokens for a query. This is a massive leap for practical agentic AI, turning token-hungry LLMs into efficient coding partners. This is context engineering done right.
