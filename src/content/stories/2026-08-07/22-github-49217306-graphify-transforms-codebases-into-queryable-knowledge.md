---
title: Graphify transforms codebases into queryable knowledge graphs
source: github
url: https://github.com/Graphify-Labs/graphify
date: '2026-08-07'
tags:
- abstract-syntax-tree
- catchup
- codebase
- deterministic-parsing
- github
- knowledge-graph
- llm-skill
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49217306'
comments: https://news.ycombinator.com/item?id=49217306
why_read: This project introduces a method for converting diverse codebase components
  into a queryable knowledge graph, facilitating advanced code analysis. It highlights
  a deterministic AST parsing approach, avoiding vector stores for explaining every
  edge.
authors:
- potatobox
---

Facing astronomical token costs with your coding agents? Graphify, a new open-source project, turns entire codebases into queryable knowledge graphs.

It works by performing local, deterministic Abstract Syntax Tree (AST) parsing on your code, docs, and even SQL schemas. This structured representation allows coding LLMs like Claude Code and Gemini CLI to access highly relevant context without dumping a massive amount of raw text, leading to less token use.

What makes this unique is the 'no vector store' approach, suggesting a different path from traditional RAG for code. This tool could be a game-changer for developer productivity, letting your AI assistants understand your project with unprecedented depth and efficiency.
