---
title: Context compaction halves inference costs for long-horizon agents
source: news
url: https://unreallabs.ai/blog/long-horizon-agents-at-half-the-cost/
date: '2026-10-06'
tags:
- async-architecture
- catchup
- context-compaction
- inference-cost
- long-horizon-agents
- news
- swe-marathon
section: ai
is_news: true
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49981585'
comments: https://news.ycombinator.com/item?id=49981585
why_read: Learn how non-blocking context compaction maintains agent performance on
  long-running benchmarks while cutting token inference costs nearly in half.
authors:
- VeriuMaxon
image: /infographics/15-news-49981585.jpg
---

Running long-horizon AI coding agents is notoriously expensive because context windows rapidly inflate with tool call histories. Unreal Labs introduced an asynchronous context compaction harness that matches benchmark performance on SWE-Marathon while reducing total inference costs by 48 percent.

Instead of blocking agent execution to summarize history, the harness runs compaction in the background. It summarizes middle turns of the session context without interrupting inflight asynchronous tool executions, leaving the initial system prompt and recent conversational turns intact.

Optimizing context lifecycle management inside the agent harness delivers huge cost savings without sacrificing reasoning fidelity.
