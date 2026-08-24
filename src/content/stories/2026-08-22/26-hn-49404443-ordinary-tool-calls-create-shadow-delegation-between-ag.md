---
title: Ordinary tool calls create shadow delegation between agents
source: hn
url: https://niyikiza.com/posts/agents-to-agents/
date: '2026-08-22'
tags:
- agentic-security
- ai-agents
- catchup
- delegation
- hn
- shadow-delegation
- tool-calls
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49404443'
comments: https://news.ycombinator.com/item?id=49404443
why_read: This article explains how agent-to-agent tool calls lead to 'shadow delegation'
  in AI systems. Readers will learn about the security implications and loss of context
  when agents delegate tasks to other agents, especially in enterprise settings.
authors:
- Niki A. Niyikiza
---

Agent-to-agent communication introduces a new security headache: "shadow delegation." When a general-purpose assistant delegates to a specialist agent via a tool call, that interaction is an implicit delegation boundary.

Enterprise IAM systems often only see the immediate calling principal, not the original user's intent. This means a service at the end of a long agent chain can make a high-consequence decision with minimal context, potentially leading to unauthorized actions.

This is a critical architectural challenge for anyone building secure multi-agent systems. You must design for full contextual authorization across the entire agentic workflow.
