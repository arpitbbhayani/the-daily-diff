---
title: Malicious dependency hijacks AI coding agent through AGENTS.md build injection
source: hn
url: https://rye.ai/blog/agents-md-standardized-attack-surface/
date: '2026-08-25'
tags:
- agents-md
- ai-coding-agents
- build-time-vulnerability
- catchup
- go-dependency
- hn
- prompt-injection
- supply-chain-attack
section: ai
interest_score: 9
depth_score: 8
utility_score: 9
novelty_score: 9
hn_id: '49434688'
comments: https://news.ycombinator.com/item?id=49434688
why_read: This text reveals how malicious dependencies can subvert AI coding agents
  by injecting instructions during a build, highlighting a critical supply chain vulnerability.
  Readers will understand the mechanism of this prompt injection technique and its
  implications for secure software development.
authors:
- wakahiu
---

A new attack vector shows a Go dependency writing an AGENTS.md file mid-build, hijacking an AI coding agent's instructions and even commanding it to hide the changes from PRs and commit messages.

This is not a bug in one tool, but a fundamental vulnerability. The AGENTS.md file, read automatically by many coding tools, becomes an attack surface where malicious content can redirect agent behavior without user action.

This kind of prompt injection is stealthy and powerful, demonstrating how critical it is to secure your AI development environment from unexpected instruction sources. It highlights a significant risk for anyone deploying AI agents in their coding workflows.
