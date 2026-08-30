---
title: Cutting AI coding agent context overhead with dynamic tool activation
source: hn
url: https://m-reschreiter.at/en/blog/how-i-cut-80-percent-context-overhead-dynamic-tools
date: '2026-08-28'
tags:
- ai-coding-agents
- catchup
- context-window
- dynamic-tools
- hn
- llm-performance
- token-optimization
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49476278'
comments: https://news.ycombinator.com/item?id=49476278
why_read: Read this to understand how to drastically reduce context window overhead
  in AI coding agents and improve their reasoning and latency by dynamically activating
  tools and consolidating tool schemas.
authors:
- Mohammed Reschreiter
---

LLM coding agents often start with 10,000 to 25,000+ tokens consumed by static tool schemas before any actual work begins. This overhead not only costs more but also degrades the model's reasoning by cluttering its attention space with irrelevant options.

One effective solution is dynamic tool activation. Instead of dumping every possible tool, you maintain a baseline of essential tools and activate specialized ones only when needed, with zero meta-tool schema overhead and automatic time-to-live cleanup.

This approach, combined with action-based tool consolidation, dramatically reduces context usage by over 80 percent in many cases. It makes agents more efficient and focused.

It is a smart design choice for any engineer building or optimizing agentic systems to deliver better performance and lower operational costs.
