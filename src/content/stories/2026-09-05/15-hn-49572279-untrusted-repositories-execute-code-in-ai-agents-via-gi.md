---
title: Untrusted Repositories Execute Code in AI Agents Via Git Command Flaw
source: hn
url: https://www.manifold.security/blog/ai-coding-agents-git-hijack
date: '2026-09-05'
tags:
- ai-coding-agents
- arbitrary-code-execution
- catchup
- git-commands
- gitspawn
- hn
- security-vulnerability
- supply-chain-security
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49572279'
comments: https://news.ycombinator.com/item?id=49572279
why_read: This post details a critical security vulnerability, GitSpawn, in AI coding
  agents that allows untrusted repositories to execute arbitrary code. Readers will
  understand how improper git command sanitization enables this attack before workspace-trust
  prompts.
authors:
- Francisco Rosales
---

A critical new vulnerability, "GitSpawn," is putting AI coding agents at risk. Untrusted Git repositories can execute arbitrary code on a developer's machine before you even type a prompt or approve a workspace.

The flaw exploits how agents like Claude Code, Codex, and Cursor run `git status` in the background for context, often without proper sanitization. This pre-authentication, pre-prompt execution vector means your development environment could be compromised silently. This is not a hypothetical concern; it impacts numerous popular AI development tools.

This highlights a critical blind spot in LLM infrastructure security. We must scrutinize how these agents interact with the host system, not just their LLM interactions. If you use AI coding agents, check your configurations now.
