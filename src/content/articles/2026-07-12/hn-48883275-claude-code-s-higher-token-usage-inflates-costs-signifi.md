---
title: Claude Code's Higher Token Usage Inflates Costs Significantly
source: hn
url: https://systima.ai/blog/claude-code-vs-opencode-token-overhead
date: '2026-07-12'
tags:
- billing-cost
- cache-inefficiency
- catchup
- claude-code
- hn
- opencode
- subagents
- system-prompt
- token-usage
score: 685
hn_id: '48883275'
comments: https://news.ycombinator.com/item?id=48883275
why_read: This analysis reveals how Claude Code's extensive system prompts, cache
  inefficiency, and subagent architecture lead to significantly higher token consumption
  and increased billing costs compared to OpenCode. Readers will gain a mechanistic
  understanding of these hidden LLM costs.
authors:
- systima
author: systima
---

The hidden costs of running LLM agents can be staggering, far beyond just inference. A recent analysis shows Claude Code sends 33,000 tokens before your prompt even starts, compared to OpenCode's 7,000.

This massive overhead comes from system prompts, tool schemas, and injected scaffolding. Worse, Claude Code is highly cache-inefficient, rewriting tens of thousands of tokens mid-session, leading to premium cache write costs.

Adding configuration files or subagents escalates these expenses dramatically. A 72KB instruction file can add 20,000 tokens per request, and fanning out to two subagents can quadruple the total token count.

Understanding these hidden mechanics is crucial for any engineer building with LLMs. Token efficiency is not just about speed, it is about controlling operational costs for AI agent deployments.

Optimize your LLM infrastructure or prepare for a hefty bill.
