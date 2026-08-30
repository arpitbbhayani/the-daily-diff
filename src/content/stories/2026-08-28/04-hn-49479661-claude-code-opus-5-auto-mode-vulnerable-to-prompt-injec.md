---
title: Claude Code Opus 5 Auto Mode vulnerable to prompt injection code execution
source: hn
url: https://embracethered.com/blog/posts/2026/breaking-claude-code-opus-5-and-automode/
date: '2026-08-28'
tags:
- auto-mode
- catchup
- claude-code-opus-5
- code-execution
- hn
- llm-security
- prompt-injection
- supply-chain-attack
section: ai
interest_score: 9
depth_score: 8
utility_score: 9
novelty_score: 9
hn_id: '49479661'
comments: https://news.ycombinator.com/item?id=49479661
why_read: This post explains a practical method to achieve code execution in Claude
  Code Opus 5 Auto Mode via prompt injection. Readers will learn about a specific
  attack chain that bypasses previous security evaluations, highlighting a critical
  vulnerability in LLM agents.
authors:
- BerislavLopac
---

Claude Code Opus 5's Auto Mode was supposed to be hardened against prompt injection, with Anthropic claiming a 0.00% attack success rate. A new exploit chain, however, achieves 60-80% success.

The attack cleverly nudges the agent to use `curl`, redirects it to a ZIP archive, and then executes a malicious Python script by shadowing a standard library module. This demonstrates a deep understanding of the agent's environment and execution flow.

It is a stark reminder that layered defenses are not foolproof. Understanding these low-level exploitation techniques is crucial for anyone building or deploying AI agents in production. Never assume 'auto mode' means 'secure by default'.
