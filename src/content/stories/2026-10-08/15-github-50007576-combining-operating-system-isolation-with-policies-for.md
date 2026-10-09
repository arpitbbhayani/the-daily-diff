---
title: Combining operating system isolation with policies for agents
source: github
url: https://github.com/strands-agents/box/
date: '2026-10-08'
tags:
- ai-agents
- catchup
- credential-injection
- dogwood-policies
- github
- os-isolation
- rust
- sandboxing
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '50007576'
comments: https://news.ycombinator.com/item?id=50007576
why_read: Read this to understand how Box constrains AI agent actions by pairing OS-level
  isolation with default-deny policies and externalized secrets. You will learn the
  mechanics of securing autonomous agents across file execution, network reach, and
  credential handling.
authors:
- shenli3514
---

Running autonomous agents with terminal access on bare host systems is an obvious security risk. Strands Box introduces an open-source Rust runtime designed specifically to isolate agent workloads.

It couples operating system isolation with default-deny policies, mediating shell execution, file system reads and writes, and network egress. Crucially, sensitive credentials remain outside the agent runtime entirely, injected strictly through secure external brokers only when explicit policies pass.

Constraining tool-use agents requires deterministic OS-level guardrails rather than soft prompt constraints.

Never trust an autonomous agent with unrestricted access to your execution environment.
