---
title: AI agent approval systems are broken, requiring OS-level security
source: hn
url: https://grith.ai/blog/98-percent-of-claude-code-i-never-see
date: '2026-09-04'
tags:
- ai-agents
- catchup
- grith
- hn
- os-level-enforcement
- permissions
- security
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49565288'
comments: https://news.ycombinator.com/item?id=49565288
why_read: Readers will learn why current AI coding agent permission systems are fundamentally
  flawed and how they can lead to significant security risks. It introduces an OS-level
  security proxy solution to safely manage agent actions.
authors:
- edf13
---

AI coding agents promise speed, but the blind trust often granted to them in production is a massive security risk. Engineers typically either approve every action without reading or disable permissions entirely, neither of which is sustainable or safe.

The core problem? Approval happens at the wrong layer. Grith introduces an OS-level security proxy that intercepts all syscalls from an agent. This allows it to automatically greenlight 98% of routine operations, block clearly unsafe ones, and only prompt a human for the crucial 0.27% that genuinely require review.

This shifts the security burden from manual, ad-hoc approvals to a robust, systematic enforcement layer. You get the productivity of agents without the constant fear of arbitrary code execution. It is a smart trade-off for secure, agent-driven development.
