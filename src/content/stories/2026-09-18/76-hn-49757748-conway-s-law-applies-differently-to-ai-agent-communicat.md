---
title: Conway's Law applies differently to AI agent communication
source: hn
url: https://danieltan.weblog.lol/2026/09/conways-law-and-programming-languages
date: '2026-09-18'
tags:
- ai-agents
- catchup
- communication
- context-pollution
- context-window
- conways-law
- hn
- shared-priors
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49757748'
comments: https://news.ycombinator.com/item?id=49757748
why_read: This article clarifies Conway's Law by mapping communication to system structure.
  Readers will learn why Conway's Law applies differently to AI agents due to their
  unique communication speeds, fixed context windows, and lack of shared priors.
authors:
- thunderbong
---

Conway's Law is a well-known principle in software engineering: organizations design systems that mirror their communication structures. But what happens when you apply this to AI agents? The insights are surprisingly profound for multi-agent system design.

This article cleverly argues that agents, unlike humans, have fixed context windows and token budgets that reset, fundamentally changing their "communication graph." This leads to a concept of "context pollution," where too much irrelevant information within an agent's context window degrades performance.

This explains why simply adding more agents or creating complex "ultra" or "multi-agent" modes can often be less effective than well-scoped, dedicated single agents. The "interfaces" between agents are not just APIs; they are highly constrained by context management.

Understanding this extension of Conway's Law is critical for any senior engineer designing scalable and effective AI agent systems, providing a new lens to optimize agent architectures and avoid common pitfalls.
