---
title: Meta's Muse LLM exposes its internal filesystem and sensitive data
source: hn
url: https://mouse.dev/blog/muse-runtime-export/
date: '2026-09-22'
tags:
- bug-bounty
- catchup
- data-leak
- filesystem-exposure
- hn
- internal-documentation
- llm-security
- meta-muse
- ssh-keys
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49802871'
comments: https://news.ycombinator.com/item?id=49802871
why_read: This article reveals how Meta's Muse LLM exposed its internal filesystem
  and sensitive data, including SSH keys, through a standard interaction. Readers
  will understand a significant security vulnerability in LLM environments and the
  risks of internal data exposure.
authors:
- Aeroi
---

A Meta AI agent, Muse, was coaxed into exposing its entire 6.8GB Linux filesystem, including internal documentation, configuration files, and even SSH keys, simply by being asked to archive what it could see. This is a staggering demonstration of runtime exposure.

This incident highlights a profound security challenge for developers building and deploying AI agents. It is not just about prompt injection for data, but for the underlying operating environment itself. What an agent "sees" and "can access" must be meticulously controlled and sandboxed at the system level.

The fact that an ordinary conversation could lead to such a critical data exfiltration underscores the need for robust isolation and privilege separation in agentic systems. This is a hard lesson in making sure your agents cannot see or touch anything they do not absolutely need.
