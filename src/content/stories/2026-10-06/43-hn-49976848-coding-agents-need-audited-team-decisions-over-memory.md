---
title: Coding agents need audited team decisions over memory
source: hn
url: https://gethrbr.com/blog/do-agents-need-memory
date: '2026-10-06'
tags:
- agent-memory
- architecture-decision-records
- catchup
- coding-agents
- documentation
- hn
- vibemembench
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49976848'
comments: https://news.ycombinator.com/item?id=49976848
why_read: This analysis breaks down empirical research comparing agent memory systems
  against curated markdown documentation to show why automated retrieval often degrades
  coding performance.
authors:
- shoustak
---

Automated memory systems for coding agents often perform worse than giving the agent no memory at all. Recent benchmark evaluations show that vector-similarity retrieval for agent experience tends to pull context without sufficient relevance, feeding stale facts into the prompt and polluting the context window.

The core breakdown occurs because similarity search treats every remembered snippet equally. It cannot determine if an architectural decision was superseded last week or if a past code fix was actually correct.

Teams get much better results by ditching dynamic memory plugins in favor of human-gated documentation like Architecture Decision Records (ADRs) or structured markdown files. When agents read curated rules and dated decisions, their code edit precision jumps significantly.

Context quality beats context volume every single time.
