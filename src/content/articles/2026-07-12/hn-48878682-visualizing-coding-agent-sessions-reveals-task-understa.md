---
title: Visualizing coding agent sessions reveals task understanding
source: hn
url: https://github.com/cosmtrek/mindwalk
date: '2026-07-12'
tags:
- agent-understanding
- catchup
- codebase-mapping
- coding-agents
- hn
- session-replay
- visualization
score: 160
hn_id: '48878682'
comments: https://news.ycombinator.com/item?id=48878682
why_read: This tool provides a novel way to visualize how AI coding agents interact
  with a codebase. Readers will learn how to intuitively grasp an agent's understanding
  and operational footprint during development tasks.
authors:
- cosmtrek
author: cosmtrek
---

Debugging AI agent behavior is often a black box, but Mindwalk changes that. This tool provides a unique 3D visualization of agent sessions on your codebase, showing exactly where an agent searched, read, and edited files. It transforms opaque logs into a glowing map, revealing the agent's "understanding" of a task at a glance.

Think about the implications for developer productivity. Instead of sifting through raw JSONL logs, you can visually trace an agent's footprint. This helps you quickly assess if the agent's actions align with the task scope you intended. It is like having X-ray vision into your AI's coding process.

Mindwalk runs locally with a single Go binary, processing Claude Code and Codex session logs without your data ever leaving your machine. This commitment to privacy is crucial for sensitive codebases.

Gain unprecedented clarity on your AI agents' workflow.
