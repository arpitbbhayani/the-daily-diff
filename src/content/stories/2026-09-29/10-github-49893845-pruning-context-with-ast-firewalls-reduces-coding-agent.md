---
title: Pruning context with AST firewalls reduces coding agent token bloat
source: github
url: https://github.com/heuristicolab/ctxfw
date: '2026-09-29'
tags:
- ast-pruning
- catchup
- coding-agents
- context-firewall
- github
- model-context-protocol
- token-optimization
- tree-sitter
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49893845'
comments: https://news.ycombinator.com/item?id=49893845
why_read: Learn how in-memory AST pruning and context firewalling prevent token exhaustion
  and context drift in autonomous coding agents.
authors:
- heuristicolab
image: /infographics/10-github-49893845.jpg
---

Autonomous coding agents frequently fail because token bloat degrades attention over long trajectories. Dumping full files or unpruned dependencies into the prompt triggers context drift, increases latency, and degrades reasoning accuracy.

Ctxfw tackles this problem deterministically by running an in-memory Tree-Sitter AST firewall as a Model Context Protocol (MCP) server. Rather than passing raw file dumps, it prunes structural code down to essential syntax boundaries and signatures before feeding them to the model, reducing token overhead by up to 72 percent.

Treating context pruning as a deterministic compiler problem rather than asking an LLM to summarize code yields lower latency, lower inference costs, and higher task completion rates for coding agents.
