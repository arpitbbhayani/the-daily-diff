---
title: Approval steps can bypass security checks if misimplemented
source: hn
url: https://corebasehq.com/blog/human-approval-is-a-privilege-escalation-path
date: '2026-08-10'
tags:
- approval-logic
- authorization-bypass
- catchup
- hn
- security-vulnerability
- system-design
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49251251'
comments: https://news.ycombinator.com/item?id=49251251
why_read: This text explains how common approval mechanisms can inadvertently create
  severe security vulnerabilities. Readers will learn the critical distinction between
  confirming existing authorization and simply bypassing security checks, helping
  them design more secure systems.
authors:
- y11t0
---

Human approval workflows often introduce a subtle but dangerous security flaw: they can become a privilege escalation path, especially with AI agents. Instead of confirming an already authorized action, the 'approve' button too often bypasses all checks.

The article highlights that many systems implement approval as 'if approved, skip check' instead of 'if approved AND authorized, proceed'. This creates a blind spot where a human, trusting the system to perform initial authorization, unwittingly grants an unauthorized action.

This is a critical insight for any engineer designing systems with human-in-the-loop steps, particularly when integrating AI agents. You must ensure approvals supplement, not replace, core authorization logic.
