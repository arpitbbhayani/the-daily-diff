---
title: Plimsoll reports verifiable isolation tiers for untrusted code
source: github
url: https://github.com/plimsollmark/plimsoll
date: '2026-10-11'
tags:
- ai-agents
- catchup
- github
- isolation-tiers
- sandboxing
- untrusted-code
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '50049388'
comments: https://news.ycombinator.com/item?id=50049388
why_read: Learn how Plimsoll executes untrusted agent code while programmatically
  reporting and enforcing verifiable isolation boundaries. It introduces an explicit
  mechanism for setting floor requirements across process, container, kernel, and
  VM tiers.
authors:
- cagster
image: /infographics/04-github-50049388.jpg
---

Running agent-generated code safely in production requires formal isolation guarantees, not wishful thinking. Plimsoll introduces a self-hosted sandbox system that models isolation strength through explicit execution tiers: process, container, kernel, and full virtual machine.

Instead of treating sandboxing as a binary setting, the engine tags every execution output with the verifiable boundary it ran behind. Callers can enforce a strict baseline threshold, ensuring that code automatically fails to execute if the required isolation tier is unavailable.

For teams deploying autonomous coding agents or code interpreter pipelines, this pattern solves the gap between agent tool autonomy and infrastructure security.
