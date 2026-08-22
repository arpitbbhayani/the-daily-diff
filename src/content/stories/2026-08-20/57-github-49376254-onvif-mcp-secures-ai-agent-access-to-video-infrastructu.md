---
title: onvif-mcp secures AI agent access to video infrastructure
source: github
url: https://github.com/oneshot2001/onvif-mcp
date: '2026-08-20'
tags:
- ai-agents
- audit-trail
- catchup
- fail-closed
- github
- onvif
- security
- signed-receipts
- vapix
- video-infrastructure
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49376254'
comments: https://news.ycombinator.com/item?id=49376254
why_read: This describes a method to securely integrate AI agents with IP cameras
  and video systems. Readers will learn about using fail-closed per-agent policies
  and hash-chained signed receipts to ensure auditability and security approval for
  such integrations.
authors:
- oneshot2001
---

Deploying AI agents in sensitive environments, like controlling IP cameras, demands robust security and auditability that current systems often lack. This GitHub project addresses that critical gap directly.

It introduces a governed MCP server implementing fail-closed, per-agent policies and generating hash-chained, signed receipts for every single action, including denials. This creates an unalterable audit trail of what agents *tried*, not just what they succeeded in doing.

This is a blueprint for secure agent governance in physical infrastructure, providing the accountability and control necessary for production-grade AI deployments. It moves beyond simple access to verifiable action.
