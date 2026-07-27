---
authors:
- BETAER-08
comments: https://news.ycombinator.com/item?id=49033424
date: '2026-07-24'
depth_score: 8
hn_id: '49033424'
image: /infographics/40-hn-49033424.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- air-gapped-security
- ast-parsing
- catchup
- codebase-ai-context
- github
- local-embeddings
- mcp-server
- single-binary-server
title: amdb turns your codebase into local AI context for secure use
url: https://github.com/BETAER-08/amdb
utility_score: 9
why_read: This describes amdb, a tool enabling secure, local AI context generation
  from codebases. You will learn how it functions as a zero-runtime, single-binary
  server for environments needing strict data locality.
---

Building AI coding assistants often hits a wall with context. This new project, Amdb, offers a single-binary Rust server that turns your codebase into AI context, entirely on your machine. No code leaves your system.

It achieves this with deep technical parsing: Abstract Syntax Trees, call graph analysis, and local embeddings. This means highly relevant, structured context for your LLM, delivered efficiently and securely.

This approach is a game-changer for air-gapped environments, CI containers, or regulated industries where sending code to cloud AI services is simply not an option. It is pragmatic system design focused on security and performance.

You can install it with a simple cargo install amdb and get started immediately, indexing your repository and exposing the context as an MCP server. This tool represents a significant step forward for local-first AI agent development.