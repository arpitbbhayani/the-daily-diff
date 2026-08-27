---
title: Full communication in multi-agent teams erases diversity, causing an interaction
  tax
source: hn
url: https://arxiv.org/abs/2608.23541
date: '2026-08-25'
tags:
- catchup
- communication
- diversity-erasure
- hn
- independent-proposal-generation
- interaction-tax
- multi-agent-llms
- solution-convergence
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49431350'
comments: https://news.ycombinator.com/item?id=49431350
why_read: This paper offers a critical insight into multi-agent LLM performance, explaining
  why full communication can paradoxically hurt outcomes by eroding solution diversity.
  Readers will learn about the 'interaction tax' and the conditions under which multi-agent
  interaction truly helps.
authors:
- Summer Eunhyung Ann
- Haokun Liu
- Chenhao Tan
---

A common intuition in multi-agent system design is that more communication inherently leads to better outcomes. However, recent research suggests a surprising counter-argument: an "interaction tax" can actually degrade performance.

This paper empirically demonstrates that when LLM agents exchange complete solutions, their proposals quickly converge, effectively erasing the diversity that multi-agent systems are intended to leverage. This premature convergence prevents agents from exploring a wider range of solutions, often leading to suboptimal results.

The key takeaway is that multi-agent performance relies less on the sheer volume of interaction and more on the quality and timing of information exchange. Engineers designing multi-agent workflows should focus on selective communication strategies that preserve diversity and encourage independent exploration, only sharing information at opportune moments.
