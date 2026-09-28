---
title: Sandboxing AI coding agents with immutable operating system policies
source: hn
url: https://chock.ws/
date: '2026-09-27'
tags:
- access-control
- ai-agents
- catchup
- hn
- linux-namespaces
- sandboxing
- security-logging
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49865126'
comments: https://news.ycombinator.com/item?id=49865126
why_read: Learn how Chock isolates AI coding agents using native operating system
  sandboxes and tamper-proof logging. It explains how to prevent autonomous tools
  from modifying sensitive files or bypassing execution policies.
authors:
- rosscomputerguy
---

Most coding agent harnesses ask the language model to behave nicely, relying on prompt instructions or soft guardrails to avoid destructive actions. That is a dangerous assumption when agents execute arbitrary terminal commands and file edits.

Chock takes control away from the agent by enforcing isolation directly at the operating system layer. Every tool call runs inside strict OS sandboxes using Linux user namespaces, mount namespaces, empty network namespaces, and Landlock rulesets, while operating entirely on throwaway project copies.

Permissions are governed by an immutable policy file that the model cannot alter. Furthermore, every invocation and approval is recorded in an append-only, hash-chained log that external auditors can verify without trusting the agent.

If you are deploying autonomous agents in production or developer environments, kernel-level enforcement is the only reliable way to guarantee isolation.
