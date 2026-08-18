---
title: Deterministic MCP proxy blocks sensitive calls based on content provenance
source: github
url: https://github.com/vineetpant/customhouse
date: '2026-08-16'
tags:
- agent-session-security
- catchup
- content-provenance
- data-exfiltration-prevention
- deterministic-proxy
- github
- mcp-security
- no-model-decision
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49318414'
comments: https://news.ycombinator.com/item?id=49318414
why_read: This text introduces Customhouse, a deterministic proxy designed to prevent
  sensitive data egress and money-moving calls in agent sessions based purely on content
  provenance. Readers will learn about a novel approach to agent security that focuses
  on trusted origins rather than pattern matching or AI models.
authors:
- vineetpant
---

One of the biggest hurdles for deploying AI agents in production is security, particularly preventing data exfiltration. Customhouse offers a refreshingly robust solution by acting as a deterministic proxy.

The core innovation is its reliance on *provenance* rather than pattern matching or model-based decisions. This proxy tracks the origin of every input, and if an agent session has received untrusted content, any "money-moving" or data-egress tool calls are automatically blocked. This design makes it nearly impossible to evade by rewording or obfuscating payloads.

This is a critical architectural pattern for any engineer building LLM infrastructure or agent systems that handle sensitive data. It moves beyond reactive measures to a proactive, system-level guarantee of data safety, which is essential for enterprise adoption.
