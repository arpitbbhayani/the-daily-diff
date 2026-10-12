---
title: Building an agent harness from scratch to pass intelligence tests
source: hn
url: https://notesbylex.com/building-an-agent-harness-from-scratch
date: '2026-10-11'
tags:
- agent-harness
- agentic-reasoning
- catchup
- coding-agents
- hn
- tool-calling
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50041006'
comments: https://news.ycombinator.com/item?id=50041006
why_read: Read this to understand the core architecture of an AI agent harness beyond
  just the underlying model. You will learn how to construct an agent execution loop
  from scratch to manage context and run tools.
authors:
- Lex Toumbourou
---

An agent harness is everything surrounding a model that determines whether an autonomous workflow actually functions in production. Stripped down to fundamentals, every agent begins with a simple loop: construct context, issue an inference request to the model, parse tool calls, execute actions, and append outputs back into history.

The real engineering challenge emerges once that loop touches real environments. Production harnesses require strict process sandboxing, deterministic state recovery, and disciplined token pruning. Without explicit boundaries, tool outputs rapidly overflow model context windows, degrade attention spans, and spike execution latency.

Treating the harness as a first-class distributed systems problem matters far more than swapping model checkpoints. When tool failure handlers and context bounds are designed with care, even modest models solve multi-step problems reliably.

A resilient harness turns raw language model calls into dependable software.
