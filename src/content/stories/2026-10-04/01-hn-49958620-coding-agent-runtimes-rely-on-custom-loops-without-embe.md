---
title: Coding agent runtimes rely on custom loops without embeddings
source: hn
url: https://arxiv.org/abs/2609.00006
date: '2026-10-04'
tags:
- agent-runtimes
- catchup
- coding-agents
- design-patterns
- deterministic-retrieval
- harness-engineering
- hn
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49958620'
comments: https://news.ycombinator.com/item?id=49958620
why_read: Read this to understand the concrete architectural patterns powering real-world
  coding agent runtimes and why production systems eschew generic agent frameworks.
authors:
- Paul Barbaste
- Tristan Darrigol
- Germain Vu
- Tom Wiltberger
image: /infographics/01-hn-49958620.jpg
---

Most agent discussions obsess over the underlying model weights, but production success is almost entirely determined by harness engineering. A comprehensive source code audit of eleven production coding agents—including Claude Code, Codex CLI, and Aider—revealed crucial architectural insights across four million lines of code.

Surprisingly, none of these production systems import general-purpose agentic frameworks like LangChain or AutoGen. Every single one runs on hand-rolled, custom asynchronous loops tailored strictly to the execution environment. Furthermore, none of them use vector embeddings for repository retrieval; they rely on deterministic search, AST parsing, and ripgrep style tools for context construction.

The real differentiator in production coding agents is not a fancy multi-agent abstraction, but disciplined harness design around context budgeting, deterministic tool execution, and robust error recovery loops.

Great models fail without disciplined harnesses, and simple deterministic architectures consistently beat complex agent frameworks.
