---
title: What a capability layer stops when MCP clients trust too much
source: hn
url: https://naftiko.io/blog/your-mcp-client-trusts-too-much/
date: '2026-08-28'
tags:
- capability-layer
- catchup
- hn
- mcp-client
- prompt-injection
- security-vulnerability
- supply-chain-attack
- trust-model
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49480649'
comments: https://news.ycombinator.com/item?id=49480649
why_read: Learn why current MCP client implementations are vulnerable due to over-trusting
  servers and how a capability layer can fundamentally change the security posture
  by limiting that trust.
authors:
- Jerome Louvel
---

Are your AI agents vulnerable to supply chain attacks or tool poisoning? Many agent systems inherently trust their upstream servers too much, leaving them open to critical exploits.

This blog post breaks down how agent clients that implicitly trust server-provided tool lists can have their behavior altered, or credentials leaked. It links these architectural weaknesses to real-world incidents like WhatsApp tool poisoning and GitHub prompt injection attacks.

The solution proposed is a capability layer – a critical system design pattern that acts as an intermediary to enforce explicit permissions and prevent implicit trust. This is a must-read for any senior engineer designing robust and secure AI agent infrastructure.
