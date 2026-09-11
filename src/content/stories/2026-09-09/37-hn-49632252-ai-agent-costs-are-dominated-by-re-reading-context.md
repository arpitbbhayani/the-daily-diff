---
title: AI agent costs are dominated by re-reading context
source: hn
url: https://www.completeskeptic.com/p/kv-cache-rules-everything-around
date: '2026-09-09'
tags:
- ai-agents
- catchup
- context-re-reading
- hn
- kv-cache
- operational-cost
- tool-calls
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49632252'
comments: https://news.ycombinator.com/item?id=49632252
why_read: This article reveals that the most significant cost when running AI agents
  stems from re-reading their context during iterative tool calls. Readers will gain
  a crucial understanding of agent cost structures, essential for optimizing their
  operational expenses.
authors:
- Diogo
---

Think you know where your LLM agent costs are going? You are probably wrong. A deep dive into agent economics reveals that the biggest cost to developers is not output tokens or even initial input, but the repeated processing of the KV cache between tool calls.

This means that for N context tokens and T tool calls, your agent processes roughly N * T total input tokens. This scales quadratically with session length and tool calls, hitting your bill far more than you might expect, even when providers say they do not charge for 'cached' reads.

Understanding this fundamental mechanism is crucial for designing efficient, cost-effective agentic workflows. It is not just about prompting, it is about token economics.
