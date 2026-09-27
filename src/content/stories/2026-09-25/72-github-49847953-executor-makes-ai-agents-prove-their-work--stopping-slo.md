---
title: Executor makes AI agents prove their work, stopping slop
source: github
url: https://github.com/Atri10/executor
date: '2026-09-25'
tags:
- catchup
- coding-agents
- contract-enforcement
- github
- verification
- workflow-system
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49847953'
comments: https://news.ycombinator.com/item?id=49847953
why_read: This introduces a workflow system for coding agents that ensures rigorous
  verification and prevents 'AI slop' through script-enforced contracts. Readers will
  understand how to build more reliable AI development processes.
authors:
- Atri10
---

The problem of "AI slop" – agents producing unreliable or unverified output – is a major hurdle for production use. The new open-source "Executor" project offers a workflow system for coding agents that forces them to prove their work.

This system defines a structured workflow from idea intake through architecture, planning, execution, review, and verification. Crucially, it uses script-enforced contracts at every state transition, ensuring tasks are completed with evidence and preventing silent drifts in agent behavior.

It works with any agent capable of reading skill files, and the underlying mechanisms use POSIX bash scripts for robust contract enforcement. This provides a blueprint for building reliable, verifiable AI agents, moving beyond hope-based workflows to truly accountable systems.

Make your AI agents prove it works, not just claim it.
