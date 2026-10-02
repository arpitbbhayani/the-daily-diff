---
title: Production coding agent runtimes rely on custom deterministic harnesses
source: hn
url: https://arxiv.org/abs/2609.00006
date: '2026-10-01'
tags:
- agent-architecture
- catchup
- coding-agents
- deterministic-retrieval
- harness-engineering
- hn
- llm-runtimes
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 9
hn_id: '49918994'
comments: https://news.ycombinator.com/item?id=49918994
why_read: Read this paper to understand the underlying runtime architecture and recurring
  design patterns across eleven production coding agents. You will learn why production
  agent runtimes favor hand-rolled asynchronous loops and deterministic retrieval
  over generic frameworks.
authors:
- Paul Barbaste
- Tristan Darrigol
- Germain Vu
- Tom Wiltberger
image: /infographics/01-hn-49918994.jpg
---

Across four million lines of code analyzed across eleven production coding agent harnesses, including Claude Code, Codex CLI, and Aider, two widespread industry assumptions completely fall apart. First, none of these systems import general-purpose agentic frameworks like LangChain or AutoGen. Second, none of them retrieve codebase context using vector embeddings.

Production harnesses avoid embedding-based vector search because deterministic retrieval (such as ripgrep, AST lookups, and precise path filtering) consistently delivers superior signal without bloating context windows. Every major production runtime relies on hand-rolled asynchronous execution loops and explicit state machines rather than generic framework abstractions.

Agent harnesses break down into seven core subsystems: prompt compilation, tool dispatch, context window pruning, sandbox execution, safety guardrails, state persistence, and extension protocols. System performance hinges on context budgeting and strict determinism rather than complex multi-agent orchestration layers.

If you are building AI agents for real-world engineering tasks, stop wiring generic orchestrators and start focusing on deterministic harness architecture.
