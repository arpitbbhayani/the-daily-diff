---
title: Terminal coding agent writes one program, not multiple tools
source: github
url: https://github.com/andreylukin/bough
date: '2026-09-15'
tags:
- catchup
- code-generation
- developer-tools
- github
- large-language-models
- terminal-coding-agent
- unified-program-execution
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49711939'
comments: https://news.ycombinator.com/item?id=49711939
why_read: This describes a novel approach to coding agents where the model writes
  a single, comprehensive program to execute tasks, offering a more efficient alternative
  to sequential tool calls. Readers will understand how this paradigm allows for complex
  operations like patching and testing in one step, branching on results directly
  in code.
authors:
- Andrey Lukin
---

Most AI coding agents operate by making sequential tool calls, one action at a time. However, a new agent called Bough takes a radically different approach: the model writes one complete program (e.g., in JavaScript) that executes all necessary steps, including patching, testing, and reviewing.

This 'program synthesis' paradigm allows the agent to branch on test results within its own code, dramatically reducing round trips and improving efficiency. It is a significant shift from the typical REPL-style agent execution and could lead to more robust and less error-prone autonomous coding systems.

If you are building LLM-powered agents, especially for code generation or modification, this architectural idea challenges current best practices and offers a compelling alternative to explore.
