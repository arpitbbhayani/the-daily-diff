---
title: Researchers escape OpenAI Codex sandbox via Heapjack for host commands
source: hn
url: https://www.bleepingcomputer.com/news/security/researchers-escape-openai-codex-sandbox-to-run-commands-on-host/
date: '2026-09-20'
tags:
- catchup
- heapjack
- hn
- node-repl
- openai-codex
- remote-code-execution
- sandbox-escape
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49776305'
comments: https://news.ycombinator.com/item?id=49776305
why_read: This article details how security researchers bypassed OpenAI Codex's sandbox,
  enabling remote code execution on developers' machines through a flaw called Heapjack.
  It explains the technical mechanism behind this critical vulnerability.
authors:
- Ax Sharma
---

A critical sandbox escape vulnerability, dubbed 'Heapjack,' was found in OpenAI Codex, allowing remote command execution on a developer's machine with no prompt or screen indication. This is a profound lesson in designing secure AI agent infrastructure. The flaw originated from `node_repl`, a component within Codex Desktop that creates separate trusted and untrusted JavaScript execution contexts within a *single* Node.js process. This shared memory heap allowed the untrusted side to read a random token meant to authenticate the trusted context. It highlights a fundamental vulnerability in isolating execution when resources are not truly segmented. Engineers building agentic AI systems must understand that even seemingly isolated contexts can be compromised if they share underlying memory, emphasizing the need for robust process-level isolation rather than merely logical separation. This incident underscores that the best models are only as secure as the infrastructure they run on.
