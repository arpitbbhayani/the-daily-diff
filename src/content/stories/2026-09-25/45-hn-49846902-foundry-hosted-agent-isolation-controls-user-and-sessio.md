---
title: Foundry hosted agent isolation controls user and session data
source: hn
url: https://devblogs.microsoft.com/agent-framework/foundry-hosted-agent-isolation-with-microsoft-agent-framework/
date: '2026-09-25'
tags:
- catchup
- foundry-hosted-agent-isolation
- hn
- microsoft-agent-framework
- microsoft-foundry
- session-isolation
- user-isolation
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49846902'
comments: https://news.ycombinator.com/item?id=49846902
why_read: 'This text introduces Microsoft Foundry''s hosted agent isolation, explaining
  its two independent controls: user isolation and session isolation. Readers will
  learn how these controls manage data access and code execution environments within
  the framework.'
authors:
- Roger
- Tao
---

Hosting AI agents securely is a paramount system design challenge. This Microsoft Agent Framework post delves into two independent, crucial controls: user isolation and session isolation.

User isolation defines whose data an agent can access, addressing identity and access management. Session isolation, on the other hand, determines where the agent's code and files reside and execute, providing a sandboxed environment for its operations.

The article lays out practical choices for these controls, from direct callers to trusted middle tiers and shared session pools. Understanding these distinctions is fundamental for architecting robust, secure, and scalable AI agent systems.

This is not just theoretical; these are tangible patterns you can apply when building or evaluating platforms for agentic AI.
