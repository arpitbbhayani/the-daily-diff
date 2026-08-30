---
title: WikiSkill compiles agent experience into persistent knowledge for skill evolution
source: hn
url: https://arxiv.org/abs/2608.27454
date: '2026-08-28'
tags:
- agent-skills
- ai-agents
- catchup
- hn
- knowledge-accumulation
- persistent-knowledge
- skill-evolution
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49480740'
comments: https://news.ycombinator.com/item?id=49480740
why_read: This paper introduces WikiSkill, a framework for enhancing AI agent capabilities
  through persistent knowledge accumulation. Readers will learn how this approach
  consistently outperforms existing methods, enables skill transfer, and allows smaller
  models to achieve better results than larger models without such evolved skills.
authors:
- Liyan Tang
- Cyrus Rashtchian
- Chun-Sung Ferng
- Andrew Tomkins
- Da-Cheng Juan
- Tu Vu
---

A major challenge in AI agents is getting them to truly learn and evolve their skills over time. WikiSkill presents a compelling solution: a framework that continuously compiles agent experience into a persistent knowledge base, or "wiki."

This is not just incremental; WikiSkill demonstrates that separating raw execution experience from accumulated knowledge and executable skills leads to superior performance. Notably, smaller models equipped with these evolved skills can actually outperform substantially larger models without them. This changes the scaling calculus.

The framework also shows that skills evolved by one model can effectively transfer to others, even across different model families. For senior engineers building complex agentic systems, this offers a practical blueprint for creating more adaptive, capable, and efficient AI agents.
