---
authors:
- Minseon Kim
- Zhengyan Shi
- Emiliano Penaloza
- Christopher Cui
- Roger Creus Castanyer
- Maryam Hashemzadeh
comments: https://news.ycombinator.com/item?id=49627340
date: '2026-09-09'
depth_score: 8
hn_id: '49627340'
image: /infographics/62-hn-49627340.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- coding-agent
- constrained-hardware
- hn
- online-task-synthesis
- reinforcement-learning
- small-models
title: FrogNano trains a 4B coding agent via online task synthesis
url: https://academy.dair.ai/papers/frognano-training-a-4b-coding-agent-via-online-task-synthesis-2609.07925
utility_score: 7
why_read: This paper presents FrogNano, a 4B coding agent trained efficiently with
  online task synthesis, demonstrating that competitive small coding agents can be
  built without distillation from larger models. It offers insights into innovative
  training methodologies for resource-constrained environments.
---

Training competitive small coding agents without distilling from larger models? FrogNano shows how it is done. This 4B coding agent is post-trained exclusively with RL on 1,500 synthetic SWE environments, a groundbreaking approach.

The secret sauce is an online task synthesis pipeline that generates tasks precisely at the current checkpoint's "learnability frontier," meaning the agent is always challenged at the right level. This removes the dependency on stronger teacher models that most small coding agents currently rely upon.

Designed for constrained hardware, FrogNano offers practical insights into building efficient, effective AI agents that can tackle real-world software engineering tasks. This is a crucial step towards deploying powerful AI capabilities more broadly.