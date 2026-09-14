---
title: Orcrist DSL for LLM-executed state machines manages failure paths proactively
source: github
url: https://github.com/simone20a/Orcrist
date: '2026-09-12'
tags:
- catchup
- coding-agent
- domain-specific-language
- error-handling
- github
- llm-agents
- state-machines
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49673528'
comments: https://news.ycombinator.com/item?id=49673528
why_read: Read this to understand how Orcrist, a DSL for LLM-driven state machines,
  enables robust autonomous coding agents by explicitly defining error handling and
  recovery paths, unlike traditional linear task lists.
authors:
- simone20a
---

Most LLM agents stumble not on intelligence, but on execution, especially when things go wrong. Orcrist tackles this head-on with a fascinating approach: LLM-driven state machines and a custom DSL.

This project introduces a Domain Specific Language (DSL) to define agent workflows as state machines, explicitly mapping out success paths, failure states, and retry budgets. Instead of an LLM blindly executing a series of steps, it operates within a predefined, robust structure that accounts for real-world complexities.

Imagine giving a coding agent a task. With Orcrist, it first writes an Orcrist machine for that task, grounded in the defined grammar, then executes it state by state. This dramatically improves reliability, as the system knows *what happens next* if a tool call fails or an output is unexpected.

This is a significant step towards truly production-ready AI agents, moving beyond basic prompt chaining to a more resilient, software engineering-oriented architecture.
