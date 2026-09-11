---
title: Procedural Graphs enable self-evolving execution structures for LLM agents
source: hn
url: https://arxiv.org/abs/2609.09153
date: '2026-09-09'
tags:
- catchup
- hn
- knowledge-graphs
- llm-agents
- procedural-graphs
- procedural-knowledge
- self-evolving-systems
- trajectory-refinement
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49629868'
comments: https://news.ycombinator.com/item?id=49629868
why_read: This paper introduces Procedural Graphs to enhance LLM agents' planning
  and action selection by organizing procedural knowledge. Readers will learn how
  these self-evolving graphs provide situational guidance and refine agent trajectories,
  preventing common failures like goal drift and unproductive repetitions.
authors:
- Yuxing Lu
- Yicheng Chen
- Shanchan Wu
- "Sercan \xD6. Ar\u0131k"
---

LLM agents often struggle with long-horizon planning, losing context, or repeating unproductive actions. The challenge is not always the model, but how it manages procedural knowledge over time.

This paper introduces 'Procedural Graphs' as a way to organize what-to-do knowledge for agents, much like knowledge graphs organize factual information. It is a self-evolving system: an LLM refiner improves the graph's topology based on successful and failed trajectories.

This approach provides a step-level situational guidance to bias an agent's next action without dictating it, leading to agents that learn to perform better over time. It is a significant step towards more robust and reliable autonomous agents.
