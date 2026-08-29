---
title: Sandy sandboxes AI coding agents for system security
source: github
url: https://github.com/kontext-security/sandy
date: '2026-08-27'
tags:
- ai-agents
- catchup
- github
- process-isolation
- sandboxing
- security
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49467501'
comments: https://news.ycombinator.com/item?id=49467501
why_read: This text introduces Sandy, a tool for running AI coding agents in a sandbox.
  Readers will learn how Sandy limits agent access to a computer and its tools, ensuring
  project security.
authors:
- mc-serious
---

Deploying AI coding agents without strong security boundaries is a serious risk. `Sandy` provides a crucial sandbox for these agents, ensuring they operate within defined policy controls and cannot access your entire system.

This open-source project focuses on process isolation and runtime monitoring, preventing agents from making unintended changes or exfiltrating data. It is not just about containment; it is about providing specific permissions like file system access or network calls, and auditing their activity.

If you are building or deploying AI agents, understanding and implementing such sandboxing mechanisms is non-negotiable for production readiness and security. This is a practical blueprint for protecting your infrastructure.
