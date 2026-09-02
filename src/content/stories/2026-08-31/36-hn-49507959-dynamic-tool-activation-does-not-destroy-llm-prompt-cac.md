---
title: Dynamic Tool Activation Does Not Destroy LLM Prompt Caching
source: hn
url: https://m-reschreiter.at/en/blog/does-dynamic-tool-activation-break-prompt-caching
date: '2026-08-31'
tags:
- cache-miss
- catchup
- coding-agents
- dynamic-tool-activation
- hn
- llm-providers
- prompt-caching
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49507959'
comments: https://news.ycombinator.com/item?id=49507959
why_read: This article presents empirical evidence refuting the common belief that
  dynamic tool activation in LLMs destroys prompt caching. Readers will learn that
  dynamic tool usage is efficient, significantly reducing costs and unused schema
  tokens.
authors:
- Mohammed Reschreiter
---

A common assumption in LLM infrastructure is that dynamically adding or removing tools will destroy prompt caching, leading to higher costs. This empirical study debunks that myth with data from 10,186 assistant turns across OpenAI, Google Gemini, and OpenRouter.

The audit found that tool swapping caused a cache miss on only 2.4 percent to 3.4 percent of turns. This is far lower than expected. More importantly, it avoided 71.2 million unused schema tokens, resulting in a 32.5 percent reduction in average turn costs.

The real culprits for cache misses are routine multi-file reads, context compaction, and provider idle timeouts, not dynamic tool changes. This implies that engineers building AI agents can confidently optimize context by dynamically activating tools without fear of negating caching benefits.

This is a crucial insight for anyone looking to build efficient and cost-effective AI agents, showing that context engineering can lead to significant savings without compromising performance.
