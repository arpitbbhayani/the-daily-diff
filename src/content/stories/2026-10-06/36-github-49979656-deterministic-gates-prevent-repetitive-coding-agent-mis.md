---
title: Deterministic gates prevent repetitive coding agent mistakes with code
source: github
url: https://github.com/ulukaya/pawl
date: '2026-10-06'
tags:
- agent-harnesses
- catchup
- claude-code
- coding-agents
- deterministic-gates
- developer-tools
- github
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49979656'
comments: https://news.ycombinator.com/item?id=49979656
why_read: Learn how to replace brittle prompt-based instructions with deterministic,
  code-level checks to prevent coding agents from making repetitive errors.
authors:
- ulukaya
---

Prompt engineering alone cannot reliably prevent coding agents from executing destructive file modifications or running runaway shell commands. As context windows grow longer, negative prompt instructions lose reliability and waste valuable token budget on basic compliance.

Pawl solves this problem by inserting deterministic Python gates directly into the tool-execution loop of agent harnesses such as Claude Code and Codex. Instead of relying on LLM self-policing, it evaluates tool calls against static safety checks, blocking dangerous operations, cleaning up dirty inputs, and instantly passing provably read-only commands.

The entire mechanism relies solely on the Python standard library without incurring secondary model calls. It introduces only a minimal 144-token skill description into the prompt.

Moving safety guarantees from probabilistic prompt instructions to deterministic code harnesses is the most reliable way to harden agentic workflows for production environments.
