---
title: Claude code hooks provide deterministic guarantees around probabilistic agents
source: hn
url: https://blakecrosley.com/blog/claude-code-hooks-explained
date: '2026-09-23'
tags:
- agent-governance
- catchup
- claude-code
- deterministic-control
- hn
- hooks
- lifecycle-events
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49812522'
comments: https://news.ycombinator.com/item?id=49812522
why_read: Read this to understand how Claude Code hooks create an enforceable, deterministic
  boundary around probabilistic AI coding agents. You will learn the core lifecycle
  events, input/output contracts, and patterns required to reliably control agent
  execution.
authors:
- northbridgedev
---

Prompt instructions in Markdown files are probabilistic suggestions that coding agents can easily ignore under heavy context. Claude Code hooks provide the missing deterministic boundary by executing shell commands, HTTP requests, or Model Context Protocol tools at fixed lifecycle events.

Every hook receives JSON via standard input and communicates its decision through exit codes or standard output. A key operational detail is the exit code contract: exit code 0 allows the action, exit code 2 explicitly blocks it, and exit code 1 does not block execution at all. Misunderstanding exit code 1 is the most common pitfall when building guardrails.

Placing deterministic linters, test suites, and permission checks inside PreToolUse and Stop events ensures that your invariants remain intact regardless of model drift.
