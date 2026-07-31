---
authors:
- Rahul Garg
comments: https://news.ycombinator.com/item?id=49095365
date: '2026-07-29'
depth_score: 8
hn_id: '49095365'
image: /infographics/79-hn-49095365.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-delegation
- catchup
- hn
- multi-agent-systems
- orchestrator-context
- subagents
- working-memory
title: Subagents protect orchestrator working memory, reducing cognitive load
url: https://martinfowler.com/articles/orchestrator-tax.html
utility_score: 8
why_read: This article redefines the value of subagents in multi-agent AI systems,
  explaining how they protect the orchestrator's working memory. Readers will learn
  strategies for effective delegation and managing cognitive load in complex AI workflows.
---

Are your multi-agent systems struggling with context overload? Martin Fowler's "The Orchestrator's Tax" introduces a critical insight: the true value of subagents is not just parallel execution, but protecting the orchestrator's working memory.

Every token in the orchestrator's context competes for attention. Subagents excel by offloading reasoning the orchestrator does not need to hold onto, thus reducing this "cognitive load" and improving overall system efficiency.

This means rethinking delegation. It is about establishing explicit ground rules for when and how to delegate, ensuring cognitive locality within your agent architecture. This approach can drastically improve the maintainability and performance of complex agent workflows.

Optimize for attention, not just parallel tasks.