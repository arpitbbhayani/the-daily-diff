---
title: How token spend distribution differs between coding and legal agents
source: hn
url: https://lexifina.com/blog/agent-token-spend-distribution-coding-versus-legal-work
date: '2026-09-28'
tags:
- catchup
- coding-agents
- hn
- legal-agents
- reasoning-tokens
- token-consumption
- tool-definitions
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49885871'
comments: https://news.ycombinator.com/item?id=49885871
why_read: Read this to examine how domain-specific AI agents allocate token spend
  across system prompts, tool calls, and reasoning. It provides concrete empirical
  benchmarks comparing software engineering and legal workloads.
authors:
- alansaber
---

Context engineering requires very different strategies depending on whether an agent operates on source code or structured prose. A direct comparison between coding agents like Cursor and legal agents shows that tool definitions and system instructions consume 34.4 percent of context in legal workloads versus only 17 percent in coding environments.

Coding agents spend roughly 38 percent of their token budget on tool inputs and outputs because compilers, linters, and file readers stream extensive execution feedback. In contrast, legal agents spend nearly 25 percent of their total budget on pure reasoning tokens and require heavier tool scaffolding to maintain strict policy constraints.

Optimizing agent costs is not just about prompt compression, but about tailoring dynamic tool discovery to the exact input-output profile of your domain.
