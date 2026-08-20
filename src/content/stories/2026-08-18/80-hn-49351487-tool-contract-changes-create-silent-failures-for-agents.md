---
title: Tool contract changes create silent failures for agents
source: hn
url: https://mcpindex.ai/ledger
date: '2026-08-18'
tags:
- agent-interaction
- api-changes
- catchup
- contract-drift
- hn
- observability
- schema-evolution
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49351487'
comments: https://news.ycombinator.com/item?id=49351487
why_read: This report reveals how subtle, unauthenticated changes to tool contracts
  can silently break agent interactions and bypass traditional security checks. Readers
  will learn about different categories of contract drift and their implications for
  system reliability.
authors:
- gatuamgb
---

API contract drift is a silent killer for AI agents. A recent report reveals nearly 9,000 tools observed across over 2,200 servers changed their contract in safety-relevant ways, all without a version bump.

Imagine an agent relying on a 'read-only' tool that quietly becomes a 'write' tool, or a suddenly required parameter breaks your agent mid-session. This is not a hypothetical; it is happening daily, fundamentally undermining the reliability of agentic workflows.

This is a call for robust API monitoring and strict contract versioning in your agent infrastructure. The failure mode is rarely connecting a bad server on day one; it is connecting a good server that changes on day thirty.
