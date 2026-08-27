---
title: What IBM Learned Building Multi-Agent AI in Production
source: hn
url: https://www.tonyerwin.com/2026/08/building-production-agentic-ai-at-ibm.html
date: '2026-08-25'
tags:
- agentic-ai
- catchup
- data-access
- hn
- identity-propagation
- multi-agent-systems
- observability
- production-ai
- team-alignment
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49436548'
comments: https://news.ycombinator.com/item?id=49436548
why_read: This article offers practical lessons from IBM's development of a production
  multi-agent AI system. Readers will gain insights into key architectural decisions,
  challenges like data access and identity management, and strategies for managing
  independent teams.
authors:
- Tony Erwin
---

Building agentic AI for production is not just about chaining LLMs; it is about grappling with real-world enterprise constraints. IBM

They emphasize uniform architecture using A2A for agent boundaries and MCP for tool boundaries, which was key for independent team development. Crucially, they highlight the absolute necessity of propagating user identity through every hop and instrumenting everything 

The biggest takeaway: data access, not agent code, is often the true bottleneck. This article provides a candid look at the challenges and offers practical blueprints for engineers moving AI agents from concept to enterprise reality.
