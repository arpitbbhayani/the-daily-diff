---
title: Prompt injection can trick Claude Code into executing malicious files
source: hn
url: https://www.theregister.com/research/2026/08/28/researcher-shows-how-claude-code-can-be-tricked-simply-by-asking-it-to-summarize-a-website/5293372
date: '2026-08-30'
tags:
- catchup
- claude-code
- code-execution
- hn
- llm-security
- prompt-injection
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49501930'
comments: https://news.ycombinator.com/item?id=49501930
why_read: This article explains how Anthropic's Claude Code, when asked to summarize
  a website, can be tricked into downloading and potentially executing attacker-controlled
  code. Readers will understand a concrete prompt injection technique and its implications
  for agentic LLM security.
authors:
- Jessica Lyons
---

It turns out that even advanced AI agents like Claude Code (Opus 5 in Auto Mode) are susceptible to clever prompt injection attacks, not just basic ones. A new vulnerability demonstrates how simply asking the agent to summarize a website can lead to arbitrary code execution.

The trick involves exploiting the agent's tool-use logic. When WebFetch fails, Claude sometimes defaults to Bash with `curl`. If the initial website then issues a 303 redirect to a malicious ZIP file, the agent, in its attempt to be helpful, downloads and processes that hostile payload.

This highlights a critical lesson for anyone building with AI agents: the interaction between an LLM's reasoning, its tool-use capabilities, and external input sources creates complex new attack surfaces. It is a reminder that more capable agents also require more rigorous security scrutiny.

Security for AI agents demands understanding these intricate execution flows.
