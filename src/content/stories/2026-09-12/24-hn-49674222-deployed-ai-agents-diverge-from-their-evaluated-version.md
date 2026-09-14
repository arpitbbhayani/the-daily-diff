---
title: Deployed AI agents diverge from their evaluated versions
source: hn
url: https://www.anuclei.com/blog/you-didnt-deploy-the-agent-you-evaluated
date: '2026-09-12'
tags:
- agent-evaluation
- agent-governance
- ai-agents
- authorization
- catchup
- hn
- production-systems
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49674222'
comments: https://news.ycombinator.com/item?id=49674222
why_read: 'This article explains a critical problem in AI agent deployment: the divergence
  between evaluated agents and those running in production. It emphasizes the need
  for agent governance and authorization to ensure deployed agents match approved
  versions, moving beyond traditional observability.'
authors:
- jequals5
---

You might think your AI agent is production-ready after rigorous evaluation, but the agent you deploy is likely not the agent you evaluated. Subtle, un-tracked changes in prompts, tool schemas, policies, or context can drastically alter behavior.

This "evaluation divergence" creates a critical infrastructure and governance problem unique to agentic AI. Traditional observability is insufficient; you need to answer: What exactly was evaluated? What was approved? What actually executed with what capabilities?

Ensuring fidelity between evaluation and deployment is paramount for trust and reliability. This calls for a new class of tools and practices that track agent lineage, context, and capabilities across the entire lifecycle, providing an auditable trail.

Your agent's behavior in production is only as trustworthy as your ability to prove it matches your evaluated intent.
