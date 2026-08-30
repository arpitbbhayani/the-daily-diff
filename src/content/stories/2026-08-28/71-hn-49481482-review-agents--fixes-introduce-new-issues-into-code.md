---
authors:
- Mykhaylo Kolesnik
comments: https://news.ycombinator.com/item?id=49481482
date: '2026-08-28'
depth_score: 8
hn_id: '49481482'
image: /infographics/71-hn-49481482.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-agents
- bug-introduction
- catchup
- code-review
- hn
- issue-fixing
- workflow
title: Review agents' fixes introduce new issues into code
url: https://kolesnik.io/blog/fix-your-workflows
utility_score: 9
why_read: This article reveals how AI agents, despite fixing initial issues, can inadvertently
  introduce new bugs during the fix process, highlighting a critical flaw in automated
  review and fix workflows. Readers will learn the importance of deeply analyzing
  the origin of new issues rather than just iterating on fixes.
---

Your AI agents are "fixing" code, but are they also introducing new bugs? This engineer's experience reveals a critical flaw: agents often create nearly as many issues in their fixes as they resolve initially.

The problem often is not the underlying model, but the workflow. The post shares how iterative review agents kept discovering the *same* masking issues, indicating a failure in the agent's ability to learn from previous iterations or understand broader context.

This highlights that simply adding agents to a coding workflow is not enough. You need to design resilient processes that account for agent-induced errors and validate their "fixes." The author's data-driven approach to uncovering these issues provides a masterclass in effective debugging for agentic systems.

Fix your workflows, not just your models, for true productivity gains.