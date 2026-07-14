---
title: Auditable Framework Reveals LLM Agent Behavior in Hidden Information Games
source: arxiv
url: http://arxiv.org/abs/2607.10814v1
date: '2026-07-12'
tags:
- agent-evaluation
- arxiv
- auditable-framework
- belief-state
- catchup
- cs.AI
- cs.MA
- hidden-information-games
- llm-agents
- multi-agent-systems
- werewolf-game
arxiv_id: '2607.10814'
categories: cs.MA, cs.AI
why_read: This piece introduces an auditable framework for evaluating LLM agents in
  complex hidden-information multi-agent games like Werewolf. It provides a mechanism
  to make opaque agent behavior replayable and uses external belief states to identify
  decision-relevant signals, enabling safer, controlled iteration.
authors:
- Yuan Gao
- Jiangyi Yang
- Yao Zhao
- Yichi Zhang
---

Evaluating LLM agents in hidden-information, multi-agent settings is notoriously difficult, but an auditable framework can change the game. This paper explores a 9-player Werewolf environment to demonstrate exactly that.

The framework maintains an external belief state over hidden roles and logs belief updates and deviations as structured evidence. This allows for defensive offline improvement loops, reviewing bad cases before strategy changes.

Despite improving good-side win rates, the study reveals low direct action-belief consistency. This suggests that the external belief acts more as an auditable cognitive baseline and decision-relevant signal than a direct action driver.

If you are designing multi-agent systems where transparency and iteration are key, an auditable framework for agent behavior is invaluable. It transforms opaque decisions into replayable evidence for safer development.

Transparent AI agents are auditable agents.
