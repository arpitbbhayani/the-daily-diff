---
title: API design for AI agents requires identity, control, and thoughtful tools
source: hn
url: https://nader.io/posts/agent-experience/
date: '2026-09-02'
tags:
- access-control
- agent-experience
- ai-agents
- api-design
- api-security
- catchup
- hn
- identity-delegation
- tool-design
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49534879'
comments: https://news.ycombinator.com/item?id=49534879
why_read: This article explains the shift from human-centric to agent-driven API usage,
  detailing critical changes needed for identity, control, and effective tool design
  to serve AI agents and end-users.
authors:
- Nader Cserny
---

Designing APIs for human users is a well-understood problem, but AI agents introduce an entirely new set of challenges that demand fresh architectural thinking. The core shift is recognizing that the API key no longer identifies a single user but rather an agent acting on behalf of a user, potentially with delegated authority.

This requires rethinking identity, authorization, and even budgeting. You cannot simply rely on traditional rate limits; you need mechanisms to protect the *user* from an agent stuck in an expensive retry loop. Granular scopes per tool, rather than per product, become essential for controlling agent capabilities.

Furthermore, API design itself changes. Agents 'chain badly,' so fewer, fatter tools are often better than many thin ones. Errors should be instructive, guiding the agent to correct itself, not just generic failures. Avoid pagination entirely, as it costs tokens and degrades agent performance.

Focus on 'Agent Experience' to build robust and efficient systems. This perspective shift is critical for any engineer building or evolving services for the agent economy.
