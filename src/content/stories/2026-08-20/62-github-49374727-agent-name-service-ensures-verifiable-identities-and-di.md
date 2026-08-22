---
title: Agent Name Service ensures verifiable identities and discovery for AI agents
source: github
url: https://github.com/agentnameservice
date: '2026-08-20'
tags:
- agent-identity
- agent-registry
- ai-agents
- catchup
- certificates
- domain-validation
- github
- offline-verification
- transparency-log
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49374727'
comments: https://news.ycombinator.com/item?id=49374727
why_read: Read this to understand how the Agent Name Service addresses the critical
  need for verifiable identities and discovery mechanisms for AI agents. It outlines
  the architectural components like transparency logs and identity certificates that
  enable secure agent-to-agent communication.
authors:
- mooreds
---

As autonomous AI agents begin interacting across organizations, fundamental questions of identity and trust emerge. The Agent Name Service (ANS) proposes a critical piece of infrastructure: a registry and transparency log for agents, akin to DNS for websites.

ANS assigns verifiable, versioned, DNS-style names to agents, backed by identity certificates and an append-only Merkle-tree transparency log. This allows any party to independently verify an agent's identity, capabilities, and history without relying on a middleman. It leverages existing security paradigms like ACME and mutual TLS.

This design provides a robust framework for secure agent-to-agent communication and discovery. Understanding ANS is essential for designing truly distributed and trustworthy multi-agent systems in the future.
