---
title: ArXiv Paper
source: arxiv
url: https://arxiv.org/abs/49596369
date: '2026-09-07'
tags:
- arxiv
- catchup
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
arxiv_id: '49596369'
categories: ''
why_read: This paper provides a deep dive into advanced techniques for training performant
  search agents, including novel data generation methods and optimization strategies
  like SFT-RL climbing and careful context management. You will learn about building
  robust AI agent systems.
---

Training search agents often struggles with creating realistic, multi-hop reasoning tasks and optimizing them in production. A new paper introduces Iris-mini and Iris-pro, showcasing a novel approach to tackle these challenges.

The researchers reverse-engineer tasks from web corpus hyperlink structures, generating questions that demand genuine reasoning rather than simple string matching. This data generation method ensures the agents are trained on truly complex queries that a reference model fails without supporting evidence.

They employ an SFT-RL climbing procedure, iteratively refining the policy against live search and feeding the hardest, most efficient rollouts back into supervised training. This continuous feedback loop is critical for pushing the agents to the search frontier.

Effective inference-time context management is also highlighted as crucial, often outweighing differences between systems. The focus is on a single ReAct agent, demonstrating impressive performance through careful system design and training, not just larger models.

This work provides a compelling blueprint for developing highly capable, context-aware AI search agents.
