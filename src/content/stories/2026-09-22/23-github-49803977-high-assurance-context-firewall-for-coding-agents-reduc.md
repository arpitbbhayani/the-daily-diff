---
authors:
- mikemo88
comments: https://news.ycombinator.com/item?id=49803977
date: '2026-09-22'
depth_score: 9
hn_id: '49803977'
image: /infographics/23-github-49803977.jpg
interest_score: 8
novelty_score: 7
section: ai
source: github
tags:
- catchup
- coding-agents
- context-firewall
- github
- high-assurance
- mcp-server
- token-mass-reduction
- token-pruning
- tree-sitter-ast
title: High-assurance context firewall for coding agents reduces token mass
url: https://github.com/heuristicolab/ctxfw
utility_score: 8
why_read: This tool offers a high-assurance context firewall and pruning server for
  coding agents, significantly reducing token usage. Readers will learn about a novel
  approach to optimizing AI agent context through AST-based filtering and token mass
  reduction.
---

Coding agents often drown in excessive context, leading to higher token costs and degraded performance. Ctxfw introduces an in-memory Tree-sitter AST compactor and firewall that intelligently prunes code context.

This tool can reduce token mass by an impressive 72.4 percent. Instead of just chunking text, Ctxfw understands code structure via ASTs, ensuring that only the most relevant portions of the code are passed to the agent. This is not just about saving tokens; it is about providing cleaner, more focused context.

Optimizing context is a critical challenge in building effective coding agents. This project offers a deep technical dive into a practical solution that every engineer working with LLMs for code generation or analysis should investigate. Better context leads to better agent reasoning.

This is smart context engineering, directly improving agent performance.