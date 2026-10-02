---
title: Run coding agents on your machine from anywhere
source: github
url: https://github.com/bivysh/bivy
date: '2026-10-01'
tags:
- catchup
- claude-code
- coding-agents
- developer-tools
- github
- remote-access
- self-hosting
section: engineering
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49921010'
comments: https://news.ycombinator.com/item?id=49921010
why_read: Learn how to self-host and orchestrate autonomous coding agents on your
  own hardware while monitoring terminal output, approvals, and app previews remotely.
authors:
- pettersj
---

Running local coding agents like Claude Code or Codex often ties engineers directly to their primary development workstations. If you step away from your terminal, you lose visibility into tool invocations, pending approval requests, and running build outputs.

Bivy approaches this problem by acting as an open-source workspace layer on top of local coding agents. It exposes the live terminal session, confirmation prompts, and web application previews over a clean interface accessible from a browser or mobile device, while keeping execution entirely on your local machine.

Decoupling the execution runtime from the interaction surface makes unattended or remote agent monitoring far more practical without sacrificing local filesystem access.
