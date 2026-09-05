---
title: Tenuo enables per-request authorization for Temporal Nexus
source: hn
url: https://tenuo.ai/blog/temporal-nexus-authorization.html
date: '2026-09-03'
tags:
- agentic-workflows
- catchup
- cross-namespace-integration
- cryptographically-verified-warrants
- hn
- per-request-authorization
- task-scoped-authority
- temporal-nexus
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49554481'
comments: https://news.ycombinator.com/item?id=49554481
why_read: This document introduces Tenuo, a solution for implementing granular, per-request
  authorization within Temporal Nexus. Readers will learn how Tenuo secures delegation
  of authority across different teams and agentic workflows without additional network
  latency.
authors:
- niyikiza
---

Implementing fine-grained authorization in distributed systems, especially across service boundaries, is a constant challenge. Temporal Nexus, while powerful for orchestrating workflows, typically offers namespace or worker-identity level authorization, which is often insufficient for per-request granularity.

This article introduces a solution using cryptographically verified warrants. These warrants, attached to Nexus requests, allow handlers to enforce authorization based on specific operation arguments, delegation chains, and expirations, all without adding noticeable network latency. It is a clever way to carry task-scoped authority across different system components.

This approach is critical for complex agentic workflows where agents delegate tasks and require specific, time-bound permissions. It ensures that even with complex inter-service communication, every request is rigorously validated.
