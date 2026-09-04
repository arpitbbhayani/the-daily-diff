---
title: Solving silent tool call failures dramatically reduces AI agent waste
source: hn
url: https://www.databricks.com/blog/how-we-eliminated-1-million-year-wasted-ai-agent-spend-one-hour
date: '2026-09-02'
tags:
- ai-agents
- catchup
- cost-saving
- hn
- observability
- tool-failures
- tracing
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49539305'
comments: https://news.ycombinator.com/item?id=49539305
why_read: This article details how Databricks leveraged observability and tracing
  to identify and resolve silent AI agent tool failures, saving substantial costs
  and engineering hours. Readers will gain insights into optimizing AI agent performance
  and preventing hidden waste.
authors:
- ssgodderidge
---

Identifying the hidden costs of AI agents can be incredibly difficult, but Databricks just shared how they eliminated $1 million a year in wasted AI spend in one hour. Their primary culprit: agents silently retrying broken tool calls, burning tokens and engineering hours without obvious failures.

This problem manifested across their agent fleet, with seven small server bugs burning nearly $500,000 in tokens and costing 12,000 engineering hours annually. The agents would repeatedly guess or work around the problem, making it appear as if tasks were completing, while quietly racking up expenses.

The solution involved robust observability. By tracing every tool call with OpenTelemetry via their Unity Gateway, they could precisely surface the biggest sources of waste. This enabled their own coding agents to deploy fixes in just an hour.

A key takeaway is designing tools for how LLMs actually use them. Models often make assumptions on ambiguous inputs, so tools must handle variations gracefully instead of crashing or leading to infinite retry loops. This approach not only saves significant costs but also drastically improves agent reliability and developer productivity.
