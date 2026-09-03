---
title: Single Flaw Lets Untrusted Repos Run Code in AI Agents
source: hn
url: https://www.manifold.security/blog/ai-coding-agents-git-hijack
date: '2026-09-01'
tags:
- ai-coding-agents
- arbitrary-code-execution
- catchup
- gitspawn
- hn
- security-vulnerability
- untrusted-repositories
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49525561'
comments: https://news.ycombinator.com/item?id=49525561
why_read: Understand how a single vulnerability, GitSpawn, enables untrusted Git repositories
  to execute arbitrary code in popular AI coding agents. This exposes a critical supply
  chain risk and the widespread nature of the flaw across several products.
authors:
- Francisco Rosales
---

A critical security flaw named GitSpawn has been uncovered, allowing untrusted Git repositories to execute arbitrary code in leading AI coding agents like Claude Code, Codex, and Grok.

This vulnerability stems from agents automatically running `git status` on untrusted repos, often before authentication or workspace-trust prompts, providing a powerful vector for attackers to gain arbitrary code execution as the developer, outside the sandbox.

This finding highlights a significant oversight in how AI agent frameworks handle external code sources and emphasizes the need for robust context sanitization. It is a stark reminder that even seemingly innocuous background operations can pose major security risks. Developers building or using AI agents must be acutely aware of these implications.
