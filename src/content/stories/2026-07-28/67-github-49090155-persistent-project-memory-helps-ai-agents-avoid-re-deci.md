---
authors:
- KanishkNoir
comments: https://news.ycombinator.com/item?id=49090155
date: '2026-07-28'
depth_score: 8
hn_id: '49090155'
image: /infographics/67-github-49090155.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- ai-agents
- catchup
- coding-sessions
- context-management
- event-sourcing
- fail-open-design
- github
- lexical-retrieval
- persistent-memory
title: Persistent project memory helps AI agents avoid re-deciding
url: https://github.com/KanishkNoir/cognikernel
utility_score: 9
why_read: Read this to understand a novel approach to providing persistent, structured
  memory for AI coding agents. Learn how CogniKernel uses event-sourcing and lexical
  retrieval to manage agent context efficiently without an LLM in the loop.
---

One of the biggest frustrations with AI coding agents is their tendency to "forget" or re-decide what you have already established. CogniKernel proposes a brilliant solution: persistent, structured project memory.

This is not another vector-database wrapper or an LLM trying to summarize conversations. Instead, CogniKernel uses an event-sourced, typed, fail-open log with lexical-primary retrieval and write-time consolidation. Crucially, it achieves this without an LLM in the loop for memory extraction, saving tokens and ensuring reliability.

This architectural approach is a game-changer for building truly effective and efficient AI agents across sessions and platforms. It is a deep dive into solving a core challenge in agentic AI.