---
title: Agent Harnesses Internals Reveal Token Consumption and Cost Drivers
source: hn
url: https://ishamf.dev/p/agent-harness-replay/
date: '2026-09-21'
tags:
- agent-harness
- api-requests
- catchup
- hn
- llm-costs
- prompt-caching
- token-consumption
- tool-calling
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49788788'
comments: https://news.ycombinator.com/item?id=49788788
why_read: This article explains the underlying mechanisms of LLM agent harnesses,
  detailing how token consumption, context management, and prompt caching affect API
  costs during interactive sessions.
authors:
- ifz
---

Ever wonder why your AI coding agent's first request consumes thousands of tokens, or why 'cached tokens' seem to rack up quickly despite being cheaper? This article provides a critical, detailed look behind the curtain of agent harnesses like Claude Code or Pi, showing exactly how token consumption and prompt caching truly work under the hood.

The key insight is that the entire conversational context, including past interactions and tool outputs, is often resent with each request to the LLM. However, prompt caching, while not free, can significantly reduce the cost of subsequent interactions by reusing previous computations. The article vividly visualizes how factors like cache eviction or context window limits can dramatically spike costs, revealing an often-hidden operational detail of LLM infrastructure.

This understanding is absolutely essential for any engineer building with AI agents. You will gain actionable strategies to optimize token usage, accurately manage your LLM API costs, and ultimately design more efficient and predictable agent-powered applications for production. It is a must-read for cost-aware LLM developers.
