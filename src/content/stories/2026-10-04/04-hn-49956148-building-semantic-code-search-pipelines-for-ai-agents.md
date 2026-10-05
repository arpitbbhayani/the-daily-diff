---
title: Building semantic code search pipelines for AI agents
source: hn
url: https://blog.jetbrains.com/ai/2026/09/building-a-rag-pipeline-for-semantic-code-search-a-developer-diary-and-field-notes/
date: '2026-10-04'
tags:
- catchup
- code-chunking
- coding-agents
- hn
- rag-pipelines
- semantic-code-search
- vectorization
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49956148'
comments: https://news.ycombinator.com/item?id=49956148
why_read: Learn why traditional keyword search fails coding agents and how to build
  a robust semantic code search pipeline to retrieve precise context.
authors:
- Adam Malek
- Ashot Kazaryan
image: /infographics/04-hn-49956148.jpg
---

Grepping a repository is rarely enough when you are providing context to an autonomous coding agent. Keyword matches do not capture semantic relationships, and dumping too many irrelevant lines quickly exhausts token budgets while degrading agent accuracy.

JetBrains built Air Context, a production RAG pipeline specifically designed to supply coding agents with precise, citable repository evidence. In their architectural breakdown, they share the engineering trade-offs required around parsing, AST-aware chunking, and code vectorization.

Instead of treating source code like plain text prose, effective code search pipelines must account for syntax boundaries, dependency graphs, and symbol scopes. Splitting files cleanly at semantic boundaries prevents embedding models from losing critical context across function signatures.

If you are building developer tools or internal coding assistants, this breakdown provides a solid blueprint for indexing complex codebases reliably.
