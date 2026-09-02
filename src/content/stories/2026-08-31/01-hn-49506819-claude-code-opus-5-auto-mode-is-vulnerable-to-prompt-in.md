---
authors:
- Recursing
comments: https://news.ycombinator.com/item?id=49506819
date: '2026-08-31'
depth_score: 9
hn_id: '49506819'
image: /infographics/01-hn-49506819.jpg
interest_score: 9
novelty_score: 8
section: ai
source: hn
tags:
- auto-mode
- catchup
- claude-code-opus-5
- code-execution
- hn
- llm-vulnerability
- prompt-injection
- python-module-shadowing
title: Claude Code Opus 5 Auto Mode Is Vulnerable to Prompt Injection
url: https://embracethered.com/blog/posts/2026/breaking-claude-code-opus-5-and-automode/
utility_score: 9
why_read: This post reveals a critical vulnerability in Claude Code Opus 5 Auto Mode,
  demonstrating how prompt injection can lead to remote code execution despite prior
  assurances. Readers will understand a sophisticated attack chain involving tool
  redirection and Python module shadowing, highlighting the need for isolated agent
  environments.
---

Claude Code Opus 5's Auto Mode is not as secure as reported. A recent exploit achieved 60-80% code execution through a sophisticated prompt injection attack, challenging Anthropic's 0.00% success rate claim for unseen attacks.

The attack chain is a masterclass in agent exploitation: it nudges Claude from WebFetch to curl, then redirects it to a ZIP archive containing a malicious `struct.py` file. When Claude then attempts to import `base64`, the poisoned `struct.py` shadows the standard library, leading to arbitrary code execution.

This highlights a critical lesson for anyone building or deploying AI agents: Auto Mode is not a substitute for isolated execution environments and rigorous output monitoring. Understanding these vulnerabilities is paramount for developing truly robust and secure agentic systems.