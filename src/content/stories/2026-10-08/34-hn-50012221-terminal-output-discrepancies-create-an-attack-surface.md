---
title: Terminal output discrepancies create an attack surface for coding agents
source: hn
url: https://thephp.foundation/blog/2026/10/08/your-tool-has-a-new-reader/
date: '2026-10-08'
tags:
- catchup
- cli-tools
- coding-agents
- escape-sequences
- hn
- phpunit
- terminal-output
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '50012221'
comments: https://news.ycombinator.com/item?id=50012221
why_read: Read this to understand how discrepancies between raw bytes and terminal-rendered
  glyphs introduce security vulnerabilities for automated coding agents. It provides
  concrete examples from PHPUnit on hardening tool output against manipulation.
authors:
- Sebastian Bergmann
---

Command line tools now serve two completely different consumers at the same time: the human engineer and the autonomous coding agent. While human eyes look at rendered terminal glyphs that interpret ANSI escape codes, an agent processes raw byte streams directly from tool calls.

This divergence introduces a subtle attack surface. A malicious unit test can emit carriage returns or line clears to erase a failure message in the terminal while leaving the agent reading raw errors, or vice versa. If a test outputs a string that clears the line and prints a success message, a human reviewing the test run will see green text even if the assertion failed.

PHPUnit recently began sanitizing these outputs to align with emerging agentic security standards. Securing agent workflows requires treating terminal output as an untrusted wire protocol rather than a simple visual display.

If your tools communicate with language models, you must sanitize what both the human and the machine see.
