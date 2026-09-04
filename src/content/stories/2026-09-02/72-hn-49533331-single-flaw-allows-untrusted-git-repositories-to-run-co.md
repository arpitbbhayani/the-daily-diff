---
authors:
- Francisco Rosales
comments: https://news.ycombinator.com/item?id=49533331
date: '2026-09-02'
depth_score: 8
hn_id: '49533331'
image: /infographics/72-hn-49533331.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- ai-coding-agents
- arbitrary-code-execution
- catchup
- git-vulnerability
- hn
- pre-authentication-vulnerability
title: Single flaw allows untrusted git repositories to run code in AI agents
url: https://www.manifold.security/blog/ai-coding-agents-git-hijack
utility_score: 8
why_read: This article explains a widespread security flaw in AI coding agents, where
  background git commands allow arbitrary code execution before authentication. Readers
  will learn how untrusted repositories can compromise developer environments.
---

A single, critical flaw known as "GitSpawn" allows untrusted Git repositories to execute arbitrary code within leading AI coding agents like Claude Code, Codex, Cursor, and Grok. This vulnerability is not merely theoretical; it has been confirmed across several major agent platforms.

The problem stems from how these agents gather context: they often run git commands like git status in the background, sometimes even before user authentication or explicit workspace trust. If a developer opens a folder from an untrusted source, the repository's configuration can hijack these git commands, enabling arbitrary code execution outside the agent's sandbox.

This means an attacker could gain full access to a developer's environment, including SSH keys and cloud credentials, without any visible prompts or warnings. It is a stark reminder that the integration of AI agents with developer tools demands rigorous security considerations, particularly concerning their interaction with the local filesystem and external repositories.

Protect your development setup: always be wary of opening untrusted repositories, even with advanced AI agents.