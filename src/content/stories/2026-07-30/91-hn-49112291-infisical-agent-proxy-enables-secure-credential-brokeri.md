---
authors:
- FinnLobsien
comments: https://news.ycombinator.com/item?id=49112291
date: '2026-07-30'
depth_score: 8
hn_id: '49112291'
image: /infographics/91-hn-49112291.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- agent-proxy
- ai-agents
- ai-cloud-infrastructure
- catchup
- credential-brokering
- hn
- secrets-management
title: Infisical Agent Proxy enables secure credential brokering for AI agents
url: https://infisical.com/blog/agent-proxy
utility_score: 9
why_read: This article explains how Infisical Agent Proxy provides secure credential
  brokering for AI agents, preventing direct access to sensitive credentials. It details
  why agent proxies are considered a new infrastructure primitive essential for secure
  AI agent deployments.
---

Securing AI agents in production is a major challenge, especially when they need to access services with sensitive credentials. Infisical's Agent Proxy introduces a new infrastructure primitive to solve this: secure credential brokering. It acts as an HTTP proxy that injects credentials at the network boundary, meaning agents never directly handle the actual secrets. 

This approach eliminates the risk of credential exfiltration, a critical concern as agents gain more capabilities and access. It is not just about vaulting secrets, but about managing the entire request lifecycle to ensure zero direct exposure to the agent. 

If you are building or deploying AI agents that interact with external services, understanding and implementing such a proxy is essential for robust security.