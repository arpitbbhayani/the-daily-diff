---
authors:
- Francisco Rosales
comments: https://news.ycombinator.com/item?id=49627616
date: '2026-09-09'
depth_score: 8
hn_id: '49627616'
image: /infographics/29-hn-49627616.jpg
interest_score: 8
novelty_score: 8
section: engineering
source: hn
tags:
- ai-coding-agents
- catchup
- code-execution
- core-fsmonitor
- git-config
- hn
- security-vulnerability
title: A Git Config Key Runs Code in AI Agents Undetected by 2022 Fix
url: https://grith.ai/blog/git-config-key-2022-fix-coding-agents
utility_score: 9
why_read: This text reveals a critical security vulnerability involving a Git config
  key that executes arbitrary code in AI coding agents, explaining why a 2022 fix
  doesn't prevent it and the specific conditions required for the attack.
---

A core Git configuration key, core.fsmonitor, allowed arbitrary code execution across seven major AI coding agents. The critical finding is that a 2022 fix, widely believed to mitigate this, does not stop the specific delivery vector targeting agents.

The attack, dubbed GitSpawn, works when a developer receives a hostile repository as a pre-existing directory (e.g., via a .zip file or shared drive), rather than a git clone. When the agent then runs common Git commands like git status or git diff, the malicious core.fsmonitor command executes.

This is a stark reminder that new paradigms introduce new attack surfaces for old vulnerabilities. Engineers building or employing AI agents must re-evaluate their sandboxing and input handling strategies, as relying on standard Git mitigations may not be sufficient. Prioritize secure intake for any content an agent processes.