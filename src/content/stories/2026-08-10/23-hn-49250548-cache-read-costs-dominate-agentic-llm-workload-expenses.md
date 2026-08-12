---
title: Cache Read Costs Dominate Agentic LLM Workload Expenses
source: hn
url: https://martinalderson.com/posts/watch-out-for-cache-read-costs/
date: '2026-08-10'
tags:
- agentic-workloads
- cache-read-costs
- catchup
- context-windows
- hn
- llm-pricing
- tool-calls
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49250548'
comments: https://news.ycombinator.com/item?id=49250548
why_read: This article reveals that cache read costs are the primary expense driver
  in agentic LLM workloads, not input/output token costs. Readers will learn why these
  costs scale quadratically with turns and how to optimize agent designs to significantly
  reduce overall spend.
authors:
- Martin Alderson
---

Are you running agentic LLM workloads and meticulously tracking input/output token costs? You might be missing the biggest driver of your bill: cache read costs.

With ever-increasing context windows, the KV cache becomes a massive factor. This article demonstrates how, in a 100-turn agentic session, cache reads can account for over 80 percent of your total LLM spend, dwarfing input and output tokens.

This dramatically shifts how we should think about LLM cost optimization. The most impactful strategy is often reducing the number of tool calls per run. Even a 10 percent reduction in turns can lead to a 16 percent cost cut for the entire run.

Engineers must adjust their mental models for LLM pricing. Focus on minimizing repeated context reads rather than just token counts to make your agentic systems far more efficient and cost-effective.
