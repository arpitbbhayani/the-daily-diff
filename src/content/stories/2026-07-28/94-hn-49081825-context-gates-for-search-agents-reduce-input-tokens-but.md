---
authors:
- k2so
comments: https://news.ycombinator.com/item?id=49081825
date: '2026-07-28'
depth_score: 7
hn_id: '49081825'
image: /infographics/94-hn-49081825.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- context-gate
- cost-optimization
- hn
- latency
- retrieval-precision
- search-agents
title: Context gates for search agents reduce input tokens but increase cost
url: https://bluenotebook.io/blog/context-gating-browsecomp/
utility_score: 8
why_read: This post evaluates a context gate for search agents, revealing how it reduces
  input tokens and maintains accuracy while potentially increasing latency and operational
  cost. Readers will understand the practical trade-offs in implementing such a retrieval
  mechanism.
---

Many agent frameworks fail not because the underlying LLM is weak, but because they feed it the wrong context at the wrong time. New research shows that distractor documents degrade agent accuracy nonlinearly, especially when multiple search calls accumulate context.

The problem is not just token cost, but signal-to-noise. A "context gate" - a second model call deciding what enters context - cut input by 1.4x, with indistinguishable accuracy. However, this came with increased latency and potentially higher cost depending on pricing models.

This highlights that for agentic retrieval, the focus should shift from maximizing recall to optimizing precision and intelligent context admission control. It is a critical insight for building robust, production-ready AI agents.