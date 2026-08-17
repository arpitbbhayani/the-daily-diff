---
title: Every Check Was Green Five Guarantees Were Not
source: hn
url: https://ai2rules.dev/blog/every-check-was-green/
date: '2026-08-15'
tags:
- catchup
- ci-cd
- error-handling
- hn
- rust
- silent-failures
- software-security
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49308350'
comments: https://news.ycombinator.com/item?id=49308350
why_read: This post explains how extensive testing and CI pipelines can still fail
  to catch critical security defects when errors are silently discarded. Readers will
  learn about the deceptive nature of 'green checks' and the importance of robust
  error handling.
authors:
- sv-pro
---

You might think passing tests and clean static analysis mean your code is safe, but this article reveals how five critical defects slipped past "all green" checks in a tool governing AI coding agents. One severe bug involved a `let _ =` that silently ignored a crucial `create_dir_all` failure, allowing an agent to bypass network restrictions meant to prevent data exfiltration.

The core problem was not sloppy code, but well-intentioned designs that failed under edge cases or implicit assumptions. Engineers often overlook how subtle interactions, like a read-only state directory or unexpected process termination, can unravel guarantees. The fix was not a quick patch, but a deep reconsideration of error handling, state persistence, and environmental resilience.

This is a must-read for anyone building high-assurance systems, especially those interacting with AI agents. It teaches you to question your assumptions about "green" checks and to proactively hunt for the hidden ways your system's guarantees can break down.
