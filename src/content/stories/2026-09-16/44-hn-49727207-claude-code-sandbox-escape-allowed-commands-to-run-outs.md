---
title: Claude Code sandbox escape allowed commands to run outside
source: hn
url: https://accomplish.ai/blog/beltdown-escaping-the-claude-code-sandbox/
date: '2026-09-16'
tags:
- catchup
- claude-code
- git-exploitation
- hn
- sandbox-escape
- seatbelt
- vulnerability
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49727207'
comments: https://news.ycombinator.com/item?id=49727207
why_read: This explains a critical sandbox escape vulnerability in Claude Code, detailing
  how it was exploited using unhardened git commands and nested folder bypasses. Readers
  will understand the mechanics of this security flaw and its resolution.
authors:
- snikolaev
---

A critical vulnerability dubbed 'Beltdown' demonstrated how commands could escape the Claude Code sandbox, even with the strictest permissions. This was not a simple bypass; it was a sophisticated exploit.

The core mechanism involved unhardened `git` calls made by the agent's harness *outside* the sandbox. By manipulating `core.fsmonitor` in a `.git/config` file and bypassing protections for nested `.git` folders, attackers could trick the harness into executing arbitrary commands.

This highlights a profound lesson for anyone building or deploying AI agents: the security perimeter is only as strong as its weakest interaction. Complex systems with multiple execution layers create subtle vectors for prompt injection and sandbox escapes that demand meticulous design.

Understanding this exploit is crucial for designing truly robust and secure AI agent execution environments, reminding us that 'don't ask' does not always mean 'cannot execute'.
