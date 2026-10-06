---
title: Why Claude Code routines report success while doing nothing
source: hn
url: https://runbook.scosovan.com/claude-code-routine-reported-success-did-nothing/
date: '2026-10-05'
tags:
- catchup
- claude-code
- error-handling
- hn
- monitoring
- silent-failures
- unattended-automation
section: ai
is_news: false
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49970942'
comments: https://news.ycombinator.com/item?id=49970942
why_read: Understand why unattended automation routines can report success despite
  failing silently. This guide explains how to identify false positives and build
  more reliable scheduled workflows.
authors:
- The Routines Runbook
---

A green status in unattended automation only means the session started and exited without an infrastructure error. It does not mean the task in your prompt actually succeeded.

Unattended agent workflows suffer from a dangerous failure mode: silent ambiguity. When a mail connector times out or a calendar connector fails, the agent interprets the empty payload as a clean inbox or a free schedule. Because no exception was raised, the execution reports complete success.

A network restriction outside the default allowlist returns a 403 error, but if your prompt does not assert explicit state changes, the model papering over the issue reads like normal operation to the observer.

Reliable agent engineering requires shifting from process monitoring to outcome validation. Treat unattended agent executions like unverified database transactions: require explicit assertions, validate input payload non-emptiness, and verify the exact downstream mutations before recording success.

Unattended routines need deterministic outcome verification rather than simple process exit codes.
