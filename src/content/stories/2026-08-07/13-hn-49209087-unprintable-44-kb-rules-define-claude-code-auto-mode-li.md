---
title: Unprintable 44 KB rules define Claude Code auto-mode limitations
source: hn
url: https://www.highflame.com/blog/the-44kb-of-claude-codes-rulebook-you-cant-print/
date: '2026-08-07'
tags:
- agent-permissions
- auto-mode
- catchup
- claude-code
- hidden-rules
- hn
- llm-security
- opacity
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49209087'
comments: https://news.ycombinator.com/item?id=49209087
why_read: This article reveals the critical, unprintable 44 KB rulebook governing
  Claude Code's auto-mode. Readers will understand how this hidden component dictates
  agent permissions and why its opacity is a significant concern for security and
  control.
authors:
- grumblemumble
---

The internal workings of AI agent safety are far more complex and opaque than many realize. Claude Code's 'auto-mode' does not just run your agent; it sends every consequential action to a secondary LLM, claude-sonnet-5, which consults a partially hidden, 44KB rulebook before execution.

This 'unprintable' part of the system prompt contains a formal consent model for autonomous agents and even named attack patterns for multi-agent systems. Imagine trying to debug an agent when its own rulebook denies you the ability to read the rule that fired.

This deep dive reveals a critical challenge in agentic AI: how do we ensure transparency and control when a significant portion of an agent's safety logic is effectively a black box? It is a stark reminder that 'AI safety' is not just a policy concern, but a complex engineering problem buried in hidden prompts and multi-model interactions.
