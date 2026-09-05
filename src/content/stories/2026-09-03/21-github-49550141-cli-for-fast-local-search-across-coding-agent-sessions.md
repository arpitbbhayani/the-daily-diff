---
title: CLI for fast local search across coding agent sessions
source: github
url: https://github.com/ctxrs/ctx/blob/main/README.md
date: '2026-09-03'
tags:
- catchup
- coding-agents
- decision-recovery
- developer-cli
- github
- session-search
- transcript-analysis
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49550141'
comments: https://news.ycombinator.com/item?id=49550141
why_read: Read this to understand how 'ctx' and 'ctx pro' address the challenge of
  inaccessible coding agent session logs. You will learn how making these transcripts
  searchable improves agent decision-making, auditing, and ability to resume complex
  tasks by leveraging past work.
authors:
- luca-ctx
---

You rely on coding agents, but when you look at a line of agent-generated code, do you understand why it is there? The "git blame" for human code gives you context, but agent decisions are often buried in opaque, verbose session logs, making debugging and auditing nearly impossible.

This is where ctx steps in. It is an open-source CLI designed for fast local search across all your past coding agent sessions. Think of it as a comprehensive history book for your agents' thought processes.

With its pro add-on, ctx delivers a "git blame for agent sessions" capability. You can point to any line of code, file, or commit, and instantly retrieve the original agent transcript: the exact messages, tool calls, and even the constraints and assumptions that led to that code.

This tool bridges the crucial gap between agent output and human understanding. It empowers you to audit decisions, recover failed approaches, and ensure your agents are truly aligned with your project goals, making them indispensable collaborators.

Never wonder "why did the agent do that?" again.
