---
title: Give Your Coding Agents a Memory You Own
source: hn
url: https://huggingface.co/blog/funes
date: '2026-09-04'
tags:
- agent-memory
- catchup
- coding-agents
- funes
- hn
- indexing
- traces
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49560290'
comments: https://news.ycombinator.com/item?id=49560290
why_read: This article highlights how coding agents lose context across sessions and
  introduces funes, a tool that provides a durable, indexed memory layer for agents.
  Readers will learn how to give their AI coding assistants persistent memory by leveraging
  their own session traces.
authors:
- David Corvoysier
---

Coding agents often suffer from amnesia, losing their reasoning and progress between sessions. Hugging Face has open-sourced Funes, a local-first memory layer that addresses this fundamental limitation.

Funes works by indexing and retrieving agent traces 
- every search, every error, every code change 
- transforming them into actionable, persistent memory. This allows agents to 'remember' past solutions and reasoning, drastically improving their continuity and performance across different tasks and machines.

This is not just a concept; Funes is a practical tool. It integrates with agents like Claude Code, Codex, and Hermes locally, ensuring data ownership and enabling a new paradigm for building more effective, context-aware AI assistants.
