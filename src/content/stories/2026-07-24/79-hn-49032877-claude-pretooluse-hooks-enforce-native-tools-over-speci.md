---
authors:
- HabibiCodeCH
comments: https://news.ycombinator.com/item?id=49032877
date: '2026-07-24'
depth_score: 8
hn_id: '49032877'
image: /infographics/79-hn-49032877.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- bash
- catchup
- claude
- hn
- llm-interaction
- native-tools
- pretooluse-hooks
title: Claude PreToolUse hooks enforce native tools over specific Bash commands
url: https://github.com/HabibiCodeCH/claude-no-bash-detour
utility_score: 9
why_read: Read this to understand how to prevent Claude from using specific Bash commands,
  improving efficiency and user experience. It explains the mechanism of PreToolUse
  hooks for enforcing preferred tool usage by LLMs.
---

LLM agents often fall back to generic Bash commands like 'find' or 'cat' when native tools are available, leading to unnecessary user prompts and inefficiency. This GitHub project provides a brilliant workaround.

It introduces Claude Code PreToolUse hooks that intercept and block these common Bash patterns, forcing the agent to use more appropriate and efficient native tools. This not only reduces token usage but also streamlines the agent's workflow by avoiding superfluous human approvals.

This is a critical insight for anyone building production-grade agents: enforce the right tool use at the harness level, not just through model prompts. You are setting up your agents for success with better context and less noise.